const userInputs = document.getElementById("userInput");
const taskBtn = document.getElementById("todoBtn");
const taskList = document.getElementById("taskList");

// 1. Load saved tasks from Local Storage
let tasks = JSON.parse(localStorage.getItem("todoTasks")) || [];

// 2. Save tasks to Local Storage
function saveTasks() {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

// 3. Display all tasks
function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        // Create task element
        const taskAdd = document.createElement("li");
        taskAdd.classList.add("taskList");

        taskAdd.textContent = task.text;

        // Show completed style if task is completed
        if (task.completed) {
            taskAdd.classList.add("completed");
        }

        // Mark task as completed or pending
        taskAdd.addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed;

            saveTasks();
            displayTasks();
        });

        // Create Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("task-delete-btn");

        // Delete selected task
        deleteBtn.addEventListener("click", (event) => {
            event.stopPropagation();

            tasks.splice(index, 1);

            saveTasks();
            displayTasks();

            console.log("Task deleted");
        });

        // Add Delete button to task
        taskAdd.appendChild(deleteBtn);

        // Add task to the list
        taskList.appendChild(taskAdd);
    });
}

// 4. Add a new task
taskBtn.addEventListener("click", () => {
    const userValues = userInputs.value.trim();

    if (userValues === "") {
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

    // Clear input
    userInputs.value = "";
    userInputs.focus();
});

// 5. Display saved tasks when page opens
displayTasks();
