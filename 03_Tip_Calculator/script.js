const billAmount = document.getElementById("userAmount");
const displayValue = document.getElementById("userValueDisplay")

const submitBtn = document.getElementById("submitBtn");
// const displayValueBtn = document.getElementById("displayBtn");

submitBtn.addEventListener("click",() => {
    const billAmountValu = billAmount.value;
    console.log(billAmountValu);

    const displayValueBtninput = displayValue.value;
    console.log(displayValueBtninput);

    const value1 = Number(billAmountValu);
    const value2 = Number(displayValueBtninput);

    console.log(value1 + value2);
})

// displayValueBtn.addEventListener('click', ()=> {
//     const displayValueBtninput = displayValue.value;
//     console.log(displayValueBtninput);

//     console.log(displayValueBtninput);
// })