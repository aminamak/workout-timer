<<<<<<< HEAD
// set up  
var pomodoroLengthMins = 25; // initial pomodoro length in mins  
var origPomodoroLengthMins = pomodoroLengthMins; // copy to a new variable for later use  
var pomodoroLengthSecs = (pomodoroLengthMins * 60) % 60; // initial pomodoro secs value  
var pomodoroTotal = pomodoroLengthMins * 60; // total pomodoro length in secs  
if (pomodoroLengthSecs < 10) {  
 pomodoroLengthSecs = "0" + pomodoroLengthSecs; // output 0 secs as 00  
}  
var breakLengthMins = 5; // initial break length in mins  
var origBreakLengthMins = breakLengthMins; // copy to a new variable for later use  
var breakLengthSecs = (breakLengthMins * 60) % 60; // initial break secs value  
var breakTotal = breakLengthMins * 60; // total break length in secs  
if (breakLengthSecs < 10) {  
 breakLengthSecs = "0" + breakLengthSecs; // output 0 secs as 00  
}  
var interval; // declare variable for use in the setInterval function  
// display initial values of the timers on the page  
document.querySelector('.pomodoro-timer').innerHTML = pomodoroLengthMins;  
document.querySelector('.break-timer').innerHTML = breakLengthMins;  
document.querySelector('.timer-main-container').innerHTML = pomodoroLengthMins + ":" + pomodoroLengthSecs;  
// decrement break timer  
function decrementBreakTimer() {  
 if (breakLengthMins > 1) {  
  breakLengthMins = breakLengthMins - 1;  
  origBreakLengthMins = breakLengthMins;  
  breakTotal = breakLengthMins * 60;  
  document.querySelector('.break-timer').innerHTML = breakLengthMins;  
 }  
}  
// increment break timer  
function incrementBreakTimer() {  
 breakLengthMins = breakLengthMins + 1;  
 origBreakLengthMins = breakLengthMins;  
 breakTotal = breakLengthMins * 60;  
 document.querySelector('.break-timer').innerHTML = breakLengthMins;  
}  
// decrement Pomodoro timer  
function decrementPomodoroTimer() {  
 if (pomodoroLengthMins > 1) {  
  pomodoroLengthMins = pomodoroLengthMins - 1;  
  origPomodoroLengthMins = pomodoroLengthMins;  
  pomodoroTotal = pomodoroLengthMins * 60;  
  document.querySelector('.pomodoro-timer').innerHTML = pomodoroLengthMins;  
  document.querySelector('.timer-main-container').innerHTML = pomodoroLengthMins + ":" + pomodoroLengthSecs;  
 }  
}  
// increment Pomodoro timer  
function incrementPomodoroTimer() {  
 pomodoroLengthMins = pomodoroLengthMins + 1;  
 origPomodoroLengthMins = pomodoroLengthMins;  
 pomodoroTotal = pomodoroLengthMins * 60;  
 document.querySelector('.pomodoro-timer').innerHTML = pomodoroLengthMins;  
 document.querySelector('.timer-main-container').innerHTML = pomodoroLengthMins + ":" + pomodoroLengthSecs;  
}  
// start button: disable changing timer settings, and start the setInterval  
function startTimer() {  
  document.querySelector('.decrementBreakTimer').disabled = 'disabled';  
  document.querySelector('.incrementBreakTimer').disabled = 'disabled';  
  document.querySelector('.decrementPomodoroTimer').disabled = 'disabled';  
  document.querySelector('.incrementPomodoroTimer').disabled = 'disabled';  
  document.querySelector('.button-start').disabled = 'disabled';  
  document.querySelector('.button-pause').disabled = '';  
  interval = setInterval(runPomodoroTimer, 1000);  
}  
function runPomodoroTimer() {  
 pomodoroTotal--; // decrement total pomodoro timer length  
 pomodoroLengthMins = pomodoroTotal / 60 | 0; // calculate mins  
 pomodoroLengthSecs = pomodoroTotal % 60; // calculate secs  
 if (pomodoroLengthSecs < 10) { // output secs as two figures  
  pomodoroLengthSecs = "0" + (pomodoroTotal % 60);  
 }  
 document.querySelector('.timer-main-container').innerHTML = pomodoroLengthMins + ":" + pomodoroLengthSecs;  
 document.querySelector('.timer-description').innerHTML = "until your break";  
 if (pomodoroTotal == -1) {  
  clearInterval(interval);  
  breakTotal = origBreakLengthMins * 60;  
  document.querySelector('.timer-main-container').innerHTML = origBreakLengthMins + ":00";  
  document.querySelector('.timer-description').innerHTML = "It's break time!";  
  interval = setInterval(runBreakTimer, 1000);  
 }  
}  
function runBreakTimer() {  
 breakTotal--; // decrement counter  
 breakLengthMins = breakTotal / 60 | 0; // calculate mins  
 breakLengthSecs = breakTotal % 60; // calculate secs  
 if (breakLengthSecs < 10) { // output secs as two figures  
  breakLengthSecs = "0" + (breakTotal % 60);  
 }  
 document.querySelector('.timer-main-container').innerHTML = breakLengthMins + ":" + breakLengthSecs;  
 if (breakTotal == -1) {  
  breakTotal--;  
  clearInterval(interval);  
  pomodoroTotal = origPomodoroLengthMins * 60;  
  document.querySelector('.timer-main-container').innerHTML = origPomodoroLengthMins + ":00";  
  document.querySelector('.timer-description').innerHTML = "until your break";  
  interval = setInterval(runPomodoroTimer, 1000);  
 }  
}  
function pauseTimer() {  
  clearInterval(interval);  
  document.querySelector('.button-pause').disabled = 'disabled';  
  document.querySelector('.button-start').disabled = '';  
}  
function resetTimer() {  
 document.querySelector('.decrementBreakTimer').disabled = '';  
 document.querySelector('.incrementBreakTimer').disabled = '';  
 document.querySelector('.decrementPomodoroTimer').disabled = '';  
 document.querySelector('.incrementPomodoroTimer').disabled = '';  
 document.querySelector('.button-start').disabled = '';  
 document.querySelector('.button-pause').disabled = '';  
 clearInterval(interval);  
 pomodoroLengthMins = 25;  
 pomodoroLengthSecs = "0" + 0;  
 pomodoroTotal = pomodoroLengthMins * 60;  
 breakLengthMins = 5;  
 breakLengthSecs = "0" + 0;  
 breakTotal = breakLengthMins * 60;  
 document.querySelector('.pomodoro-timer').innerHTML = pomodoroLengthMins;  
 document.querySelector('.break-timer').innerHTML = breakLengthMins;  
 document.querySelector('.timer-main-container').innerHTML = pomodoroLengthMins + ":" + pomodoroLengthSecs;  
 document.querySelector('.timer-description').innerHTML = "Ready to work?";  
}  

