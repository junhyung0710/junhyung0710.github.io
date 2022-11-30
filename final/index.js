window.onload = (event) => {
    document.querySelector('#drum-slash').style.display = 'none';
    document.querySelector('#electric-slash').style.display = 'none';
    document.querySelector('#bass-slash').style.display = 'none';
    document.querySelector('#piano-slash').style.display = 'none';
    document.querySelector('#sing-slash').style.display = 'none';
    document.getElementById("pause").style.display = 'none';
    document.querySelector('.instruments').style.display = 'none';
    HandleDrumClick();
    HandleElectricClick();
    HandleBassClick();
    HandlePianoClick();
    HandleSingClick();  

}

function HandleInstrumentsClick() {
    let x = document.querySelector('.instruments')
    let y = document.querySelector('.main')
    x.style.display = x.style.display == "none" ? "block" : "none";
    y.style.display = y.style.display == "none" ? "block" : "none";
}

function HandlePauseClick() {
    document.getElementById("song").pause();
    let play = document.getElementById("play")
    let pause = document.getElementById("pause")
    play.style.display = "flex"
    pause.style.display = "none";
    document.querySelector('#drum-slash').style.display = 'block';
    document.querySelector('#electric-slash').style.display = 'block';
    document.querySelector('#bass-slash').style.display = 'block';
    document.querySelector('#piano-slash').style.display = 'block';
    document.querySelector('#sing-slash').style.display = 'block';
    f_1.stop();
    f_2.stop();
    f_3.stop();
    f_4.stop();
    f_5.stop();
}

function HandlePlayClick() {
    document.getElementById("song").play();
    let play = document.getElementById("play")
    let pause = document.getElementById("pause")
    play.style.display = "none"
    pause.style.display = "flex";
    document.querySelector('#drum-slash').style.display = 'none';
    document.querySelector('#electric-slash').style.display = 'none';
    document.querySelector('#bass-slash').style.display = 'none';
    document.querySelector('#piano-slash').style.display = 'none';
    document.querySelector('#sing-slash').style.display = 'none';
    f_1.start();
    f_2.start();
    f_3.start();
    f_4.start();
    f_5.start();
}



let initial_1 = 0
let f_1 = 'none'
function HandleDrumClick() {
    let x = document.querySelector('#drum-slash')
    x.style.display = x.style.display == "none" ? "block" : "none";
    if (initial_1 === 0) {
        f_1 = new Freezeframe('.freezeframe1', {
            trigger: 'false',
            overlay: false
            });
        initial_1 += 1
    } else {
        f_1.toggle();
    }
}

let initial_2 = 0
let f_2 = 'none'
function HandleElectricClick() {
    let x = document.querySelector('#electric-slash')
    x.style.display = x.style.display == "none" ? "block" : "none";
    if (initial_2 === 0) {
        f_2 = new Freezeframe('.freezeframe2', {
            trigger: 'false',
            overlay: false
            });
        initial_2 += 1
    } else {
        f_2.toggle();
    }
}

let initial_3 = 0
let f_3 = 'none'
function HandleBassClick() {
    let x = document.querySelector('#bass-slash')
    x.style.display = x.style.display == "none" ? "block" : "none";
    if (initial_3 === 0) {
        f_3 = new Freezeframe('.freezeframe3', {
            trigger: 'false',
            overlay: false
            });
        initial_3 += 1
    } else {
        f_3.toggle();
    }
}

let initial_4 = 0
let f_4 = 'none'
function HandlePianoClick() {
    let x = document.querySelector('#piano-slash')
    x.style.display = x.style.display == "none" ? "block" : "none";
    if (initial_4 === 0) {
        f_4 = new Freezeframe('.freezeframe4', {
            trigger: 'false',
            overlay: false
            });
        initial_4 += 1
    } else {
        f_4.toggle();
    }
}

let initial_5 = 0
let f_5 = 'none'
function HandleSingClick() {
    let x = document.querySelector('#sing-slash')
    x.style.display = x.style.display == "none" ? "block" : "none";
    if (initial_5 === 0) {
        f_5 = new Freezeframe('.freezeframe5', {
            trigger: 'false',
            overlay: false
            });
        initial_5 += 1
    } else {
        f_5.toggle();
    }
}


function HandleMainClick() {
    let x = document.querySelector('.icon-arrow')
    let y = document.querySelector('.menu')
    y.style.display = y.style.display == "none" ? "block" : "none";
    x.classList.toggle('icon-arrow-transition')



}

function HandleAboutClick() {
    let x = document.querySelector('.about-wrapper')
    x.style.display = x.style.display == "none" ? "flex " : "none";
}

function HandleStageLightsClick() {
    let x = document.querySelector('.stageshadow')
    x.style.animationPlayState = x.style.animationPlayState == "paused" ? "running" : "paused";
}