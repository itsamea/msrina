'use strict'

const vid = document.getElementById("XSvid")
const img = document.getElementById("vidbtn")

img.addEventListener('click', function () { 
    if (vid.paused) {
        vid.play();
        img.src = "pause.png";
    }

    else {    
    vid.pause();
    img.src = "play.png";
    }
});

function toProfile() {
    const element = document.getElementById("second");
    element.scrollIntoView({
        behavior: 'smooth'
    });
}

function toMusic() {
    const element = document.getElementById("third");
    element.scrollIntoView({
        behavior: 'smooth'
    });
}

const track_1 = document.getElementById("song_1")
const desc = document.getElementById("desc")

track_1.onmouseover = function () {desc.style.visibility = "visible"}
track_1.onmouseout = function () {desc.style.visibility = "hidden", desc.style.top = "165px"}

const track_2 = document.getElementById("song_2")

track_2.onmouseover = function () {desc.style.visibility = "visible"; desc.style.top = "220px"}
track_2.onmouseout = function () {desc.style.visibility = "hidden", desc.style.top = "165px"}


const track_3 = document.getElementById("song_3")

track_3.onmouseover = function () {desc.style.visibility = "visible"; desc.style.top = "270px"}
track_3.onmouseout = function () {desc.style.visibility = "hidden", desc.style.top = "165px"}

const track_4 = document.getElementById("song_4")

track_4.onmouseover = function () {desc.style.visibility = "visible"; desc.style.top = "320px"}
track_4.onmouseout = function () {desc.style.visibility = "hidden", desc.style.top = "165px"}

const track_5 = document.getElementById("song_5")

track_5.onmouseover = function () {desc.style.visibility = "visible"; desc.style.top = "370px"}
track_5.onmouseout = function () {desc.style.visibility = "hidden", desc.style.top = "165px"}