var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);
=======
// set up  
var pomodoroLengthMins = 25; // initial pomodoro length in mins  
var origPomodoroLengthMins = pomodoroLengthMins; // copy to a new variable for later use  
var pomodoroLengthSecs = (pomodoroLengthMins * 60) % 60; // initial pomodoro secs value  
var pomodoroTotal = pomodoroLengthMins * 60; // total pomodoro length in secs  
if (pomodoroLengthSecs < 10) {  
 pomodoroLengthSecs = "0" + pomodoroLengthSecs; // output 0 secs as 00  
}  
var breakLengthMins = 5; // initial break length in mins  
var origBreakLengthMins = breakLengthMins; // copy to a new variable for later use  
var breakLengthSecs = (breakLengthMins * 60) % 60; // initial break secs value  
var breakTotal = breakLengthMins * 60; // total break length in secs  
if (breakLengthSecs < 10) {  
 breakLengthSecs = "0" + breakLengthSecs; // output 0 secs as 00  
}  
var interval; // declare variable for use in the setInterval function  
// display initial values of the timers on the page  
document.querySelector('.pomodoro-timer').innerHTML = pomodoroLengthMins;  
document.querySelector('.break-timer').innerHTML = breakLengthMins;  
document.querySelector('.timer-main-container').innerHTML = pomodoroLengthMins + ":" + pomodoroLengthSecs;  
// decrement break timer  
function decrementBreakTimer() {  
 if (breakLengthMins > 1) {  
  breakLengthMins = breakLengthMins - 1;  
  origBreakLengthMins = breakLengthMins;  
  breakTotal = breakLengthMins * 60;  
  document.querySelector('.break-timer').innerHTML = breakLengthMins;  
 }  
}  
// increment break timer  
function incrementBreakTimer() {  
 breakLengthMins = breakLengthMins + 1;  
 origBreakLengthMins = breakLengthMins;  
 breakTotal = breakLengthMins * 60;  
 document.querySelector('.break-timer').innerHTML = breakLengthMins;  
}  
// decrement Pomodoro timer  
function decrementPomodoroTimer() {  
 if (pomodoroLengthMins > 1) {  
  pomodoroLengthMins = pomodoroLengthMins - 1;  
  origPomodoroLengthMins = pomodoroLengthMins;  
  pomodoroTotal = pomodoroLengthMins * 60;  
  document.querySelector('.pomodoro-timer').innerHTML = pomodoroLengthMins;  
  document.querySelector('.timer-main-container').innerHTML = pomodoroLengthMins + ":" + pomodoroLengthSecs;  
 }  
}  
// increment Pomodoro timer  
function incrementPomodoroTimer() {  
 pomodoroLengthMins = pomodoroLengthMins + 1;  
 origPomodoroLengthMins = pomodoroLengthMins;  
 pomodoroTotal = pomodoroLengthMins * 60;  
 document.querySelector('.pomodoro-timer').innerHTML = pomodoroLengthMins;  
 document.querySelector('.timer-main-container').innerHTML = pomodoroLengthMins + ":" + pomodoroLengthSecs;  
}  
// start button: disable changing timer settings, and start the setInterval  
function startTimer() {  
  document.querySelector('.decrementBreakTimer').disabled = 'disabled';  
  document.querySelector('.incrementBreakTimer').disabled = 'disabled';  
  document.querySelector('.decrementPomodoroTimer').disabled = 'disabled';  
  document.querySelector('.incrementPomodoroTimer').disabled = 'disabled';  
  document.querySelector('.button-start').disabled = 'disabled';  
  document.querySelector('.button-pause').disabled = '';  
  interval = setInterval(runPomodoroTimer, 1000);  
}  
function runPomodoroTimer() {  
 pomodoroTotal--; // decrement total pomodoro timer length  
 pomodoroLengthMins = pomodoroTotal / 60 | 0; // calculate mins  
 pomodoroLengthSecs = pomodoroTotal % 60; // calculate secs  
 if (pomodoroLengthSecs < 10) { // output secs as two figures  
  pomodoroLengthSecs = "0" + (pomodoroTotal % 60);  
 }  
 document.querySelector('.timer-main-container').innerHTML = pomodoroLengthMins + ":" + pomodoroLengthSecs;  
 document.querySelector('.timer-description').innerHTML = "until your break";  
 if (pomodoroTotal == -1) {  
  clearInterval(interval);  
  breakTotal = origBreakLengthMins * 60;  
  document.querySelector('.timer-main-container').innerHTML = origBreakLengthMins + ":00";  
  document.querySelector('.timer-description').innerHTML = "It's break time!";  
  interval = setInterval(runBreakTimer, 1000);  
 }  
}  
function runBreakTimer() {  
 breakTotal--; // decrement counter  
 breakLengthMins = breakTotal / 60 | 0; // calculate mins  
 breakLengthSecs = breakTotal % 60; // calculate secs  
 if (breakLengthSecs < 10) { // output secs as two figures  
  breakLengthSecs = "0" + (breakTotal % 60);  
 }  
 document.querySelector('.timer-main-container').innerHTML = breakLengthMins + ":" + breakLengthSecs;  
 if (breakTotal == -1) {  
  breakTotal--;  
  clearInterval(interval);  
  pomodoroTotal = origPomodoroLengthMins * 60;  
  document.querySelector('.timer-main-container').innerHTML = origPomodoroLengthMins + ":00";  
  document.querySelector('.timer-description').innerHTML = "until your break";  
  interval = setInterval(runPomodoroTimer, 1000);  
 }  
}  
function pauseTimer() {  
  clearInterval(interval);  
  document.querySelector('.button-pause').disabled = 'disabled';  
  document.querySelector('.button-start').disabled = '';  
}  
function resetTimer() {  
 document.querySelector('.decrementBreakTimer').disabled = '';  
 document.querySelector('.incrementBreakTimer').disabled = '';  
 document.querySelector('.decrementPomodoroTimer').disabled = '';  
 document.querySelector('.incrementPomodoroTimer').disabled = '';  
 document.querySelector('.button-start').disabled = '';  
 document.querySelector('.button-pause').disabled = '';  
 clearInterval(interval);  
 pomodoroLengthMins = 25;  
 pomodoroLengthSecs = "0" + 0;  
 pomodoroTotal = pomodoroLengthMins * 60;  
 breakLengthMins = 5;  
 breakLengthSecs = "0" + 0;  
 breakTotal = breakLengthMins * 60;  
 document.querySelector('.pomodoro-timer').innerHTML = pomodoroLengthMins;  
 document.querySelector('.break-timer').innerHTML = breakLengthMins;  
 document.querySelector('.timer-main-container').innerHTML = pomodoroLengthMins + ":" + pomodoroLengthSecs;  
 document.querySelector('.timer-description').innerHTML = "Ready to work?";  
}  
>>>>>>> 4f068ce0bf992601b6d59debd4aa9146a041a8fa
