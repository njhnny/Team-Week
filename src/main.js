import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './assets/audio/restaurant.mp3';
import './assets/audio/bell.mp3';
let song = new Audio("assets/audio/restaurant.mp3");
let bell = new Audio("assets/audio/bell.mp3");

$("#play").click(function(event) {
  event.preventDefault();
  
  song.volume = 0.5;
  //$('audio#audio1')[0].play();
  //restaurant.loop = true;
  //restaurant.currentTime = 0;a
  song.play();
  
//   restaurant.pause();
});
$("#pause").click(function(event) {
  event.preventDefault();
  song.pause();
});

$("#playbell").click(function(event) {
  event.preventDefault();
  bell.play();
});
$("#pausebell").click(function(event) {
  event.preventDefault();
  bell.pause();
});
