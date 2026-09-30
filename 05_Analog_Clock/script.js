console.log("welcome");
// Get the second hand
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");


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

    const hourDegree = (hours % 12) * 30 + minutes * 0.5;

    console.log(hourDegree);


    //Convert seconds to degrees
    const secondDegree = second * 6;
    const minuteDegree = minutes * 6;


    // Rotate second hand
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

}

//Run imadiately
updateClock();

//Update every second
setInterval(updateClock, 1000);