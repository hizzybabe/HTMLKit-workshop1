const ToDoApp = (function() {
    // Private array to store tasks
    let tasks = [];

    // Cache DOM elements
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const addTaskBtn = document.getElementById("addTaskBtn");

    // Add event listeners
    addTaskBtn.addEventListener("click", addTask);
    taskList.addEventListener("click", handleTaskClick);

    // Add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const newTask = { text: taskText, done: false };
            tasks.push(newTask);
            taskInput.value = ""; // Clear input
            updateDisplay();
        } else {
            alert("Please enter a task.");
        }
    }

    // Update task list display
    function updateDisplay() {
        taskList.innerHTML = ""; // Clear the current list

        tasks.forEach((task, index) => {
            const taskItem = document.createElement("li");
            taskItem.textContent = task.text;
            taskItem.className = task.done ? "done" : "";

            // Add data attribute for indexing
            taskItem.setAttribute("data-index", index);

            // Add toggle button
            const toggleButton = document.createElement("button");
            toggleButton.textContent = task.done ? "Undo" : "Complete";
            toggleButton.className = "toggle-btn";
            taskItem.appendChild(toggleButton);

            // Add remove button
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.className = "remove-btn";
            taskItem.appendChild(removeButton);

            taskList.appendChild(taskItem);
        });
    }

    // Handle task clicks for toggling and removing tasks
    function handleTaskClick(event) {
        if (!event.target.matches('button')) return;
        
        const taskItem = event.target.closest('li');
        const index = taskItem.getAttribute("data-index");
        
        if (event.target.classList.contains('toggle-btn')) {
            toggleTask(index);
        } else if (event.target.classList.contains('remove-btn')) {
            removeTask(index);
        }
    }

    // Toggle task completion
    function toggleTask(index) {
        tasks[index].done = !tasks[index].done;
        updateDisplay();
    }

    // Remove a task
    function removeTask(index) {
        tasks.splice(index, 1);
        updateDisplay();
    }

    // Public API
    return {
        addTask,
        toggleTask,
        removeTask
    };
})();