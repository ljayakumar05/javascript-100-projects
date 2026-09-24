// //Get Dom elements
// const hrs = document.getElementById("hrs");
// const min = document.getElementById("min");
// const sec = document.getElementById("sec");

    
// setInterval(()=>{
//     // Get current date and time
//     const currentTime = new Date();

//     // Update Dom
//     hrs.textContent = String(currentTime.getHours()).padStart(2, "0");
//     min.textContent = String(currentTime.getMinutes()).padStart(2, "0");
//     sec.textContent = String(currentTime.getSeconds()).padStart(2, "0");

// }, 1000);

const num = 100;

if (num < 15) {
    console.log("good number")
} else if (num === 15) 
{
    console.log("same number")
} else {
    console.log('Not a good number')
}

const age = 12;

age >= 18 ? console.log('Adult') : console.log('Not Adult');

const name = 'fdfsdfsdfsdjai';

console.log(name.length);

const myName = 'JAYAKUMAR';

console.log(myName.slice(0, 5));

console.log(myName.toLowerCase(myName));

const number = "5";

console.log(number.padStart(5, "0"));

console.log(number.repeat(5));

const textFruts = "apple apple apple";

console.log(textFruts.replaceAll("apple", "orange"));