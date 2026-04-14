const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const itemsLeft = document.getElementById('items-left');
const clearCompletedButton = document.getElementById('clear-completed');
const filters = document.querySelectorAll('.filter');

let todos = []; // Store todos in an array

// Function to update the list
function updateTodoList() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.classList.toggle('completed', todo.completed);
        li.innerHTML = `
            <span class="todo-text">${todo.text}</span>
            <button class="toggle-complete" onclick="toggleComplete(${index})">✔</button>
            <button class="delete" onclick="deleteTask(${index})">✘</button>
        `;
        todoList.appendChild(li);
    });
    itemsLeft.textContent = `${todos.filter(todo => !todo.completed).length} items left`;
}

// Add a new task
todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const newTodo = {
        text: todoInput.value,
        completed: false,
    };
    todos.push(newTodo);
    todoInput.value = '';
    updateTodoList();
});

// Toggle task completion
function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    updateTodoList();
}

// Delete task
function deleteTask(index) {
    todos.splice(index, 1);
    updateTodoList();
}

// Clear all tasks
clearCompletedButton.addEventListener('click', function () {
    todos = []; // Clear the entire todo list
    updateTodoList();
});

// Filter tasks
filters.forEach(filter => {
    filter.addEventListener('click', function () {
        filters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        
        const filterType = filter.getAttribute('data-filter');
        if (filterType === 'all') {
            updateTodoList();
        } else if (filterType === 'active') {
            updateTodoList();
            todos = todos.filter(todo => !todo.completed);
        } else if (filterType === 'completed') {
            updateTodoList();
            todos = todos.filter(todo => todo.completed);
        }
    });
});
