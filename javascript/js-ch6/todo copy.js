const ToDoApp = (function() &123;
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
  function addTask() &123;
      const taskText = taskInput.value.trim();
      if (taskText) &123;
          const newTask = &123; text: taskText, done: false &125;;
          tasks.push(newTask);
          taskInput.value = ""; // Clear input
          updateDisplay();
      &125; else &123;
          alert("Please enter a task.");
      &125;
  &125;

  // Update task list display
  function updateDisplay() &123;
      taskList.innerHTML = ""; // Clear the current list

      tasks.forEach((task, index) => &123;
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
      &125;);
  &125;

  // Handle task clicks for toggling and removing tasks
  function handleTaskClick(event) &123;
      if (!event.target.matches('button')) return;
      
      const taskItem = event.target.closest('li');
      const index = taskItem.getAttribute("data-index");
      
      if (event.target.classList.contains('toggle-btn')) &123;
          toggleTask(index);
      &125; else if (event.target.classList.contains('remove-btn')) &123;
          removeTask(index);
      &125;
  &125;

  // Toggle task completion
  function toggleTask(index) &123;
      tasks[index].done = !tasks[index].done;
      updateDisplay();
  &125;

  // Remove a task
  function removeTask(index) &123;
      tasks.splice(index, 1);
      updateDisplay();
  &125;

  // Public API
  return &123;
      addTask,
      toggleTask,
      removeTask
  &125;;
&125;)();