//import $ from 'jquery';
// require('aframe');
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './assets/audio/bark.mp3';
import './assets/audio/flute4.mp3';
import './assets/audio/swings7.mp3';
import './assets/audio/bike4.mp3';
import './assets/audio/train23.mp3';
import './assets/audio/mp3/birds.mp3';
import './assets/audio/mp3/people.mp3';
import './assets/audio/ogg/birds.ogg';
import './assets/audio/ogg/people.ogg';
import './assets/images/bluffs360.jpg';

const splash = document.querySelector('.splash');
/* jshint ignore:start*/
document.addEventListener('DOMContentLoaded', (e)=>{
/* jshint ignore:end */
  setTimeout(()=>{
    splash.classList.add('display-none');
  }, 2000);
});



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

const birdsPlayButton = document.querySelector('div.btn');
const peoplePlayButton = document.querySelector('div#emoji-people-button');


birdsPlayButton.addEventListener('click', function() {

  // check if context is in suspended state (autoplay policy)
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }

  // play or pause track depending on state
  if (this.dataset.playing === 'false') {
    birdsAudioElement.play();
    this.dataset.playing = 'true';
    birdsAudioElement.loop ='true';
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
    peopleAudioElement.loop ='true';
  } else if (this.dataset.playing === 'true') {
    peopleAudioElement.pause();
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



