const hoursInput = document.getElementById("hoursInput");
const minutesInput = document.getElementById("minutesInput");
const secondInput = document.getElementById("secondsInput");

const timer = document.getElementById("timer");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const fullresetBtn = document.getElementById("fullresetBtn");

const message = document .getElementById("message");

let remainingSeconds = 0;
let originalSeconds = 0;
let interval = null;

// Convert total seconds into HH : MM : SS and display it
function updateTimer() {
    const hours = Math.floor(remainingSeconds / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);
    const seconds = remainingSeconds % 60;

    timer.textContent = 
        String(hours).padStart(2, "0") + " : " +
        String(minutes).padStart(2, "0") + " : " +
        String(seconds).padStart(2, "0");
}

// Read the time chosen by the user
function getInputSeconds(){
    const hours = Math.max(0, Number(hoursInput.value) || 0);
    const minutes = Math.max(0, Number(minutesInput.value) || 0);
    const seconds = Math.max(0, Number(secondInput.value) || 0);

    return hours * 3600 + minutes * 60 + seconds;
}

// Start the Countdown
startBtn.addEventListener("click", () => {
    if(interval !== null) return;

    // Read the inputes when starting a new countdown
    if(remainingSeconds === 0){
        remainingSeconds = getInputSeconds();
        originalSeconds = remainingSeconds;
    }

    if(remainingSeconds <= 0) {
        message.textContent = "Please set a time greater than zero.";
        message.style.color = "red";
        return;
    }

    message.textContent = "";

    // Count down once every second
    interval = setInterval(() => {
        remainingSeconds--;
        updateTimer();

        if(remainingSeconds <= 0) {
            clearInterval(interval);
            interval = null;
            remainingSeconds = 0;
            updateTimer();
            message.textContent = "Time's up!";
            message.style.color = "green";

            playAlarm();
        }
    }, 1000);

    updateTimer();
});

// Pause the countdown
pauseBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
})

// Reset the countdown
resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;

    remainingSeconds = getInputSeconds();
    originalSeconds = remainingSeconds;

    message.textContent = "";
    updateTimer();
});

// Show the initial time
updateTimer();

// Full reset btn

fullresetBtn.addEventListener("click", () => {
    window.location.reload();
});

// Sound time end
function playAlarm() {
    const audioContext = new AudioContext();

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = "sine";

    gainNode.gain.value = 0.3;

    oscillator.start();

    oscillator.stop(audioContext.currentTime + 1);
}