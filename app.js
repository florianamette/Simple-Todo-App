// Select important elements from the DOM
const todoInput = document.getElementById('todo-input'); // Input field where the user types the task
const addBtn = document.getElementById('add-btn'); // Button to add a new task
const todoList = document.getElementById('todo-list'); // The unordered list (<ul>) that holds all tasks

// Function to add a new task
const addTask = () => {
    // Get the text entered in the input field and remove unnecessary spaces
    const taskText = todoInput.value.trim();

    // Check if the input is empty
    if (taskText === '') {
        alert('Please enter a task.'); // Alert the user if no task is entered
        return; // Stop the function here if the input is empty
    }

    // Create a new <li> element to represent a single task
    const taskItem = document.createElement('li');
    taskItem.className = 'flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow'; // Tailwind classes for styling the task item

    // Create a <span> to hold the task text
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText; // Set the content of the span to the input text
    taskContent.className = 'ml-2'; // Add some margin to the left of the text

    // Create a <input> checkbox for marking tasks as complete
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox'; // Set the type of input to "checkbox"
    taskCheckbox.className = 'mr-2'; // Add some margin to the right of the checkbox

    // Add an event listener to the checkbox to handle completion
    taskCheckbox.addEventListener('change', () => {
        // Toggle Tailwind CSS classes:
        // - 'line-through' adds strikethrough text
        // - 'text-gray-500' changes the text color to gray
        taskContent.classList.toggle('line-through', taskCheckbox.checked);
        taskContent.classList.toggle('text-gray-500', taskCheckbox.checked);
    });

    // Create a <button> to delete the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete'; // Set the button's text
    deleteBtn.className = 'bg-red-500 hover:bg-red-600 text-white rounded-lg px-3 py-1'; // Tailwind classes for styling the delete button

    // Add an event listener to the delete button
    deleteBtn.addEventListener('click', () => {
        // Remove the entire <li> (task) when the delete button is clicked
        taskItem.remove();
    });

    // Append the checkbox, task text, and delete button to the task item (<li>)
    taskItem.appendChild(taskCheckbox); // Add the checkbox
    taskItem.appendChild(taskContent); // Add the task text
    taskItem.appendChild(deleteBtn); // Add the delete button

    // Append the complete task item to the list (<ul>)
    todoList.appendChild(taskItem);

    // Clear the input field to prepare for the next task
    todoInput.value = '';
};

// Event listener for the "Add" button
addBtn.addEventListener('click', addTask);

// Event listener for the "Enter" key
todoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // Check if the pressed key is "Enter"
        addTask(); // Call the addTask function
    }
});