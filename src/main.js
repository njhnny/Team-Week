//import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './assets/audio/mp3/forest1.mp3';
import './assets/audio/ogg/forest1.ogg';
import './assets/audio/mp3/bell.mp3';
import './assets/audio/mp3/birds.mp3';
import './assets/audio/mp3/people.mp3';
import './assets/audio/mp3/restaurant.mp3';
import './assets/audio/ogg/birds.ogg';
import './assets/audio/ogg/people.ogg';
import './assets/images/bluffs360.jpg';

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
    splash.classList.add('display-none');
  }, 2000);
});

// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

// get the audio elements
const birdsAudioElement = document.querySelector('audio#audio-birds');
const peopleAudioElement = document.querySelector('audio#audio-people');
const tarotAudioElement = document.querySelector('audio#audio-tarot-actually-birds');

// pass it into the audio context
const birdsTrack = audioContext.createMediaElementSource(birdsAudioElement);
const peopleTrack = audioContext.createMediaElementSource(peopleAudioElement);
const tarotTrack = audioContext.createMediaElementSource(tarotAudioElement)


birdsTrack.connect(audioContext.destination);
peopleTrack.connect(audioContext.destination);
tarotTrack.connect(audioContext.destination);


// select our play button
const birdsPlayButton = document.querySelector('div.btn');
const peoplePlayButton = document.querySelector('button#people-button');
const tarotPlayButton = document.querySelector('div#fake-tarot-button');


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

tarotPlayButton.addEventListener('click', function() {

  // check if context is in suspended state (autoplay policy)
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }

  // play or pause track depending on state
  if (this.dataset.playing === 'false') {
    tarotAudioElement.play();
    this.dataset.playing = 'true';
  } else if (this.dataset.playing === 'true') {
    tarotAudioElement.pause();
    this.dataset.playing = 'false';
  }

}, false);

birdsAudioElement.addEventListener('ended', () => {
  birdsPlayButton.dataset.playing = 'false';
}, false);
peopleAudioElement.addEventListener('ended', () => {
  peoplePlayButton.dataset.playing = 'false';
}, false);

const birdsGainNode = audioContext.createGain();
const peopleGainNode = audioContext.createGain();

const birdsVolumeControl = document.querySelector('#volume');
const peopleVolumeControl = document.querySelector('#other-volume');

birdsVolumeControl.addEventListener('input', function() {
  birdsGainNode.gain.value = this.value;
}, false);
peopleVolumeControl.addEventListener('input', function() {
  peopleGainNode.gain.value = this.value;
}, false);


const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);
const peoplePannerOptions = { pan: 0 };
const peoplePanner = new StereoPannerNode(audioContext, peoplePannerOptions);

const pannerControl = document.querySelector('#panner');
const peoplePannerControl = document.querySelector('#people-panner');

pannerControl.addEventListener('input', function() {
  panner.pan.value = this.value;
}, false);

peoplePannerControl.addEventListener('input', function() {
  peoplePanner.pan.value = this.value;
}, false);

peopleTrack.connect(peopleGainNode).connect(peoplePanner).connect(audioContext.destination);
birdsTrack.connect(birdsGainNode).connect(panner).connect(audioContext.destination);
tarotTrack.connect(audioContext.destination);



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
