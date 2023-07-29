const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const addBtn = document.querySelector('.add-btn');

// Fetch tasks from local storage
function getTasks() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

// Save tasks to local storage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete task
function deleteTask(task) {
    const tasks = getTasks();
    const updatedTasks = tasks.filter(t => t !== task);
    saveTasks(updatedTasks);
}

// Update task
function updateTask(oldTask, newTask) {
    const tasks = getTasks();
    const updatedTasks = tasks.map(t => (t === oldTask ? newTask : t));
    saveTasks(updatedTasks);
}

// Create new task element
function createTaskElement(task) {
    const li = document.createElement('li');
    const textInput = document.createElement('input');
    const editDiv = document.createElement('div');
    const deleteDiv = document.createElement('div');
    const editIcon = document.createElement('img');
    const deleteIcon = document.createElement('img');

    textInput.value = task;
    textInput.readOnly = true;     // By default, set the input field to read-only
    textInput.classList.add('todo-text');

    editIcon.src = './assets/edit.png';
    editIcon.alt = 'Edit';

    // Variable to track if we're currently editing the task
    let isEditing = false;

    // Add an event listener to the edit button
    editIcon.addEventListener('click', () => {
        // If we're not currently editing, make the input field editable
        if (!isEditing) {
            textInput.readOnly = false;
            textInput.focus();
            editIcon.src = './assets/save.png';
            editIcon.alt = 'Save';
        } else {
            // If we're currently editing, save the changes and make the input field read-only again
            const newText = textInput.value.trim();
            if (newText !== '') {
                task = newText;
                updateTask(task, newText);
            }
            textInput.readOnly = true;
            editIcon.src = './assets/edit.png';
        }

        // Toggle the editing status
        isEditing = !isEditing;
    });

    // Add the edit button to its parent div
    editDiv.appendChild(editIcon);

    deleteIcon.src = './assets/delete.png';
    deleteIcon.alt = 'Delete';
    deleteIcon.classList.add('delete-icon');

    deleteIcon.addEventListener('click', (event) => {
        event.target.parentNode.parentNode.remove();
        deleteTask(task);
    });

    deleteDiv.appendChild(deleteIcon);

    li.appendChild(textInput);
    li.appendChild(editDiv);
    li.appendChild(deleteDiv);

    return li;
}

// Add new task
function addTask(task) {
    const tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
    todoList.appendChild(createTaskElement(task));
}

// Initialize tasks on load
window.onload = () => {
    const tasks = getTasks();
    tasks.forEach(task => todoList.appendChild(createTaskElement(task)));
}

// Handle add button click
addBtn.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if (task) {
        addTask(task);
        todoInput.value = '';
    } else {
        alert("Please, write the task to add!");
    }
});