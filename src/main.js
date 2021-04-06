//import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './assets/audio/mp3/bell.mp3';
import './assets/audio/mp3/birds.mp3';
import './assets/audio/mp3/forest1.mp3';
import './assets/audio/mp3/people.mp3';
import './assets/audio/mp3/restaurant.mp3';
import './assets/audio/ogg/forest1.ogg';
import './assets/audio/ogg/birds.ogg';
import './assets/audio/ogg/people.ogg';
import './assets/images/bluffs360.jpg';


// This one only allows for restaurant.mp3 functionality:
// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

// get the audio elements
const birdsAudioElement = document.querySelector('audio#audio-birds');
const peopleAudioElement = document.querySelector('audio#audio-people');

// pass it into the audio context
const birdsTrack = audioContext.createMediaElementSource(birdsAudioElement);
const peopleTrack = audioContext.createMediaElementSource(peopleAudioElement);

birdsTrack.connect(audioContext.destination);
peopleTrack.connect(audioContext.destination);

// select our play button
const birdsPlayButton = document.querySelector('button#birds-button');
const peoplePlayButton = document.querySelector('button#people-button');

birdsPlayButton.addEventListener('click', function() {

  // check if context is in suspended state (autoplay policy)
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }

  // play or pause track depending on state
  if (this.dataset.playing === 'false') {
    birdsAudioElement.play();
    this.dataset.playing = 'true';
  } else if (this.dataset.playing === 'true') {
    birdsAudioElement.pause();
    this.dataset.playing = 'false';
  }

}, false);

peoplePlayButton.addEventListener('click', function() {

  // check if context is in suspended state (autoplay policy)
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }

  // play or pause track depending on state
  if (this.dataset.playing === 'false') {
    peopleAudioElement.play();
    this.dataset.playing = 'true';
  } else if (this.dataset.playing === 'true') {
    peopleAudioElement.pause();
    this.dataset.playing = 'false';
  }

}, false);

birdsAudioElement.addEventListener('ended', () => {
  birdsPlayButton.dataset.playing = 'false';
  peoplePlayButton.dataset.playing = 'false';
  // bellPlayButton.dataset.playing = 'false';
  // forest1PlayButton.dataset.playing = 'false';
}, false);

const birdsGainNode = audioContext.createGain();

const birdsVolumeControl = document.querySelector('#volume');

birdsVolumeControl.addEventListener('input', function() {
  birdsGainNode.gain.value = this.value;
}, false);

const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);

const pannerControl = document.querySelector('#panner');

pannerControl.addEventListener('input', function() {
  panner.pan.value = this.value;
}, false);

birdsTrack.connect(birdsGainNode).connect(panner).connect(audioContext.destination);
/*

bell.mp3

*/

// const forestAudioContext = new AudioContext();

// // get the audio element
// const forestAudioElement = document.querySelector('audio#forest1mp3-src');

// // pass it into the audio context
// const forestTrack = forestAudioContext.createMediaElementSource(forestAudioElement);

// forestTrack.connect(forestAudioContext.destination);

// // select our play button
// const forestPlayButton = document.querySelector('button#forest-mp3');

// forestPlayButton.addEventListener('click', function() {

//   // check if context is in suspended state (autoplay policy)
//   if (forestAudioContext.state === 'suspended') {
//     forestAudioContext.resume();
//   }

//   // play or pause track depending on state
//   if (this.dataset.playing === 'false') {
//     forestAudioElement.play();
//     this.dataset.playing = 'true';
//   } else if (this.dataset.playing === 'true') {
//     forestAudioElement.pause();
//     this.dataset.playing = 'false';
//   }

// }, false);

// forestAudioElement.addEventListener('ended', () => {
//   forestPlayButton.dataset.playing = 'false';
// }, false);

// const forestGainNode = audioContext.createGain();

// const forestVolumeControl = document.querySelector('#volume');

// forestVolumeControl.addEventListener('input', function() {
//   forestGainNode.gain.value = this.value;
// }, false);

// const forestPannerOptions = { pan: 0 };
// const forestPanner = new StereoPannerNode(forestAudioContext, forestPannerOptions);

// const forestPannerControl = document.querySelector('#panner');

// forestPannerControl.addEventListener('input', function() {
//   forestPanner.pan.value = this.value;
// }, false);

// forestTrack.connect(gainNode).connect(panner).connect(audioContext.destination);

// forestTrack.connect(forestAudioContext.destination);

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
