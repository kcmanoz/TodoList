const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', () => {
    const inputValue = todoInput.value.trim();
    if (inputValue.length > 0) {
        const li = document.createElement('li');
        const textDiv = document.createElement('div');
        const deleteDiv = document.createElement('div');
        const deleteIcon = document.createElement('img');

        textDiv.textContent = inputValue;
        textDiv.className = 'todo-text';

        deleteIcon.src = 'delete.png';
        deleteIcon.alt = 'Delete';
        deleteIcon.addEventListener('click', () => li.remove());

        deleteDiv.appendChild(deleteIcon);

        li.appendChild(textDiv);
        li.appendChild(deleteDiv);
        todoList.appendChild(li);
        todoInput.value = '';
    }
    else {
        alert("Please, write the task to add!");
    }
});
