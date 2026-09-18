const billAmount = document.getElementById("userAmount");
const displayValue = document.getElementById("peopleList")
const tipButtons = document.querySelectorAll(".tip-btn");

const submitBtn = document.getElementById("submitBtn");

let tipPercent = 0;

//Tip button
tipButtons.forEach((button) => {

    button.addEventListener("click", ()=> {


        const tipText = button.textContent;

        // Update the Outside Variable
        tipPercent = Number(tipText.replace("%", ""));

        console.log("Selected Tip:", tipPercent);
    });
});

// Submit button
submitBtn.addEventListener("click", ()=> {

    const bill = Number(billAmount.value);
    const people = Number(displayValue.value);

    console.log("Bill:",bill);
    console.log("people:",people);
    console.log("Selected Tip:", tipPercent);

    // Calculate tip
    const tipAmount = bill * tipPercent / 100;

    console.log("Tip Amount:",tipAmount);

    // Calculate total bill
    const totalBill = bill + tipAmount;

    console.log("Total Bill:", totalBill);

    // Calculate amount per person
    const perPerson = totalBill / people;

    console.log("Per Person:", perPerson);
})




