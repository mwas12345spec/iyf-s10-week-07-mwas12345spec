const STORAGE_KEY = "todos";

// Helpers
function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromStorage(key, defaultValue = []) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
}

// Load + Save
function loadTodos() {
    return getFromStorage(STORAGE_KEY, []);
}

function saveTodos(todos) {
    saveToStorage(STORAGE_KEY, todos);
}

// Add Todo
function addTodo(text) {
    const todos = loadTodos();

    const newTodo = {
        id: Date.now(),
        text,
        completed: false,
        createdAt: new Date().toISOString()
    };

    todos.push(newTodo);
    saveTodos(todos);
    renderTodos();
}

function handleAdd() {
    const input = document.getElementById("todo-input");
    if (input.value.trim()) {
        addTodo(input.value);
        input.value = "";
    }
}

// Toggle
function toggleTodo(id) {
    const todos = loadTodos();

    const updated = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    saveTodos(updated);
    renderTodos();
}

// Delete
function deleteTodo(id) {
    const todos = loadTodos().filter(todo => todo.id !== id);
    saveTodos(todos);
    renderTodos();
}

// Render
function renderTodos() {
    const list = document.getElementById("todo-list");
    list.innerHTML = "";

    const spanClass = todo.completed ? "completed" : "";

li.innerHTML = `
    <span class="${spanClass}">${todo.text}</span>
    <div class="status-icons">
        <span class="status-icon complete">
            ${todo.completed ? "✔" : ""}
        </span>
        <span class="status-icon delete">
            ❌
        </span>
    </div>
`;
}

// Init
document.addEventListener("DOMContentLoaded", renderTodos);


function calculateOrderTotal(items) {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        total += item.price * item.quantity;
    }

    if (total > 100) {
        total = total * 0.9;
    }

    return total;
}

