// Set the date we're counting down to
var countDownDate = new Date("Dec 25, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown-display").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-display").innerHTML = "EXPIRED";
  }
}, 1000);


var countdownDate = new Date("Dec 25, 2021")

var now = new Date();

//distance between now and the 25th
var distance = countdownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 *24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

const countdownDisplay = document.getElementById("countdown-display")

document.getElementById().innerHTML = days + "d" + hours + "h "
+ minutes + "m " + seconds + "s ";
function renderCountdown(){
    const christmas = 25

    if (distance < 0) {
        clearInterval(x);
        document.getElementById().innerHTML = "EXPIRED";
      }
    } 1000;

    //Tasks
    // - Get today's date (you only need the day)
    // - Calculate the remaining days
    // - Display remaining days in the countdownDisplay

renderCountdown

// Stretch goals:
// - Display hours, minutes, seconds
// - Add a countdown for another festival, your birthday, or Christmas 2022

