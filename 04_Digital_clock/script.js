//Get Dom elements time
const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const ampmValue = document.getElementById("format");

//Get Dome elements date 
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");   


setInterval(()=>{
    // Get current date and time
    const currentTime = new Date();

    // Update Dom
    hrs.textContent = String(currentTime.getHours()).padStart(2, "0");
    min.textContent = String(currentTime.getMinutes()).padStart(2, "0");
    sec.textContent = String(currentTime.getSeconds()).padStart(2, "0");

}, 1000);

const now = new Date();

let hours = now.getHours();

let ampm;

if(hours >= 12){
    ampm = "pm";
    console.log("PM");
}else {
    ampm = "AM"
    console.log("AM");
}

ampmValue.innerHTML = ampm;


//Date Value

let dateValue = now.getDate();
let monthValue = now.getMonth() + 1;
let yearValue = now.getFullYear();

console.log(dateValue);
console.log(monthValue);
console.log(yearValue);

dateValue = String(dateValue).padStart(2, "0");
monthValue = String(monthValue).padStart(2, "0");

date.textContent = dateValue;
month.textContent = monthValue;
year.textContent = yearValue; 














// const num = 100;

// if (num < 15) {
//     console.log("good number")
// } else if (num === 15) 
// {
//     console.log("same number")
// } else {
//     console.log('Not a good number')
// }

// const age = 12;

// age >= 18 ? console.log('Adult') : console.log('Not Adult');

// const name = 'fdfsdfsdfsdjai';

// console.log(name.length);

// const myName = 'JAYAKUMAR';

// console.log(myName.slice(0, 5));

// console.log(myName.toLowerCase(myName));

// const number = "5";

// console.log(number.padStart(5, "0"));

// console.log(number.repeat(5));

// const textFruts = "apple apple apple";

// console.log(textFruts.replaceAll("apple", "orange"));

// const numValue = 123.656;

// console.log(numValue.toFixed(0));

// const numValueRes = Number(numValue.toFixed(2));

// console.log(typeof numValueRes);

// const resultValue = addValue(100, 50);

// function addValue(a, b){
//     return a + b;
// }

// console.log(resultValue);

// console.log("start");

// // setTimeout(() => {
// //     console.log("Hellow");
// //     alert("Welcome");
// // }, 5000);

// console.log("end");

// const toDay = new Date();

// console.log(toDay);