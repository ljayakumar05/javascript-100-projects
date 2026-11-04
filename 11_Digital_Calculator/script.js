const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".number");
const operatorsButtons = document.querySelectorAll(".operator");

const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const dotBtn = document.getElementById("dot");
const divideBtn = document.getElementById("divide");
const equalBtn = document.getElementById("equal")

let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let justCalculated = false;

// Number buttons
numberButtons.forEach((button) => {
    button.addEventListener("click",() =>{

        if(justCalculated || display.value === "Error"){
            display.value = "";
            justCalculated = false;
        }

        display.value += button.value;
    });
});

// Clear button (AC)
clearBtn.addEventListener("click", () => {
    display.value = "";
    firstNumber = "";
    secondNumber = "";
    currentOperator = "";
    justCalculated = false;
});

// Delete button (DEL)
deleteBtn.addEventListener("click", () => {
    if(justCalculated || display.value === "Error"){
        display.value = "";
        justCalculated = false;
        return;
    }
    
    display.value = display.value.slice(0,-1);
});

// Decimal button (only one dot)
dotBtn.addEventListener("click", () => {
    if(justCalculated || display.value === "Error"){
        display.value = "";
        justCalculated = false;
    }
 
    if(!display.value.includes(".")) {
        display.value += display.value === "" ? "0." : ".";
    }
});

// Operator button functionality
operatorsButtons.forEach((button) => {
    button.addEventListener("click", () => {

       if(display.value === "" || display.value === "Error"){
        return;
       }
       
        firstNumber = display.value;
        currentOperator = button.value;

        display.value = "";
        justCalculated = false;
        
    console.log(`${firstNumber} ${currentOperator}`);        
    });
});

// Equal Button
equalBtn.addEventListener("click", () => {

    if(currentOperator === "" || display.value === ""){
        return;
    }
    secondNumber = display.value;

    let result;

    if(currentOperator === "+"){
        result = Number(firstNumber) + Number(secondNumber);
    }
    else if (currentOperator === "-"){
        result = Number(firstNumber) - Number(secondNumber);
    }
    else if (currentOperator === "*"){
        result = Number(firstNumber) * Number(secondNumber);
    }
    else if (currentOperator === "/"){
        if(Number(secondNumber) === 0) {
            result = "Error";
        }else {
            result = Number(firstNumber) / Number(secondNumber);
        }
    }
    display.value = result;

    firstNumber = "";
    secondNumber = "";
    currentOperator = "";
    justCalculated = true;
});