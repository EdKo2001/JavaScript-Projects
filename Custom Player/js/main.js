let vid = document.querySelector('#myVideo');
let fillBar = document.querySelector('#fill');
let currentTime = document.querySelector('#currentTime');
let volumeSlider = document.querySelector('#volume');
let volume = document.querySelector('#speaker');

function playOrPause() {

    if (vid.paused) {
        vid.play();
        $('#playBtn').attr('src', 'img/Pause.png');
    }
    else {
        vid.pause();
        $('#playBtn').attr('src', 'img/Play.png');
    }
}

vid.addEventListener('timeupdate', function () {

    let position = vid.currentTime / vid.duration;

    fillBar.style.width = position * 100 + '%';

    convertTime(Math.round(vid.currentTime));  //convert decimal no into intiger

    if (vid.ended) {
        $('#playBtn').attr('src', 'img/Play.png');
    }
});

function convertTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    min = (min < 10) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime.textContent = min + ':' + sec;

    totalTime(Math.round(vid.duration));
}

function totalTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    min = (min < 10) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    currentTime.textContent += ' / ' + min + ':' + sec;
}


function changeVolume() {

    vid.volume = volumeSlider.value;

    if (volumeSlider.value == 0) {
        $('#speaker').attr('src', 'img/Mute.png');
    }
    else {
        $('#speaker').attr('src', 'img/Speaker.png');
    }
}
