let timerInput = document.getElementById("time"); 
let buttonRun = document.getElementById("button");
let timerShow = document.getElementById("timer");
buttonRun.addEventListener('click', function() {
    timeMinut = parseInt(timerInput.value) * 60
})
timer = setInterval(function () {
    seconds = timeMinut%60;
    minutes = timeMinut/60%60;
    hour = timeMinut/60/60%60;

    if (timeMinut <= 0) {

        clearInterval(timer);

        alert("Laiks beidzās");
    } else { 

        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;

        timerShow.innerHTML = strTimer;
    }
    --timeMinut;
}, 1000)