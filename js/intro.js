var audio = new Audio('../assets/chopsuey.mp3');
audio.play();

setTimeout(function(){ 
    document.querySelector('.intro-button').className = 'intro-button visible';
}, 40000);