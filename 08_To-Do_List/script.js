const userInputs = document.getElementById("userInput");
const taskBtn = document.getElementById("todoBtn");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");

// 1. Load saved tasks from Local Storage
let tasks = JSON.parse(localStorage.getItem("todoTasks")) || [];

// 2. Save tasks to Local Storage
function saveTasks() {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

// 3. Display all tasks
function displayTasks() {
    taskList.innerHTML = "";

    // Loop through every task
    tasks.forEach((task, index) => {

        // Create task element
        const taskAdd = document.createElement("li");
        taskAdd.classList.add("taskList");

        // Add task text
        taskAdd.appendChild(document.createTextNode(task.text));

        // Create Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("task-delete-btn");

        // Create Completed label
        const completedText = document.createElement("span");
        completedText.textContent = "Completed";
        completedText.classList.add("completed-text");

        // Show line-through and Completed label
        if(task.completed){
            taskAdd.classList.add("completed");
            taskAdd.appendChild(deleteBtn);
            taskAdd.appendChild(completedText);
        }else {
            taskAdd.appendChild(deleteBtn);
        }

        // Click task to mark completed or pending
        taskAdd.addEventListener("click", (event) => {

            // Ingnore Clicks on the Delete button
            if(event.target === deleteBtn){
                return;
            }

            tasks[index].completed = !tasks[index].completed;

            saveTasks();
            displayTasks();
        })

        // Delete selected task
        deleteBtn.addEventListener("click", (event) => {
            event.stopPropagation();

            tasks.splice(index, 1);

            saveTasks();
            displayTasks();
        });

        // Add task to the list
        taskList.appendChild(taskAdd);
    });
}

    // 4. Add a new task
    taskBtn.addEventListener("click", () => {

        // Get input and remove extra spaces
        const userValues = userInputs.value.trim();

        // Prevent empty tasks
        if(userValues === ""){
            alert("Please enter a task");
            return;
        }

        // Create task object
        const newTask = {
            text: userValues,
            completed: false
        };

        // Add task to array
        tasks.push(newTask);

        // Save and display tasks
        saveTasks();
        displayTasks();

        // Clear input and focus
        userInputs.value = "";
        userInputs.focus();
    });

    // 5. Display saved tasks when page opens
    displayTasks();

    clearBtn.addEventListener("click", () => {
        const confirmClear = confirm("Are you sure you want to delete all tasks?");

        if(confirmClear){
            tasks = [];

            localStorage.removeItem("todoTasks");

            displayTasks();
        }else {
            console.log("not ok");
        }
    });