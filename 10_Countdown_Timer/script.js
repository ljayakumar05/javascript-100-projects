const timer = document.getElementById("timer");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");


// Keep Variables outside the click event
let seconds = 0;
let interval = null;

// Display the timer
function updateTimer(){
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    timer.textContent =
        String(hours).padStart(2, "0") + " : " +
        String(minutes).padStart(2, "0") + " : "+
        String(secs).padStart(2, "0");
};

// Start button
startBtn.addEventListener("click", () => {
    if (interval !== null) return;

    interval = setInterval(() => {
        seconds++;
        updateTimer();
    }, 1000);
});

// Stop button
stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

// Reset button
resetBtn.addEventListener("click", () => {
   clearInterval(interval);
   interval = null;
   seconds = 0;
   updateTimer();
});