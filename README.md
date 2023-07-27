TODO List Application
This simple web application is a classic "TODO List" application, where users can create a list of tasks, edit them, and delete them as needed. It's built using HTML, CSS, and JavaScript, and leverages localStorage for persisting the tasks data.

Key Features
Task Creation: Users can type a task into the input box and click the "Add" button to add it to the list. If the input box is empty when the "Add" button is clicked, an alert prompts the user to enter a task.

Task Editing: Each task has an "Edit" button represented by a Edit Icon. When clicked, the task becomes editable, and the user can change the task text directly. Clicking the "Edit" button again saves the changes and updates the task in the list and in local storage.

Task Deletion: Each task has a "Delete" button. When clicked, the task is removed from the list and deleted from local storage.

Persistent Data: The tasks are stored in the browser's local storage, so they persist across sessions. The tasks are loaded from local storage when the page is loaded, and any changes to the tasks (creation, updates, deletion) are saved to local storage immediately.
