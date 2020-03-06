var audio = new Audio('../assets/chopsuey.mp3');
audio.play();

var start = function() {
    window.location.href = '../pages/zombies.html'
}

setTimeout(function(){ 
    document.querySelector('.intro-button').className = 'intro-button visible';
}, 40000);