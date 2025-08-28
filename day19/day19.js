function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.innerHTML = `
    ${taskText} 
    <button onclick="removeTask(this)">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = ""; // clear input
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}
