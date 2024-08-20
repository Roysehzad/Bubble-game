// console.log("i am running");
var time = 60;
var score = 0;
var hitrn = 0;

function incresescore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;

}

function getnewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;

}


function makebubble() {
    var clutter = "";

    for (var i = 0; i <= 74; i++) {

        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function timer() {
    var timeint = setInterval(function () {

        if (time > 0) {
            time--;
            document.querySelector("#timerval").textContent = time;
        }

        else {
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`
            clearInterval(timeint);
        }
    }, 1000);
}

document.querySelector("#pbtm")
.addEventListener("click",function(details){
 var clicknumber = Number(details.target.textContent);
 if(clicknumber === hitrn){
    incresescore()
    makebubble()
    getnewhit()
 }

})


makebubble();
timer();
getnewhit();
