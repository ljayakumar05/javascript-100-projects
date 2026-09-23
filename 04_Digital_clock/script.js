
//Get Dom elements
const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

    
setInterval(()=>{
    // Get current date and time
    const currentTime = new Date();

    // Update Dom
    hrs.textContent = String(currentTime.getHours()).padStart(2, "0");
    min.textContent = String(currentTime.getMinutes()).padStart(2, "0");
    sec.textContent = String(currentTime.getSeconds()).padStart(2, "0");

}, 1000);
