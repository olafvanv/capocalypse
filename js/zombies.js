var audio = new Audio('../assets/toto.mp3');
audio.play();

var rock = document.getElementById('rock');
var rockInput = document.getElementsByClassName('rock-input');
var bush = document.getElementById('bush');
var bushInput = document.getElementsByClassName('bush-input');
var mush = document.getElementById('mushroom');
var mushInput = document.getElementsByClassName('mushroom-input');

rockInput = document.getElementById('rock-input').addEventListener('input', function(e) {
  addStyle(rock, 'right', e.target.value);
});

bushInput = document.getElementById('bush-input').addEventListener('input', function(e) {
  addStyle(bush, 'opacity', e.target.value)
});

mushInput = document.getElementById('mushroom-input').addEventListener('input', function(e) {
  addStyle(mush, 'display', e.target.value)
});

function addStyle(el, prop, val){
  el.style[prop] = val;
}

function foundKey() {
  window.location.href = '../pages/office.html'
}