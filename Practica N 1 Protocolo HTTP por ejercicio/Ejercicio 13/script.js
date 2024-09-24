document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');

    // Función asíncrona para obtener datos de la API
    async function fetchTasks() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const tasks = await response.json();
            return tasks;
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    }

    // Función para mostrar las tareas en la lista
    function displayTasks(tasks) {
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.title;
            li.className = task.completed ? 'completed' : 'pending';
            taskList.appendChild(li);
        });
    }

    // Obtener y mostrar las tareas
    fetchTasks().then(tasks => {
        if (tasks) {
            displayTasks(tasks);
        }
    });
});