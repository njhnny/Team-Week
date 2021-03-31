import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './assets/audio/restaurant.mp3';
import './assets/audio/bell.mp3';
let song = new Audio("assets/audio/restaurant.mp3");
let bell = new Audio("assets/audio/bell.mp3");

const audioContext = new AudioContext();

$("#play").click(function(event) {
  event.preventDefault();
  song.volume = 0.5;
  song.play();
  song.loop = true;
  bell.currentTime = 0;
});
$("#pause").click(function(event) {
  event.preventDefault();
  song.pause();
});

$("#playbell").click(function(event) {
  event.preventDefault();
  bell.play();
  bell.loop = true;
  bell.currentTime = 0;
});
$("#pausebell").click(function(event) {
  event.preventDefault();
  bell.pause();
});
