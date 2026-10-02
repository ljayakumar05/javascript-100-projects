const userPassword = document.getElementById("Password");
const submitBtnValue = document.getElementById("submitBtn");

const copyBtn = document.getElementById("copyBtn");

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";


function generatePassword(){

    let newPassword = "";

    for (let i = 0; i < 12; i++){
        const randomIndex = Math.floor(Math.random() * characters.length)
        newPassword += characters[randomIndex];
    }
    userPassword.value = newPassword
}

submitBtnValue.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(userPassword.value);

    console.log(`password ${userPassword.value} copyed.`);

    // Create alert
    

    // alert(`your password successfully copyed ${userPassword.value}`);
  })


