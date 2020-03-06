var rock = document.getElementById('rock');
var rockInput = document.getElementsByClassName('rock-input');

rockInput = document.addEventListener('input', addClass);

function addClass(e) {
  const val = e.target.value;
  if(val === 'display: none') {
    rock.classList.add('display-none');
  }
}

function foundKey() {
  alert('sleutel gevonden!');
}