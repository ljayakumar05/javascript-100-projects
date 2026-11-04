const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".number");
const operatorsButtons = document.querySelectorAll(".operator");

const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const dotBtn = document.getElementById("dot");
const divideBtn = document.getElementById("divide");
const equalBtn = document.getElementById("equal")

numberButtons.forEach((button) => {
    button.addEventListener("click",() =>{
        display.value += button.value;
    })
})