const billAmount = document.getElementById("userAmount");
const tipButtons = document.querySelectorAll(".tip-btn");
const displayValue = document.getElementById("peopleList");

const submitBtn = document.getElementById("submitBtn");
const reloadBtn = document.getElementById("reloadBtn");

const resultDisplay = document.getElementById("userValueDisplay");

let tipPercent = 0;
let tipSelected = false;

// Tip button
tipButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const tipText = button.textContent.trim();

        if (tipText === "No Tip") {
            tipPercent = 0;
        } else {
            tipPercent = Number(tipText.replace("%", ""));
        }

        // Tip has been selected
        tipSelected = true;

        console.log("Tip:", tipPercent);
    });
});


// Submit button
submitBtn.addEventListener("click", () => {

    const bill = Number(billAmount.value);
    const people = Number(displayValue.value);

    // Check Bill
    if (billAmount.value.trim() === "") {
        alert("Please enter the bill amount");
        billAmount.focus();
        return;
    }

    // Check People
    if (displayValue.value.trim() === "") {
        alert("Please enter the number of people");
        displayValue.focus();
        return;
    }

    // Check Tip
    if (!tipSelected) {
        alert("Please select a tip");
        return;
    }

    console.log("Bill:", bill);
    console.log("People:", people);
    console.log("Selected Tip:", tipPercent);

    // Calculate tip
    const tipAmount = bill * tipPercent / 100;

    console.log("Tip Amount:", tipAmount);

    // Calculate total bill
    const totalBill = bill + tipAmount;

    console.log("Total Bill:", totalBill);

    // Calculate amount per person
    const perPerson = totalBill / people;

    console.log("Per Person:", perPerson);

    // Display result
    resultDisplay.value = `Total Bill Amount: ${totalBill}
Tip Amount: ${tipAmount}
Per Person: ${perPerson}`;
});

// Page reload btn
reloadBtn.addEventListener("click", ()=> {
    window.location.reload();
});
