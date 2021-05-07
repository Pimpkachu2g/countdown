let daysElem = document.querySelector('#days').children[0];
let hoursElem = document.querySelector('#hours').children[0];
let minsElem = document.querySelector('#minutes').children[0];
let secElem = document.querySelector('#seconds').children[0];
let curentYearElem = document.querySelector('#wrapper > h1');

VanillaTilt.init(document.querySelector("#wrapper"), {
    max: 1,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
    scale: 1
});

function countdown () {
    let date = new Date();
    let nextYear = date.getFullYear() + 1;
    let fullDate = `1 Jan ${nextYear}`;
    let newYearsEve = new Date(fullDate);
    let totalSeconds = (newYearsEve - date) / 1000;

    let days = Math.floor(totalSeconds / (3600 * 24));
    let hours = Math.floor(totalSeconds % (3600 * 24) / 3600);
    let minutes = Math.floor(totalSeconds % 3600 / 60);
    let seconds = Math.floor(totalSeconds % 60);

    daysElem.innerText = days;
    hoursElem.innerText = hours;
    minsElem.innerText = minutes;
    secElem.innerText = seconds;
    curentYearElem.innerHTML = `New Years Eve <br>${nextYear}`
};

setInterval(countdown, 900);
