document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    let todos = [];

    // Función para agregar una tarea
    function addTodo(event) {
        event.preventDefault();
        const todoText = todoInput.value.trim();
        if (todoText) {
            todos.push({ text: todoText, completed: false });
            renderTodos();
            todoInput.value = '';
        }
    }

    // Función para renderizar las tareas
    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.className = todo.completed ? 'completed' : '';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.addEventListener('change', () => toggleTodo(index));

            const span = document.createElement('span');
            span.textContent = todo.text;

            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.className = 'edit';
            editButton.addEventListener('click', () => editTodo(index));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', () => deleteTodo(index));

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            todoList.appendChild(li);
        });
    }

    // Función para marcar una tarea como completada o no completada
    function toggleTodo(index) {
        todos[index].completed = !todos[index].completed;
        renderTodos();
    }

    // Función para editar una tarea
    function editTodo(index) {
        const newText = prompt('Editar tarea:', todos[index].text);
        if (newText && newText.trim()) {
            todos[index].text = newText.trim();
            renderTodos();
        }
    }

    // Función para eliminar una tarea
    function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodos();
    }

    // Evento para agregar una tarea
    todoForm.addEventListener('submit', addTodo);
});