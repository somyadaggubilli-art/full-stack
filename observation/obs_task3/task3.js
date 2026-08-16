//  DOM Element Selection
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const emptyMessage = document.getElementById('emptyMessage');

// Function to update empty message visibility
function updateEmptyMessage() {
  if (taskList.children.length === 0) {
    emptyMessage.style.display = 'block';
  } else {
    emptyMessage.style.display = 'none';
  }
}

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  // Prevent adding empty tasks
  if (taskText === '') return;

  //  Dynamic Element Creation
  const li = document.createElement('li');
  
  const span = document.createElement('span');
  span.textContent = taskText;

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  //  Event Listeners & Dynamic DOM Modification

  // Mark as complete event
  completeBtn.addEventListener('click', function () {
    span.classList.toggle('completed-text');
  });

  // Delete task event
  deleteBtn.addEventListener('click', function () {
    taskList.removeChild(li);
    updateEmptyMessage(); // Check if list is empty after deletion
  });

  // Append elements to list item
  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  // Add list item to the main list
  taskList.appendChild(li);

  // Clear input field and update empty state
  taskInput.value = '';
  updateEmptyMessage();
}

// Event listener for "Add Task" button click
addTaskBtn.addEventListener('click', addTask);

// Optional: Allow pressing 'Enter' key to add a task
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});