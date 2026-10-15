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
            alert("Plz enter the value");
            return;
        } else{
            const taskAdd = document.createElement("li");
            taskAdd.textContent = userValues;
            taskList.appendChild(taskAdd);
            userInputs.value = ""
            // add class
            taskAdd.classList.add("taskList")

            // Add Delet btn
            const deletBtn = document.createElement("button");
            deletBtn.textContent = "Delete";
            // Add elements to the task
            taskAdd.appendChild(deletBtn);
            // Add style to btn (ADD class)
            deletBtn.classList.add("task-delete-btn");
            // deletBtn.style.backgroundColor = "red";
            // deletBtn.style.margin = "0 5px 0 60px"

            // Delete selected task
            deletBtn.addEventListener("click", () => {
                taskAdd.remove();
                console.log("task deleted");
            });

            
        }
});

