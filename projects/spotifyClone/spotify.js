// console.log('spotify');

// lets asume the variables:-
let firstSong = 0;
let audioSong = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgress = document.getElementById('myProgress')
let gif = document.getElementById('gif')
let songitems = Array.from(document.getElementsByClassName('songitem'))
let song = [
    { songName: "love me like you do ", filePath: "songs/1.mp3", coverPath: "img/1.png" },
    { songName: "ooo soniye ", filePath: "songs/2.mp3", coverPath: "img/2.jpg" },
    { songName: "kgf-2 ", filePath: "songs/3.mp3", coverPath: "img/3.jpg" },
    { songName: "mahbooba", filePath: "songs/4.mp3", coverPath: "img/4.png" },
    { songName: "natural", filePath: "songs/5.mp3", coverPath: "img/4.png" }
]
// audioSong.play();
// handle play/pause button
masterPlay.addEventListener('click', () => {
    if (audioSong.paused || audioSong.currentTime <= 0) {
        audioSong.play();
        masterPlay.classList.remove("fa-play")
        masterPlay.classList.add("fa-pause")
        gif.style.opacity = 1;
    }
    else {
        audioSong.pause();
        masterPlay.classList.remove("fa-pause")
        masterPlay.classList.add("fa-play")
        gif.style.opacity = 0;
    }
})

audioSong.addEventListener('timeupdate', () => {
    // update progressbar
    progress = parseInt((audioSong.currentTime / audioSong.duration) * 100)
    myProgress.value = progress
    myProgress.addEventListener('change', () => {
        audioSong.currentTime = myProgress.value * audioSong.duration / 100
    })
})

songitems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName('img')[0].src = song[i].coverPath
    element.getElementsByClassName('songName')[0].innerText = song[i].songName
});

const makeallsongs = () => {
    Array.from(document.getElementsByClassName('songitmplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}
Array.from(document.getElementsByClassName('songitmplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target)
        makeallsongs();
        firstSong = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioSong.src = `songs/${firstSong+1}.mp3`
        audioSong.currentTime = 0;
        audioSong.play();
        masterPlay.classList.remove("fa-play")
        masterPlay.classList.add("fa-pause")

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(firstSong>9){
        firstSong = 0;
    }
    else{
        firstSong += 1;
    }
    audioSong.src = `songs/${firstSong+1}.mp3`;
    audioSong.currentTime = 0;
    audioSong.play();
})