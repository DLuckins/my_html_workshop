var p;
setup();
console.log(p)
function setup() { //we aren't using the p5.js canvas, we're using js to create and then manipulate HTML and CSS
    p = document.getElementById("band22") // create a <p> element in the HTML DOM that contains the listed text.
}

function onDrag() {

    p.style.fontWeight = 600;
    p.style.fontSize = "50px";


}
function offDrag() {

    p.style.fontWeight = 400;
    p.style.fontSize = "30px";


}
function u(t) { // dwitter code goes here

    D = 23; // divisions

    // https://www.dwitter.net/d/14566 - SMASH
    c.width |= 0; for (i = D; i--;)with (x) save(fillStyle = 'black', beginPath(font = "70em impact")), moveTo(j = 1e3, 540), clip(arc(j, 540, 2e3, q = 2 * Math.PI * i / D + 9, q + 2 * Math.PI / D - .02)), restore(fillText("DENIS", 9 + 29 * S(q ** 4 + t), j + 49 * C(q ** 5 + t), 1900))

}

let time = 0;
let frame = 0;
let FPS = 60;
let nextFrameMs = 0;

let x = c.getContext('2d');
let S = Math.sin;
let C = Math.cos;
let T = Math.tan;
let R = (r, g, b, a = 1) => `rgba(${r | 0},${g | 0},${b | 0},${a})`;

let loop = (frameTime) => {
    requestAnimationFrame(loop);

    // limit update rate to FPS
    if (frameTime) {
        if (frameTime < nextFrameMs - 2)
            return;  // skip this cycle
        nextFrameMs = Math.max(nextFrameMs + 1000 / FPS, frameTime);
    }

    // update time
    time = frame / FPS;
    if (time * FPS | 0 == frame - 1)
        time += 0.000001; // fix floating point bug
    ++frame;

    // update user function
    u(time);

    // fit dwitter sized canvas to window
    const aspect = 1920 / 1080;
    const width = aspect > innerWidth / innerHeight ? innerWidth : innerHeight * aspect;
    c.style.width = width + 'px';
    document.body.style.textAlign = 'center';
}

loop();
