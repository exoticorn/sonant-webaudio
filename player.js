"use strict";

function player(song, onEnd) {
  var context = new AudioContext();

  var time = 0.1;
  var endTime = time + song.songLen;
  
  var oneBuffer = context.createBuffer(1, 128, 22050);
  var oneData = oneBuffer.getChannelData(0);
  for(var i = 0; i < 128; ++i) {
    oneData[i] = 1;
  }
  var oneSrc = context.createBufferSource();
  oneSrc.buffer = oneBuffer;
  oneSrc.loop = true;
  oneSrc.start(time);
  oneSrc.stop(endTime);
  
  var noiseBuffer = context.createBuffer(1, 65536, 44100);
  var noiseData = noiseBuffer.getChannelData(0);
  for(i = 0; i < 65536; ++i) {
    noiseData[i] = Math.random() * 2 - 1;
  }
  
  function cnst(v) {
    var gain = context.createGain();
    gain.gain.value = v;
    oneSrc.connect(gain);
    return gain;
  }
  
  function add(a, b, scale) {
    var gain = context.createGain();
    a.connect(gain);
    if(typeof b === 'number') {
      b = cnst(b);
    }
    b.connect(gain);
    gain.gain.value = scale === undefined ? 1 : scale;
    return gain;
  }
  
  function mul(a, b) {
    var gain = context.createGain();
    a.connect(gain);
    if(typeof b === 'number') {
      gain.gain.value = b;
    } else {
      gain.gain.value = 0;
      b.connect(gain.gain);
    }
    return gain;
  }
  
  var oscillators = ['sine', 'square', 'sawtooth', 'triangle'];
  var filters = ['highpass', 'lowpass', 'bandpass', 'notch'];
  
  var insts = song.songData.map(function(inst) {
    var lfo = context.createOscillator();
    lfo.type = oscillators[inst.lfo_waveform];
    lfo.frequency.value = Math.pow(2, inst.lfo_freq - 8) * 44100 / song.rowLen;
    lfo.start(time);
    lfo.stop(song.songLen + time);
    var lfoOut = add(mul(lfo, inst.lfo_amt / 512), 0.5);
    
    var master = context.createGain();
    master.gain.value = inst.env_master / 255 / 2;
    
    var delay = context.createDelay();
    delay.delayTime.value = inst.fx_delay_time * song.rowLen / 44100 / 2;
    var delayGain = context.createGain();
    delayGain.gain.value = inst.fx_delay_amt / 255;
    delay.connect(delayGain);
    master.connect(delay);
    delayGain.connect(context.destination);
    delayGain.connect(delay);
    master.connect(context.destination);
    
    return { master: master, lfo: lfoOut, delayGain: delayGain, data: inst };
  });
  
  function getNoteFreq(n) {
    return 0.00390625 * Math.pow(1.059463094, n - 128);
  }

  function playNote(inst, note, time) {
    var endTime = time + (inst.data.env_attack + inst.data.env_sustain + inst.data.env_release) / 44100;
    
    var oneSrc = context.createBufferSource();
    oneSrc.buffer = oneBuffer;
    oneSrc.loop = true;
    oneSrc.start(time);
    oneSrc.stop(endTime);

    function cnst(v) {
      var gain = context.createGain();
      gain.gain.value = v;
      oneSrc.connect(gain);
      return gain;
    }
    
    function add(a, b, scale) {
      var gain = context.createGain();
      a.connect(gain);
      if(typeof b === 'number') {
        b = cnst(b);
      }
      b.connect(gain);
      gain.gain.value = scale === undefined ? 1 : scale;
      return gain;
    }
  
    var o1Freq = cnst(getNoteFreq(note + (inst.data.osc1_oct - 8) * 12 + inst.data.osc1_det) * (1 + 0.0008 * inst.data.osc1_detune));
    var o2Freq = cnst(getNoteFreq(note + (inst.data.osc2_oct - 8) * 12 + inst.data.osc2_det) * (1 + 0.0008 * inst.data.osc2_detune));
  
    var env = context.createGain();
    oneSrc.connect(env);
    env.gain.value = 0;
    env.gain.setValueAtTime(0, time);
    env.gain.linearRampToValueAtTime(1, time + inst.data.env_attack / 44100);
    env.gain.setValueAtTime(1, time + (inst.data.env_attack + inst.data.env_sustain) / 44100);
    env.gain.linearRampToValueAtTime(0, endTime);
    
    if(inst.data.lfo_osc1_freq) {
      o1Freq = add(o1Freq, inst.lfo);
    }
    if(inst.data.osc1_xenv) {
      o1Freq = mul(o1Freq, mul(env, env));
    }
    var osc1 = context.createOscillator();
    osc1.type = oscillators[inst.data.osc1_waveform];
    osc1.frequency.value = 0;
    mul(o1Freq, 44100).connect(osc1.frequency);
    var osc1Out = mul(osc1, inst.data.osc1_vol / 255);

    if(inst.data.osc2_xenv) {
      o1Freq = mul(o2Freq, mul(env, env));
    }
    var osc2 = context.createOscillator();
    osc2.type = oscillators[inst.data.osc2_waveform];
    osc2.frequency.value = 0;
    mul(o2Freq, 44100).connect(osc2.frequency);
    var osc2Out = mul(osc2, inst.data.osc2_vol / 255);
    
    var envGain = context.createGain();
    osc1Out.connect(envGain);
    osc2Out.connect(envGain);
    envGain.gain.value = 0;
    env.connect(envGain.gain);
    
    if(inst.data.noise_fader) {
      var noiseSrc = context.createBufferSource();
      noiseSrc.buffer = noiseBuffer;
      noiseSrc.loop = true;
      noiseSrc.start(time);
      noiseSrc.stop(endTime);
    
      mul(mul(noiseSrc, inst.data.noise_fader / 255), env).connect(envGain);
    }
    
    var output;

    if(inst.data.fx_filter) {
      var filter = context.createBiquadFilter();
      filter.type = filters[inst.data.fx_filter - 1];
      filter.Q.value = 255 / inst.data.fx_resonance;
      if(inst.data.lfo_fx_freq) {
        filter.frequency.value = 0;
        mul(inst.lfo, inst.data.fx_freq * 0.75).connect(filter.frequency);
      } else {
        filter.frequency.value = inst.data.fx_freq * 0.75;
      }
      var filterGain = context.createGain();
      filterGain.gain.value = Math.sqrt(inst.data.fx_resonance / 255);
      envGain.connect(filterGain);
      filterGain.connect(filter);
      output = filter;
    } else {
      output = envGain;
    }
    
    var pan = Math.sin(Math.pow(2, inst.data.fx_pan_freq - 8) * 44100 / song.rowLen * 2 * Math.PI * time) * inst.data.fx_pan_amt / 512;
    var leftGain = context.createGain();
    leftGain.gain.value = 0.5 + pan;
    output.connect(leftGain);
    var rightGain = context.createGain();
    rightGain.gain.value = 0.5 - pan;
    output.connect(rightGain);
    var merger = context.createChannelMerger(2);
    leftGain.connect(merger, 0, 0);
    rightGain.connect(merger, 0, 1);
    merger.connect(inst.master);
    
    osc1.start(time);
    osc2.start(time);
    osc1.stop(endTime);
    osc2.stop(endTime);
    
    setTimeout(function() {
      // this should happen automatically, but without this, chrome eventually runs out of CPU time
      merger.disconnect();
    }, (endTime - context.currentTime) * 1000);
  }
  
  var sequenceIndex = 0;
  var patternIndex = 0;
  var rowTime = time;
  
  function enterNotesForRow() {
    insts.forEach(function(inst, i) {
      var pattern = inst.data.p[sequenceIndex];
      if(pattern > 0) {
        var note = inst.data.c[pattern - 1].n[patternIndex];
        if(note) {
          playNote(inst, note, rowTime);
        }
      }
    });
  }
  
  var stop = false;
  function updateMusic() {
    var until = context.currentTime + 1;
    while(rowTime < until && rowTime < endTime) {
      enterNotesForRow();
      rowTime += song.rowLen / 44100;
      if(++patternIndex >= 32) {
        patternIndex = 0;
        ++sequenceIndex;
      }
    }
    if(rowTime < endTime && !stop) {
      setTimeout(updateMusic, 250);
    } else {
      insts.forEach(function(inst) {
        inst.master.disconnect();
        inst.delayGain.disconnect();
      });
      if(onEnd) {
        onEnd();
      }
    }
  }

  updateMusic();
  
  return {
    stop: function() {
      console.log('stopping');
      stop = true;
    }
  };
}
