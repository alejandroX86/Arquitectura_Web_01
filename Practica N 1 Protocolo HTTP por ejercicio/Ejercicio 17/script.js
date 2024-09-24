document.addEventListener('DOMContentLoaded', () => {
    const tableContainer = document.getElementById('tableContainer');
    const filterSelect = document.getElementById('filter');

    let todos = [];
    let sortColumn = null;
    let sortOrder = 'asc';

    // Función para cargar los datos desde la API
    async function fetchTodos() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            todos = await response.json();
            createTable(todos);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    }

    // Función para crear la tabla dinámica
    function createTable(data) {
        tableContainer.innerHTML = '';
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        // Crear encabezados de la tabla
        const headers = ['ID', 'Título', 'Completado'];
        const tr = document.createElement('tr');
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            th.addEventListener('click', () => sortTable(header.toLowerCase()));
            tr.appendChild(th);
        });
        thead.appendChild(tr);
        table.appendChild(thead);

        // Crear filas de la tabla
        data.forEach(todo => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${todo.id}</td>
                <td>${todo.title}</td>
                <td>${todo.completed ? 'Sí' : 'No'}</td>
            `;
            tbody.appendChild(tr);
        });

        table.appendChild(tbody);
        tableContainer.appendChild(table);
    }

    // Función para filtrar la tabla
    function filterTable() {
        const filterValue = filterSelect.value;
        let filteredData = todos;

        if (filterValue === 'completed') {
            filteredData = todos.filter(todo => todo.completed);
        } else if (filterValue === 'notCompleted') {
            filteredData = todos.filter(todo => !todo.completed);
        }

        createTable(filteredData);
    }

    // Función para ordenar la tabla
    function sortTable(column) {
        if (sortColumn === column) {
            sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
            sortColumn = column;
            sortOrder = 'asc';
        }

        todos.sort((a, b) => {
            let valueA, valueB;

            if (column === 'id') {
                valueA = a.id;
                valueB = b.id;
            } else if (column === 'title') {
                valueA = a.title.toLowerCase();
                valueB = b.title.toLowerCase();
            } else if (column === 'completed') {
                valueA = a.completed ? 1 : 0;
                valueB = b.completed ? 1 : 0;
            }

            if (valueA < valueB) {
                return sortOrder === 'asc' ? -1 : 1;
            }
            if (valueA > valueB) {
                return sortOrder === 'asc' ? 1 : -1;
            }
            return 0;
        });

        createTable(todos);
    }

    // Cargar los datos y crear la tabla inicial
    fetchTodos();

    // Evento para filtrar la tabla
    filterSelect.addEventListener('change', filterTable);
});