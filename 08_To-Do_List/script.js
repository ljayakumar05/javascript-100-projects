const userInputs = document.getElementById("userInput");
const taskBtn = document.getElementById("todoBtn");
const taskList = document.getElementById("taskList");

// Get input value when typing
userInputs.addEventListener("input", () => {
    const userValues = userInputs.value;
    console.log(userValues);
});

// Get input value when button is clicked
taskBtn.addEventListener("click", () => {
        const userValues = userInputs.value.trim();

        if (userValues === ""){
            console.log("please enter a task");
        } else{
            const taskAdd = document.createElement("li");
            taskAdd.textContent = userValues;
            taskList.appendChild(taskAdd);
            userInputs.value = ""

            console.log('ok values');
        }
});
