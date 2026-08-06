var timer = 60;
var score = 0;
var hitrn = 0;
function makeBubble() {

    var clutter = "";

    for (i = 0; i <= 101; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class = "bubble">${rn}</div>`;

    }
    document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer() {
    var timerrun = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerrun);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;

}
function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();

    }
})


runTimer();
makeBubble();
getNewHit();
