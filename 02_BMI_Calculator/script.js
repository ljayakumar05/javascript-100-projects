// console.log("BMI Calculator");

// function calculateBmi(){
//     let weight = document.getElementById("weight").value;
//     let height = document.getElementById("height").value;

//     let bmi = (weight / (height * height)) * 703;

//     document.getElementById("heading").innerHTML = "Your BMI is :" + bmi;
//     document.getElementById("bmi-output").innerHTML = bmi.toFixed(1);

//     if (bmi <= 24.9) {
//         document.getElementById('message').innerHTML = "Yor are underweight";
//     }else if (bmi >= 25 && bmi <= 29.9) {
//         document.getElementById('message').innerHTML = "you are healthy weight"
//     }else {
//         document.getElementById('message').innerHTML = "you are overweight";
//     }
// }

// function reload(){
//     window.location.reload();
// }

const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById('bmi-result');
const weightConditionEl = document.getElementById('weight-condition');

btnEl.addEventListener('click', calculateBMI);

function calculateBMI(){
    const heightValue = document.getElementById('height').value / 100
    const weightValue = document.getElementById('weight').value

    const bmiValue = weightValue / (heightValue * heightValue)

    bmiInputEl.value = bmiValue;

    console.log(bmiValue);

    if(bmiValue < 18.5){
         weightConditionEl.innerText = "Under Weight";
    }else if(bmiValue >= 18.5 && bmiValue <= 24.9)
    {
        weightConditionEl.innerText = "Normal Weight";
    }else if(bmiValue >= 25 && bmiValue <= 29.9) 
    {   
        weightConditionEl.innerText = "Overweight";
    }else if (bmiValue >= 30)
    {
        weightConditionEl.innerText = "Obesity"
    }    
};

function reload(){
    window.location.reload();
}