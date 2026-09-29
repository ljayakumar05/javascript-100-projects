function UpdateClock() {

    // Get DOM elements - time
    const hrs = document.getElementById("hrs");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");

    const ampmValue = document.getElementById("format");

    // Get DOM elements - date
    const date = document.getElementById("date");
    const month = document.getElementById("month");
    const year = document.getElementById("year");

    // Get current date and time
    const currentTime = new Date();

    // Get hours
    let hours = currentTime.getHours();

    // AM / PM
    let ampm;

    if (hours >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    // 12-hour format
    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = hours - 12;
    }

    // Update time
    hrs.textContent = String(hours).padStart(2, "0");
    min.textContent = String(currentTime.getMinutes()).padStart(2, "0");
    sec.textContent = String(currentTime.getSeconds()).padStart(2, "0");

    // Update AM / PM
    ampmValue.textContent = ampm;

    // Date
    let dateValue = currentTime.getDate();
    let monthValue = currentTime.getMonth() + 1;
    let yearValue = currentTime.getFullYear();

    // Add leading zero
    dateValue = String(dateValue).padStart(2, "0");
    monthValue = String(monthValue).padStart(2, "0");

    // Update date
    date.textContent = dateValue;
    month.textContent = monthValue;
    year.textContent = yearValue;
}


// Run immediately
UpdateClock();

// Run every 1 second
setInterval(UpdateClock, 1000);