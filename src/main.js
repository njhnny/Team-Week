import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './assets/audio/restaurant.mp3';
//import testMp3 from "assets/audio/restaurant.mp3";
let song = new Audio("assets/audio/restaurant.mp3");
//let filename = "restaurant";

$("#submit").click(function(event) {
  event.preventDefault();
  
  song.volume = 0.5;
  //$('audio#audio1')[0].play();
  //restaurant.loop = true;
  //restaurant.currentTime = 0;
  song.play();
//   restaurant.pause();
});
$("#pause").click(function(event) {
  event.preventDefault();
  song.pause();
});

// $('#audioSlider').slider({
//     orientation: "vertical",
//     value: audio1.volume,
//     min: 0,
//     max: 1,
//     range: 'min',
//     animate: true,
//     step: .1,
//     slide: function(e, ui) {
//     audio1.volume = ui.value;
//     }
// });
