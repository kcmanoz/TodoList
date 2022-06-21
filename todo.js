const textInput = document.getElementById('type-input');
const todoList = document.getElementById('todo');
const todoForm = document.getElementById('form');

todoForm.addEventListener('submit', submitHandler);
todoList.addEventListener('click', listClickHandler);

function addListItem(text) {
    const node = document.createElement("li");
    node.textContent = text;
    todoList.append(node);
}

function submitHandler(e) {
    e.preventDefault();
    const text = textInput.value;
    if (text !== '') {
        addListItem(text);
        textInput.value = '';
        textInput.focus();
    }
}

function listClickHandler(e) {
    if (e.target.tagName = "LI") {
        if (e.target.classList.contains("done")) {
            e.target.remove();
        } else {
            e.target.classList.add("done");
        }
    }
}
