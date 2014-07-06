    // Song data
    var microscope = {
      // Song length in seconds (how much data to generate)
      songLen: 170,  // Tune this to fit your needs!

      songData: [
        { // Instrument 0
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
          osc2_vol: 201,
          osc2_waveform: 3,
          // Noise oscillator
          noise_fader: 0,
          // Envelope
          env_attack: 100,
          env_sustain: 150,
          env_release: 13636,
          env_master: 137,
          // Effects
          fx_filter: 2,
          fx_freq: 11024,
          fx_resonance: 254,
          fx_delay_time: 6,
          fx_delay_amt: 121,
          fx_pan_freq: 6,
          fx_pan_amt: 147,
          // LFO
          lfo_osc1_freq: 0,
          lfo_fx_freq: 1,
          lfo_freq: 6,
          lfo_amt: 195,
          lfo_waveform: 0,
          // Patterns
          p: [1,2,1,2,3,4,5,6,3,4,5,6,3,4,7,0,0,0,0,0,0,0,0,8,9,3,10,8,9,3,10,5,6,3,4,8,9,3,10,5,6,3,4,7,0,0,0,0],
          // Columns
          c: [
            {n: [135,0,140,0,147,0,0,0,0,0,0,0,0,0,145,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [135,0,147,0,0,0,0,0,0,0,0,0,0,0,140,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [135,0,140,0,147,0,0,0,0,0,0,0,0,0,145,0,0,0,0,0,0,0,0,0,0,0,157,0,0,0,159,0]},
            {n: [143,0,0,0,0,0,145,0,0,0,143,0,150,0,157,0,0,0,0,0,0,0,154,0,0,0,0,0,0,0,0,0]},
            {n: [147,0,135,0,147,0,159,0,0,0,135,0,145,0,157,0,0,0,0,0,0,0,0,0,0,0,155,0,0,0,154,0]},
            {n: [152,0,140,0,152,0,0,0,0,0,138,0,0,0,150,0,0,0,0,0,0,0,0,0,0,0,138,0,150,0,164,0]},
            {n: [152,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [135,0,140,0,147,0,0,0,0,0,0,0,0,0,140,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [133,0,145,0,0,0,0,0,0,0,0,0,0,0,142,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [143,0,0,0,0,0,0,0,0,0,140,0,143,0,142,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
          ]
        },
        { // Instrument 1
          // Oscillator 1
          osc1_oct: 5,
          osc1_det: 0,
          osc1_detune: 0,
          osc1_xenv: 0,
          osc1_vol: 240,
          osc1_waveform: 0,
          // Oscillator 2
          osc2_oct: 5,
          osc2_det: 0,
          osc2_detune: 0,
          osc2_xenv: 0,
          osc2_vol: 157,
          osc2_waveform: 2,
          // Noise oscillator
          noise_fader: 0,
          // Envelope
          env_attack: 100,
          env_sustain: 20000,
          env_release: 69090,
          env_master: 218,
          // Effects
          fx_filter: 2,
          fx_freq: 3900,
          fx_resonance: 240,
          fx_delay_time: 6,
          fx_delay_amt: 70,
          fx_pan_freq: 0,
          fx_pan_amt: 0,
          // LFO
          lfo_osc1_freq: 0,
          lfo_fx_freq: 1,
          lfo_freq: 7,
          lfo_amt: 42,
          lfo_waveform: 0,
          // Patterns
          p: [1,2,1,2,3,4,1,2,3,5,1,2,3,5,6,7,8,3,5,7,8,3,5,7,8,3,5,7,8,3,6,1,2,3,5,7,8,3,5,1,2,3,5,6,0,0,0,0],
          // Columns
          c: [
            {n: [147,0,0,0,0,0,0,0,0,0,0,0,0,0,149,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [150,0,0,0,0,0,0,0,0,0,0,0,0,0,140,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [143,0,0,0,0,0,0,0,0,0,0,0,0,0,145,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [147,0,0,0,0,0,0,0,0,0,0,0,0,0,150,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [147,0,0,0,0,0,0,0,0,0,0,0,0,0,145,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [147,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [147,0,0,0,0,0,0,0,0,0,0,0,0,0,140,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [145,0,0,0,0,0,0,0,0,0,0,0,0,0,142,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
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
          osc1_waveform: 3,
          // Oscillator 2
          osc2_oct: 8,
          osc2_det: 7,
          osc2_detune: 0,
          osc2_xenv: 0,
          osc2_vol: 136,
          osc2_waveform: 2,
          // Noise oscillator
          noise_fader: 0,
          // Envelope
          env_attack: 36363,
          env_sustain: 39090,
          env_release: 38181,
          env_master: 42,
          // Effects
          fx_filter: 4,
          fx_freq: 11024,
          fx_resonance: 254,
          fx_delay_time: 6,
          fx_delay_amt: 106,
          fx_pan_freq: 3,
          fx_pan_amt: 254,
          // LFO
          lfo_osc1_freq: 0,
          lfo_fx_freq: 1,
          lfo_freq: 6,
          lfo_amt: 254,
          lfo_waveform: 0,
          // Patterns
          p: [0,0,0,0,0,0,1,2,3,4,1,2,3,4,5,0,0,0,0,6,7,3,4,6,7,3,4,6,7,3,8,1,2,3,4,6,7,3,4,1,2,3,4,5,0,0,0,0],
          // Columns
          c: [
            {n: [159,0,0,0,0,0,0,0,0,0,0,0,0,0,157,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [155,0,0,0,0,0,0,0,0,0,0,0,0,0,147,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [150,0,0,0,0,0,0,0,0,0,0,0,0,0,152,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [155,0,0,0,0,0,0,0,0,0,0,0,0,0,154,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [159,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [159,0,0,0,0,0,0,0,0,0,0,0,0,0,152,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [155,0,0,0,0,0,0,0,0,0,0,0,0,0,154,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [155,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
          ]
        },
        { // Instrument 3
          // Oscillator 1
          osc1_oct: 7,
          osc1_det: 0,
          osc1_detune: 0,
          osc1_xenv: 1,
          osc1_vol: 192,
          osc1_waveform: 1,
          // Oscillator 2
          osc2_oct: 7,
          osc2_det: 7,
          osc2_detune: 0,
          osc2_xenv: 1,
          osc2_vol: 191,
          osc2_waveform: 2,
          // Noise oscillator
          noise_fader: 0,
          // Envelope
          env_attack: 1818,
          env_sustain: 4545,
          env_release: 1818,
          env_master: 100,
          // Effects
          fx_filter: 3,
          fx_freq: 9300,
          fx_resonance: 254,
          fx_delay_time: 6,
          fx_delay_amt: 111,
          fx_pan_freq: 5,
          fx_pan_amt: 254,
          // LFO
          lfo_osc1_freq: 0,
          lfo_fx_freq: 1,
          lfo_freq: 4,
          lfo_amt: 148,
          lfo_waveform: 0,
          // Patterns
          p: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,2,3,4,1,2,1,2,1,2,5,0,0,0,0],
          // Columns
          c: [
            {n: [135,135,147,135,135,147,135,147,135,135,147,135,135,147,137,149,138,138,150,138,138,150,138,150,138,138,150,138,138,150,138,150]},
            {n: [155,155,167,155,155,167,155,167,155,155,167,155,155,167,157,181,143,143,155,143,143,155,143,155,145,145,157,145,145,157,145,157]},
            {n: [135,135,147,135,135,147,135,147,135,135,147,135,135,147,138,150,135,135,152,135,135,152,135,152,135,135,152,135,135,152,135,152]},
            {n: [155,155,167,155,155,167,155,167,155,155,167,155,155,167,157,181,142,142,154,142,142,154,142,154,142,142,154,142,142,154,142,154]},
            {n: [135,135,147,135,135,147,135,147,135,135,147,135,135,147,135,159,135,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
          ]
        },
        { // Instrument 4
          // Oscillator 1
          osc1_oct: 7,
          osc1_det: 0,
          osc1_detune: 0,
          osc1_xenv: 1,
          osc1_vol: 255,
          osc1_waveform: 0,
          // Oscillator 2
          osc2_oct: 7,
          osc2_det: 0,
          osc2_detune: 0,
          osc2_xenv: 1,
          osc2_vol: 146,
          osc2_waveform: 0,
          // Noise oscillator
          noise_fader: 0,
          // Envelope
          env_attack: 50,
          env_sustain: 0,
          env_release: 2727,
          env_master: 254,
          // Effects
          fx_filter: 2,
          fx_freq: 200,
          fx_resonance: 254,
          fx_delay_time: 6,
          fx_delay_amt: 21,
          fx_pan_freq: 0,
          fx_pan_amt: 0,
          // LFO
          lfo_osc1_freq: 0,
          lfo_fx_freq: 0,
          lfo_freq: 0,
          lfo_amt: 0,
          lfo_waveform: 0,
          // Patterns
          p: [0,0,1,1,1,2,3,3,3,3,3,3,3,3,4,5,5,5,6,5,5,5,6,3,3,3,3,3,3,3,2,3,3,3,3,3,3,3,3,3,3,3,3,7,0,0,0,0],
          // Columns
          c: [
            {n: [147,0,147,0,0,0,0,0,0,0,0,0,0,0,147,0,0,0,0,147,0,0,0,0,0,0,147,0,0,147,0,0]},
            {n: [147,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,147,0,0,0,0,0]},
            {n: [147,0,0,147,0,0,147,0,0,0,147,0,0,0,147,0,0,0,0,147,0,0,147,0,0,0,147,0,0,147,0,0]},
            {n: [147,0,0,147,0,0,147,0,0,0,147,0,0,147,0,147,0,0,0,0,0,0,0,0,0,0,147,0,0,147,147,147]},
            {n: [147,0,0,147,0,0,147,0,0,0,0,0,0,0,147,0,0,0,147,0,0,147,0,147,147,147,147,0,0,147,0,0]},
            {n: [147,0,0,147,0,0,147,0,0,0,0,0,0,0,147,0,0,0,147,0,0,147,0,147,147,147,147,147,0,0,0,0]},
            {n: [147,0,0,147,0,0,147,0,147,147,147,147,147,147,147,147,147,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
          ]
        },
        { // Instrument 5
          // Oscillator 1
          osc1_oct: 8,
          osc1_det: 0,
          osc1_detune: 0,
          osc1_xenv: 0,
          osc1_vol: 0,
          osc1_waveform: 0,
          // Oscillator 2
          osc2_oct: 8,
          osc2_det: 0,
          osc2_detune: 0,
          osc2_xenv: 0,
          osc2_vol: 0,
          osc2_waveform: 0,
          // Noise oscillator
          noise_fader: 85,
          // Envelope
          env_attack: 50,
          env_sustain: 6363,
          env_release: 50,
          env_master: 67,
          // Effects
          fx_filter: 1,
          fx_freq: 10100,
          fx_resonance: 254,
          fx_delay_time: 6,
          fx_delay_amt: 12,
          fx_pan_freq: 5,
          fx_pan_amt: 136,
          // LFO
          lfo_osc1_freq: 0,
          lfo_fx_freq: 0,
          lfo_freq: 0,
          lfo_amt: 0,
          lfo_waveform: 0,
          // Patterns
          p: [0,0,1,1,1,0,2,2,2,2,2,2,2,2,3,4,4,4,4,4,4,4,4,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,5,5,5,5,6,0,0,0,0],
          // Columns
          c: [
            {n: [0,0,0,0,147,0,0,147,0,0,0,147,0,0,147,0,0,0,147,0,0,147,0,0,147,0,0,0,147,0,0,0]},
            {n: [0,0,147,0,0,0,0,0,147,0,147,0,0,0,0,0,0,0,147,0,0,0,0,0,147,147,0,147,0,0,147,0]},
            {n: [0,0,147,0,0,0,0,0,147,0,147,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,147,0,0,0,0,0]},
            {n: [0,0,147,0,0,0,0,0,147,0,0,0,0,0,147,0,0,0,0,0,147,0,0,0,147,0,147,0,0,0,0,0]},
            {n: [0,0,147,0,0,0,147,0,147,0,147,0,0,0,147,0,0,0,147,0,147,0,147,0,147,147,0,147,0,0,147,0]},
            {n: [0,0,147,0,147,0,147,0,147,147,0,147,147,0,147,147,147,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
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
          osc1_waveform: 0,
          // Oscillator 2
          osc2_oct: 8,
          osc2_det: 0,
          osc2_detune: 0,
          osc2_xenv: 0,
          osc2_vol: 0,
          osc2_waveform: 0,
          // Noise oscillator
          noise_fader: 34,
          // Envelope
          env_attack: 50,
          env_sustain: 2727,
          env_release: 50,
          env_master: 82,
          // Effects
          fx_filter: 1,
          fx_freq: 3224,
          fx_resonance: 254,
          fx_delay_time: 6,
          fx_delay_amt: 36,
          fx_pan_freq: 7,
          fx_pan_amt: 254,
          // LFO
          lfo_osc1_freq: 0,
          lfo_fx_freq: 1,
          lfo_freq: 5,
          lfo_amt: 187,
          lfo_waveform: 0,
          // Patterns
          p: [1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,2,2,2,2,4,4,4,6,2,2,2,2,2,2,2,2,4,4,4,4,5,0,0,0,0],
          // Columns
          c: [
            {n: [147,147,0,147,147,147,147,0,147,147,147,0,147,147,0,147,147,147,0,147,147,0,147,147,0,147,147,147,0,147,147,147]},
            {n: [147,147,0,147,147,147,147,147,0,147,0,147,147,147,147,147,147,147,0,147,147,147,147,147,0,0,147,0,147,147,0,147]},
            {n: [147,147,0,147,147,147,147,147,0,147,147,147,147,147,0,147,147,147,147,147,0,147,147,147,0,147,0,147,147,147,147,147]},
            {n: [147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147,147]},
            {n: [147,147,0,147,147,147,147,147,0,147,0,147,147,147,147,147,147,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [147,147,0,147,147,147,147,0,147,147,147,0,147,147,147,147,147,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
          ]
        },
        { // Instrument 7
          // Oscillator 1
          osc1_oct: 8,
          osc1_det: 0,
          osc1_detune: 0,
          osc1_xenv: 1,
          osc1_vol: 192,
          osc1_waveform: 0,
          // Oscillator 2
          osc2_oct: 8,
          osc2_det: 0,
          osc2_detune: 0,
          osc2_xenv: 0,
          osc2_vol: 0,
          osc2_waveform: 0,
          // Noise oscillator
          noise_fader: 167,
          // Envelope
          env_attack: 50,
          env_sustain: 150,
          env_release: 10000,
          env_master: 188,
          // Effects
          fx_filter: 1,
          fx_freq: 1100,
          fx_resonance: 254,
          fx_delay_time: 6,
          fx_delay_amt: 42,
          fx_pan_freq: 3,
          fx_pan_amt: 92,
          // LFO
          lfo_osc1_freq: 0,
          lfo_fx_freq: 0,
          lfo_freq: 0,
          lfo_amt: 0,
          lfo_waveform: 0,
          // Patterns
          p: [0,0,1,1,1,2,3,3,3,4,3,3,3,4,5,6,7,6,8,6,7,6,8,3,3,3,4,3,3,3,2,3,3,3,4,3,3,3,4,3,3,3,4,9,0,0,0,0],
          // Columns
          c: [
            {n: [0,0,0,0,0,0,0,0,147,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,147,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,147,147,147,147]},
            {n: [0,0,0,0,147,0,0,0,0,0,0,0,147,0,0,0,0,0,0,0,147,0,0,0,0,0,0,0,147,0,0,0]},
            {n: [0,0,0,0,147,0,0,0,0,0,0,0,147,0,0,0,0,0,0,0,147,0,0,0,0,0,0,0,147,0,147,147]},
            {n: [0,0,0,0,147,0,0,0,0,0,0,0,147,0,0,0,147,0,0,0,0,0,0,0,0,0,0,0,147,0,0,0]},
            {n: [0,0,0,0,147,0,0,0,0,0,147,0,0,0,0,0,0,0,0,0,147,0,0,0,0,0,0,0,147,0,0,0]},
            {n: [0,0,0,0,147,0,0,0,0,0,147,0,0,0,0,0,0,0,0,0,147,0,0,0,0,0,0,0,147,0,147,147]},
            {n: [0,0,0,0,147,0,0,0,0,0,147,0,0,0,0,0,0,0,0,0,147,0,0,0,0,0,0,0,147,147,147,147]},
            {n: [0,0,0,0,147,0,0,0,0,0,0,0,147,147,147,147,147,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
            {n: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
          ]
        }
      ],
      rowLen: 5168,   // In sample lengths
      endPattern: 45  // End pattern
    };
