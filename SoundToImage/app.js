const lib = require('generate-sound-waveform');
const fs = require('fs');

// Options to create the image
const waveFormOptions = {
  stepMultiplier: 10, // Density of waveform [default : 4]
  backgroundColor: '#000000', // image background color [default : '#fff']
  lineColor: '#d42803', // image line color [default : '#666']
  globalAplha: 0.8, // draw line global alpha value [default : 0.6]
  padding: 20, // padding height [default : 8]
  lineWidth: 1, // draw line width [default : 0.5]
  centerLine: false, // center guide line [default : true]
  centerLineColor: '#d42803', // center guild line color [default : '#fff']
};

async function createImageFromSound() {
  try {
    const stream = await lib.generateSoundImage(
      './sound_sources/sound_a_wav.wav', // source
      600, // image width
      350, // image height
      waveFormOptions // image options
    );
    const imageOutput = fs.createWriteStream('./images/sound_a_wav.png');
    stream.pipe(imageOutput);
    console.log('process complete!!!');
  } catch (error) {
    console.log(error);
  }
}

createImageFromSound();