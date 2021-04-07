//import $ from 'jquery';
// require('aframe');
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './assets/audio/restaurant.mp3';
import './assets/audio/bell.mp3';
import './assets/audio/bark.mp3';
import './assets/audio/flute4.mp3';
import './assets/audio/forest1.mp3';
import './assets/audio/forest1.ogg';
import './assets/images/bluffs360.jpg';


// Below here, experimenting with Web-Audio-API

// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

// get the audio element
const audioElement = document.querySelector('audio');

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);

track.connect(audioContext.destination);

// select our play button
const playButton = document.querySelector('#api');

playButton.addEventListener('click', function() {

  // check if context is in suspended state (autoplay policy)
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }

  // play or pause track depending on state
  if (this.dataset.playing === 'false') {
    audioElement.play();
    this.dataset.playing = 'true';
  } else if (this.dataset.playing === 'true') {
    audioElement.pause();
    this.dataset.playing = 'false';
  }

}, false);

audioElement.addEventListener('ended', () => {
  playButton.dataset.playing = 'false';
}, false);

const gainNode = audioContext.createGain();

const volumeControl = document.querySelector('#volume');

volumeControl.addEventListener('input', function() {
  gainNode.gain.value = this.value;
}, false);

const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);

const pannerControl = document.querySelector('#panner');

pannerControl.addEventListener('input', function() {
  panner.pan.value = this.value;
}, false);

track.connect(gainNode).connect(panner).connect(audioContext.destination);

//window.addEventListener('load', onVrViewLoad);

// function onVrViewLoad() {
//   // Selector '#vrview' finds element with id 'vrview'.
//   var vrView = new VRView.Player('#vrview', {
//     image: 'assets/images/bluffs360.jpg',
//     is_stereo: false,
//     width: "100%",
//     height: "100%"
//   });
// }
// $.getScript('https://storage.googleapis.com/vrview/2.0/build/vrview.min.js');
// //Spacialization
// const audioCtx = new AudioContext();
// const listener = audioCtx.listener;

// //listener's position set to emulate someone looking into a room
// const posX = window.innerWidth/2;
// const posY = window.innerHeight/2;
// const posZ = 300;

// listener.positionX.value = posX;
// listener.positionY.value = posY;
// listener.positionZ.value = posZ-5;

// //these values set the listener's location as centered in the image and slightly in front of the sound source
// listener.forwardX.value = 0;
// listener.forwardY.value = 0;
// listener.forwardZ.value = -1;
// listener.upX.value = 0;
// listener.upY.value = 1;
// listener.upZ.value = 0;

// //HRTF stands for head-related transfer function
// const pannerModel = 'HRTF';

// const innerCone = 60;
// const outerCone = 90;
// const outerGain = 0.3;

// const distanceModel = 'linear';

// //maximum distance between source and listener. 10000 is the default
// const maxDistance = 10000;

// const refDistance = 1;

// //sets how quickly volume reduces as panner moves away from listener
// const rolloff = 10;

// //set orientation of sound source
// const positionX = posX;
// const positionY = posY;
// const positionZ = posZ;

// const orientationX = 0.0;
// const orientationY = 0.0;
// const orientationZ = -1.0;

//use constructor to create panner node and pass in parameters above
// const panner = new PannerNode(audioCtx, {
//   panningModel: pannerModel,
//   distanceModel: distanceModel,
//   positionX: positionX,
//   positionY: positionY,
//   positionZ: positionZ,
//   orientationX: orientationX,
//   orientationY: orientationY,
//   orientationZ: orientationZ,
//   refDistance: refDistance,
//   maxDistance: maxDistance,
//   rolloffFactor: rollOff,
//   coneInnerAngle: innerCone,
//   coneOuterAngle: outerCone,
//   coneOuterGain: outerGain
// })
