const userInputs = document.getElementById("userInput");
const taskBtn = document.getElementById("todoBtn");
const taskList = document.getElementById("taskList");

// 1. Load saved tasks form Local Storage
let tasks = JSON.parse(localStorage.getItem("todoTasks")) || [];

// 2. Save tasks to Local Strorage
function saveTasks() {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

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

            // Add task completed 
            taskAdd.addEventListener("click", () => {
                taskAdd.classList.toggle("completed");

                let taskCompleted = taskAdd.querySelector(".taskCompletedlist");

                if(taskCompleted){
                    taskCompleted.remove();
                }else {
                    taskCompleted = document.createElement("p");
                    taskCompleted.classList.add("taskCompletedlist");
                    taskCompleted.textContent = "Completed";

                    taskAdd.appendChild(taskCompleted);
                }
            })

            // Delete selected task
            deletBtn.addEventListener("click", (event) => {
                event.stopPropagation();
                taskAdd.remove();
                console.log("task deleted");
            });
        }
});

taskBtn.addEventListener("click", () => {
    const userValues = userInputs.value.trim();

    if(userValues === "") {
        alert("Please enter a task");
        return;
    }
    tasks.push({
        text: userValues,
        completed: false
    });

    saveTasks();
    displayTasks();

    userInputs.value = "";
});

displayTasks();


// Learn Local storage

localStorage.setItem("name", "jai");
localStorage.setItem("addred", "chennai");

const name = localStorage.getItem("name");
const address = localStorage.getItem("addred");

testTask.textContent = name + "-" + address;