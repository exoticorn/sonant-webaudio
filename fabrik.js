    // Song data
    var fabrik = {
      // Song length in seconds (how much data to generate)
      songLen: 99,  // Tune this to fit your needs!

      songData: [
        { // Instrument 0
          // Oscillator 1
          osc1_oct: 10,
          osc1_det: 0,
          osc1_detune: 0,
          osc1_xenv: 0,
          osc1_vol: 61,
          osc1_waveform: 0,
          // Oscillator 2
          osc2_oct: 12,
          osc2_det: 7,
          osc2_detune: 0,
          osc2_xenv: 0,
          osc2_vol: 125,
          osc2_waveform: 0,
          // Noise oscillator
          noise_fader: 0,
          // Envelope
          env_attack: 0,
          env_sustain: 0,
          env_release: 47272,
          env_master: 86,
          // Effects
          fx_filter: 2,
          fx_freq: 7800,
          fx_resonance: 240,
          fx_delay_time: 8,
          fx_delay_amt: 34,
          fx_pan_freq: 3,
          fx_pan_amt: 0,
          // LFO
          lfo_osc1_freq: 0,
          lfo_fx_freq: 0,
          lfo_freq: 0,
          lfo_amt: 0,
          lfo_waveform: 0,
          // Patterns
          p: [1,1,1,2,1,2,3,0,4,0,1,2,1,7,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // Columns
          c: [
            {n: [132,0,0,0,139,0,0,0,137,0,0,0,142,0,0,0,139,0,0,0,144,0,0,0,139,0,0,0,135,0,0,0]},
            {n: [137,0,0,0,142,0,0,0,139,0,0,0,144,0,0,0,142,0,0,0,146,0,0,0,142,0,0,0,135,0,0,0]},
            {n: [0,0,132,0,135,0,132,0,135,0,139,0,0,0,137,0,0,0,132,0,135,0,132,0,135,0,135,0,0,0,135,0]},
            {n: [0,0,132,0,135,0,132,0,135,0,139,0,0,0,137,0,0,0,132,0,135,0,132,0,135,0,135,0,0,0,132,0]},
            {n: [0,0,132,0,135,0,132,0,135,0,139,0,0,0,137,0,0,0,132,0,135,0,132,0,135,0,135,0,0,0,144,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [137,0,0,0,142,0,0,0,139,0,0,0,144,0,0,0,142,0,0,0,146,0,0,0,147,0,0,0,149,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
          ]
        },
        { // Instrument 1
          // Oscillator 1
          osc1_oct: 7,
          osc1_det: 0,
          osc1_detune: 0,
          osc1_xenv: 0,
          osc1_vol: 255,
          osc1_waveform: 3,
          // Oscillator 2
          osc2_oct: 8,
          osc2_det: 0,
          osc2_detune: 8,
          osc2_xenv: 0,
          osc2_vol: 74,
          osc2_waveform: 3,
          // Noise oscillator
          noise_fader: 0,
          // Envelope
          env_attack: 47272,
          env_sustain: 40909,
          env_release: 46363,
          env_master: 149,
          // Effects
          fx_filter: 2,
          fx_freq: 224,
          fx_resonance: 67,
          fx_delay_time: 2,
          fx_delay_amt: 25,
          fx_pan_freq: 0,
          fx_pan_amt: 0,
          // LFO
          lfo_osc1_freq: 0,
          lfo_fx_freq: 0,
          lfo_freq: 0,
          lfo_amt: 0,
          lfo_waveform: 0,
          // Patterns
          p: [0,0,1,2,1,2,3,1,3,1,1,2,1,2,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // Columns
          c: [
            {n: [120,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,120,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [118,0,0,0,0,0,118,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [116,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,118,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
          ]
        },
        { // Instrument 2
          // Oscillator 1
          osc1_oct: 8,
          osc1_det: 0,
          osc1_detune: 0,
          osc1_xenv: 0,
          osc1_vol: 192,
          osc1_waveform: 2,
          // Oscillator 2
          osc2_oct: 8,
          osc2_det: 7,
          osc2_detune: 0,
          osc2_xenv: 0,
          osc2_vol: 172,
          osc2_waveform: 2,
          // Noise oscillator
          noise_fader: 0,
          // Envelope
          env_attack: 48181,
          env_sustain: 80909,
          env_release: 51818,
          env_master: 174,
          // Effects
          fx_filter: 2,
          fx_freq: 1300,
          fx_resonance: 43,
          fx_delay_time: 6,
          fx_delay_amt: 172,
          fx_pan_freq: 1,
          fx_pan_amt: 125,
          // LFO
          lfo_osc1_freq: 0,
          lfo_fx_freq: 1,
          lfo_freq: 3,
          lfo_amt: 180,
          lfo_waveform: 0,
          // Patterns
          p: [0,0,1,2,1,2,3,0,3,0,5,6,5,6,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // Columns
          c: [
            {n: [120,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [118,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [116,0,0,0,0,0,0,0,0,0,0,0,0,0,118,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,120,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [120,151,156,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [118,149,154,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [152,116,0,0,0,0,0,0,0,0,0,0,0,0,118,0,142,0,0,0,0,0,0,0,0,0,0,0,0,0,120,144]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
          ]
        },
        { // Instrument 3
          // Oscillator 1
          osc1_oct: 6,
          osc1_det: 0,
          osc1_detune: 0,
          osc1_xenv: 1,
          osc1_vol: 193,
          osc1_waveform: 0,
          // Oscillator 2
          osc2_oct: 5,
          osc2_det: 7,
          osc2_detune: 0,
          osc2_xenv: 0,
          osc2_vol: 80,
          osc2_waveform: 0,
          // Noise oscillator
          noise_fader: 0,
          // Envelope
          env_attack: 50,
          env_sustain: 0,
          env_release: 17272,
          env_master: 254,
          // Effects
          fx_filter: 1,
          fx_freq: 0,
          fx_resonance: 254,
          fx_delay_time: 0,
          fx_delay_amt: 0,
          fx_pan_freq: 0,
          fx_pan_amt: 0,
          // LFO
          lfo_osc1_freq: 0,
          lfo_fx_freq: 0,
          lfo_freq: 0,
          lfo_amt: 0,
          lfo_waveform: 3,
          // Patterns
          p: [0,0,0,0,0,0,1,2,2,5,3,4,7,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // Columns
          c: [
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,147,0]},
            {n: [147,0,0,0,0,0,147,0,147,0,0,0,0,0,147,0,147,0,0,0,0,0,147,0,147,0,0,0,0,0,147,0]},
            {n: [147,0,0,0,0,0,147,0,0,0,0,0,0,0,147,0,147,0,0,0,0,0,147,0,0,0,0,0,0,0,147,147]},
            {n: [147,0,0,0,0,0,147,0,0,0,0,0,0,0,0,0,147,0,0,0,0,0,147,0,0,0,0,0,0,0,0,0]},
            {n: [147,0,0,0,0,0,147,0,147,0,0,0,0,0,147,0,147,0,0,0,0,0,147,0,147,0,0,0,0,0,0,0]},
            {n: [147,0,0,0,0,0,147,0,147,0,0,0,0,0,146,0,146,0,0,0,0,0,144,0,135,0,0,0,0,0,0,0]},
            {n: [147,0,0,0,0,0,147,0,0,0,147,0,159,0,0,0,147,0,147,0,0,0,147,0,0,0,147,0,159,0,147,0]},
            {n: [147,0,0,0,0,0,147,0,0,0,0,0,159,0,147,0,147,0,0,0,0,0,147,0,147,0,0,0,0,0,147,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
          ]
        },
        { // Instrument 4
          // Oscillator 1
          osc1_oct: 6,
          osc1_det: 0,
          osc1_detune: 0,
          osc1_xenv: 1,
          osc1_vol: 255,
          osc1_waveform: 1,
          // Oscillator 2
          osc2_oct: 7,
          osc2_det: 0,
          osc2_detune: 142,
          osc2_xenv: 1,
          osc2_vol: 191,
          osc2_waveform: 1,
          // Noise oscillator
          noise_fader: 0,
          // Envelope
          env_attack: 2727,
          env_sustain: 5454,
          env_release: 4545,
          env_master: 65,
          // Effects
          fx_filter: 2,
          fx_freq: 200,
          fx_resonance: 124,
          fx_delay_time: 3,
          fx_delay_amt: 202,
          fx_pan_freq: 6,
          fx_pan_amt: 254,
          // LFO
          lfo_osc1_freq: 0,
          lfo_fx_freq: 0,
          lfo_freq: 6,
          lfo_amt: 254,
          lfo_waveform: 2,
          // Patterns
          p: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // Columns
          c: [
            {n: [113,0,125,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
          ]
        },
        { // Instrument 5
          // Oscillator 1
          osc1_oct: 9,
          osc1_det: 0,
          osc1_detune: 0,
          osc1_xenv: 0,
          osc1_vol: 0,
          osc1_waveform: 0,
          // Oscillator 2
          osc2_oct: 7,
          osc2_det: 0,
          osc2_detune: 0,
          osc2_xenv: 1,
          osc2_vol: 0,
          osc2_waveform: 0,
          // Noise oscillator
          noise_fader: 227,
          // Envelope
          env_attack: 0,
          env_sustain: 4545,
          env_release: 3636,
          env_master: 212,
          // Effects
          fx_filter: 1,
          fx_freq: 3200,
          fx_resonance: 240,
          fx_delay_time: 0,
          fx_delay_amt: 0,
          fx_pan_freq: 4,
          fx_pan_amt: 0,
          // LFO
          lfo_osc1_freq: 0,
          lfo_fx_freq: 1,
          lfo_freq: 7,
          lfo_amt: 254,
          lfo_waveform: 2,
          // Patterns
          p: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // Columns
          c: [
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,147,0,0,0,0,0,0,0,147,0,0,0,0,0,0,0,147,0,0,0]},
            {n: [0,0,0,0,147,0,0,0,0,0,0,0,147,0,0,0,0,0,0,0,147,0,0,0,0,0,0,0,147,0,147,147]},
            {n: [0,0,0,0,147,0,0,0,0,0,0,0,147,0,0,0,0,0,147,0,147,0,0,0,0,0,147,0,0,147,0,0]},
            {n: [0,0,0,0,147,0,0,0,0,0,0,0,147,147,0,0,0,0,147,0,0,147,0,0,147,0,0,147,147,147,147,147]},
            {n: [0,0,0,0,147,0,0,0,0,0,0,0,147,0,0,0,0,0,0,0,147,0,0,0,0,0,0,0,147,0,0,0]},
            {n: [0,147,0,0,147,0,0,0,0,147,0,0,147,0,0,0,0,147,0,0,147,0,0,0,0,147,0,0,147,0,0,0]},
            {n: [0,147,0,0,147,0,0,0,0,147,0,0,147,0,0,0,0,147,0,0,147,0,0,0,0,147,0,0,147,0,147,147]},
            {n: [0,147,0,0,147,0,0,0,0,147,0,0,147,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
          ]
        },
        { // Instrument 6
          // Oscillator 1
          osc1_oct: 8,
          osc1_det: 0,
          osc1_detune: 0,
          osc1_xenv: 0,
          osc1_vol: 0,
          osc1_waveform: 2,
          // Oscillator 2
          osc2_oct: 8,
          osc2_det: 0,
          osc2_detune: 26,
          osc2_xenv: 0,
          osc2_vol: 0,
          osc2_waveform: 2,
          // Noise oscillator
          noise_fader: 255,
          // Envelope
          env_attack: 0,
          env_sustain: 0,
          env_release: 4545,
          env_master: 254,
          // Effects
          fx_filter: 1,
          fx_freq: 10300,
          fx_resonance: 205,
          fx_delay_time: 8,
          fx_delay_amt: 0,
          fx_pan_freq: 7,
          fx_pan_amt: 254,
          // LFO
          lfo_osc1_freq: 0,
          lfo_fx_freq: 0,
          lfo_freq: 4,
          lfo_amt: 208,
          lfo_waveform: 3,
          // Patterns
          p: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // Columns
          c: [
            {n: [147,0,147,0,147,0,147,0,147,0,147,0,147,0,147,0,147,0,147,0,147,0,147,0,0,0,0,0,0,0,0,0]},
            {n: [135,0,0,147,0,0,0,0,0,147,147,0,0,0,147,147,147,0,0,147,0,0,0,147,0,147,0,0,0,147,147,147]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,147,147]},
            {n: [0,0,0,147,0,0,0,147,0,0,147,0,147,0,0,147,0,147,0,0,147,0,0,147,0,0,147,0,0,147,147,147]},
            {n: [0,0,0,147,0,0,0,147,0,0,148,0,147,0,147,147,0,0,147,0,147,147,147,0,147,147,147,0,147,147,147,147]},
            {n: [147,0,147,0,147,0,147,0,147,0,147,0,147,147,147,0,147,0,147,0,147,0,147,0,147,147,147,0,147,147,147,0]},
            {n: [147,0,147,0,147,0,147,0,147,0,147,0,147,147,147,0,147,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
          ]
        },
        { // Instrument 7
          // Oscillator 1
          osc1_oct: 10,
          osc1_det: 0,
          osc1_detune: 0,
          osc1_xenv: 0,
          osc1_vol: 95,
          osc1_waveform: 0,
          // Oscillator 2
          osc2_oct: 12,
          osc2_det: 0,
          osc2_detune: 0,
          osc2_xenv: 0,
          osc2_vol: 0,
          osc2_waveform: 0,
          // Noise oscillator
          noise_fader: 0,
          // Envelope
          env_attack: 100,
          env_sustain: 0,
          env_release: 56363,
          env_master: 90,
          // Effects
          fx_filter: 2,
          fx_freq: 1300,
          fx_resonance: 254,
          fx_delay_time: 0,
          fx_delay_amt: 0,
          fx_pan_freq: 0,
          fx_pan_amt: 0,
          // LFO
          lfo_osc1_freq: 0,
          lfo_fx_freq: 0,
          lfo_freq: 0,
          lfo_amt: 0,
          lfo_waveform: 0,
          // Patterns
          p: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // Columns
          c: [
            {n: [120,0,122,0,120,0,122,0,120,0,122,0,120,0,122,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [120,0,115,0,123,0,115,0,120,0,115,0,123,0,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [123,0,122,0,120,0,115,0,123,0,122,0,120,0,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [127,0,125,0,123,0,120,0,127,0,125,0,123,0,120,0,127,0,125,0,123,0,120,0,127,0,125,0,123,0,120,0]},
            {n: [127,0,125,0,123,0,120,0,127,0,125,0,123,0,120,0,127,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
          ]
        }
      ],
      rowLen: 7875,   // In sample lengths
      endPattern: 17  // End pattern
    };