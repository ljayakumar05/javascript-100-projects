console.log("welcome");
// Get the second hand
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

const dayHand = document.querySelector(".day-hand")

const themeBtn = document.querySelector("#themeBtn");

// Dark mode btn
themeBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")){
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});

//Update clock
function updateClock(){

    //Get current time
    const currentTime = new Date();
    // console.log(currentTime);

    //Get seconds
    const second = currentTime.getSeconds();

    // Get minutes
    const minutes = currentTime.getMinutes();

    // Get hours
    const hours = currentTime.getHours();

    // Get day
    const day = currentTime.getDate();

    const hourDegree = (hours % 12) * 30 + minutes * 0.5;               

    //Convert seconds to degrees
    const secondDegree = second * 6;
    // const minuteDegree = minutes * 6;

    //Minute hand move smoothley
    const minuteDegree = minutes * 6 + second * 0.1;

    // Rotate second hand
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    dayHand.textContent = day;
}

//Run imadiately
updateClock();

//Update every second
setInterval(updateClock, 1000);

// toggle example
const btn = document.getElementById("toggleBtn");
const box = document.getElementById("toggleBox");

btn.addEventListener('click', () => {
    box.classList.toggle('hidden');
});