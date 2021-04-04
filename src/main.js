import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './assets/audio/restaurant.mp3';
import './assets/audio/bell.mp3';
import './assets/audio/forest1.mp3';
import './assets/audio/forest1.ogg';
import 'vrview.js';
let song = new Audio("assets/audio/restaurant.mp3");
let bell = new Audio("assets/audio/bell.mp3");
let forestOgg = new Audio('assets/audio/forest1.ogg');
let forestMp3 = new Audio('assets/audio/forest1.mp3');

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

$('#play-forest-ogg').click(function(event) {
  event.preventDefault();
  forestOgg
});

// window.addEventListener('load', onVrViewLoad);

// function onVrViewLoad() {
//   // Selector '#vrview' finds element with id 'vrview'.
//   var vrView = new VRView.Player('#vrview', {
//     image: 'assets/images/bluffs360.jpg',
//     is_stereo: false,
//     width: "100%",
//     height: "100%"
//   });
// }

