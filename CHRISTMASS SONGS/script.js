
/*Christmas Music-Player*/


var player = document.getElementById('player');
var playBtn = document.getElementById('play');
var stopBtn = document.getElementById('stop');
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
var stopBtn = document.getElementById('stop');
var progressContainer = document.getElementById('progresscontainer');
var progressBar = document.getElementById('progressbar');
var volContainer = document.getElementById('volcontainer');
var title = document.getElementById('title');
var audio = document.getElementById('audio');
var volbasse = document.getElementById('volbasse');
var volhaute = document.getElementById('volhaute');
var aBtn = document.getElementById('a');
var bBtn = document.getElementById('b');
var cBtn = document.getElementById('c');
var volprogress = document.getElementById('volprogress');



var songs = ['All Alone On christmas', 'All i want for christmas is you',
    'Happy', 'I want you back', 'Jingle bells', 'Petit papa Noel', 'shalai',
    'Stayin Alive', 'we wish you christmas'
];


let songIndex = 1;
let isStopped = true;



volprogress.style.width = `${audio.volume * 100}%`;


const currentSong = songs[songIndex];

loadSong(currentSong);


function loadSong(song) {
    title.innerText = song;
    audio.src = `son/${song}.mp3`;

}

audio.addEventListener('error', audioError);
playBtn.addEventListener('click', playPause);
stopBtn.addEventListener('click', stopSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
volbasse.addEventListener('click', reduceSongVol);
volhaute.addEventListener('click', increaseSongVol);
audio.addEventListener('timeupdate', updateProgressBar);
progresscontainer.addEventListener('click', setProgress);
volcontainer.addEventListener('click', updateVol);

function playSong(song) {
if(isStopped) {
        loadSong(song);
        title.alt = song;
    
    }
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    playBtn.querySelector('i.fas').style.color = 'green';
    player.classList.remove('stop');
    player.classList.add('play');
    audio.play();
}

function pauseSong() {

    audio.pause();
}

function pauseSong() {
    audio.pause();
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').style.color = 'white';

    audio.pause();
}

function stopSong() {
    
 playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').style.color = 'white';
    player.classList.remove('play');
    player.classList.add('stop');
    title.innerText = '...en Arret...';
    audio.pause();
    audio.currentTime = 0;
    isStopped = true;
}


function playPause() {
    const isPlaying = player.classList.contains('play');
    isPlaying ? pauseSong() : playSong(currentSong);

}

function prevSong() {
    stopSong();
    songIndex--;
songIndex < 0 ? songIndex = songs.length -1 : songIndex;
loadSong(songs[songIndex]);
playSong(songs[songIndex]);
}

function nextSong() {
    stopSong();
    songIndex++;
    songIndex > songs.length - 1 ? songIndex = 0 : 
    songIndex;
    loadSong(songs[songIndex]);
    playSong(songs[songIndex]);
}

function setProgress(event) {
    const width = this.clientWidth;
    const clickX = event.offsetX;
    if(!player.classList.contains('stop')) {
        audio.currentTime = (clickX /width) * audio.duration;
    }
}

//pourcentage de la progression de la bare de son
function updateProgressBar(event) {
    var {duration, currentTime} = event.target;
    var progressPercent = (currentTime / duration) * 100;
    progressbar.style.width = `${progressPercent}%`;
}

function reduceSongVol() {  

    if (audio.volume > .1) {
         audio.volume -= .1;
         volprogress.style.width = `${audio.volume * 100}%`;
    }

    if (audio.volume <= .1){
    audio.volume = 0.0;
    audio.muted = true;
    volprogress.style.width = `0`;
    changeClasses(volbasse.querySelector('i.fas'), 'fa-volume-down', 'fa-volume-mute');
   }
   if (audio.volume <= .5) {
       changeClasses(volhaute.querySelector('i.fas'), 'fa-volume-up', 'fa-volume-down');
   }

}
function increaseSongVol() {
    if (audio.volume < .9) {
        audio.muted = false;
        audio.volume += .1;
        volprogress.style.width = `${audio.volume * 100}%`;
        changeClasses(volbasse.querySelector('i.fas'), 'fa-volume-mute', 'fa-volume-down');
    }
    if (audio.volume > .5) {
         changeClasses(volhaute.querySelector('i.fas'), 'fa-volume-down', 'fa-volume-up');
    }
    if( audio.volhaute > .9) {
        audio.volume = 1.0;
        volprogress.style.width = `100%`;
    }
}


function updateVol(event) {
    const width = this.clientWidth;
    const clickX = event.offsetX;

    audio.volume = (clickX / width);
    volprogress.style.width = `${audio.volume * 100}%`;

}

function audioError() {
    title.innerText = "Défaut de chargement";
}
/*******************************************Fin************************************************* */





