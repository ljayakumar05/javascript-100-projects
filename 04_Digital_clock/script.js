
//Get Dom elements
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

    
setInterval(()=>{
    // Get current date and time
    let currentTime = new Date();

    // Update Dom
    hrs.textContent = currentTime.getHours();
    min.textContent = currentTime.getMinutes();
    sec.textContent = currentTime.getSeconds();

}, 1000);
