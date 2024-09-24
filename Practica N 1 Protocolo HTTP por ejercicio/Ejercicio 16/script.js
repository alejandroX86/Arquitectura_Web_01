document.addEventListener('DOMContentLoaded', () => {
    const tableContainer = document.getElementById('tableContainer');

    // String de ejemplo
    const dataString = "Nombre,Edad,Ciudad\nJuan,25,Madrid\nAna,30,Barcelona\nLuis,22,Valencia";

    // Función para crear la tabla dinámica
    function createTableFromData(data) {
        const rows = data.split('\n');
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');

        rows.forEach((row, index) => {
            const cells = row.split(',');
            const tr = document.createElement('tr');

            cells.forEach(cell => {
                const element = index === 0 ? document.createElement('th') : document.createElement('td');
                element.textContent = cell;
                tr.appendChild(element);
            });

            tbody.appendChild(tr);
        });

        table.appendChild(tbody);
        tableContainer.appendChild(table);
    }

    // Crear la tabla dinámica
    createTableFromData(dataString);
});
