document.addEventListener('DOMContentLoaded', () => {
    const addDataButton = document.getElementById('addData');
    const clearDataButton = document.getElementById('clearData');
    const sortAscButton = document.getElementById('sortAsc');
    const sortDescButton = document.getElementById('sortDesc');
    const newDataInput = document.getElementById('newData');
    const dataContainer = document.getElementById('dataContainer');

    let dataArray = [];

    // Función para añadir un nuevo dato
    function addData() {
        const newData = newDataInput.value.trim();
        if (newData) {
            dataArray.push(newData);
            const div = document.createElement('div');
            div.className = 'dataItem';
            div.textContent = `${dataArray.length - 1}: ${newData}`; // Mostrar el número y el dato en el div
            dataContainer.appendChild(div);
            newDataInput.value = '';
            updateButtons();
        } else {
            alert('Por favor, ingresa un dato válido.');
        }
    }

    // Función para borrar un dato
    function clearData() {
        if (dataContainer.firstChild) {
            dataContainer.removeChild(dataContainer.lastChild);
            dataArray.pop();
            updateButtons();
        } else {
            alert('No hay datos para borrar.');
        }
    }

    // Función para ordenar los datos de forma ascendente
    function sortAsc() {
        dataArray.sort((a, b) => a.localeCompare(b));
        updateDataContainer();
    }

    // Función para ordenar los datos de forma descendente
    function sortDesc() {
        dataArray.sort((a, b) => b.localeCompare(a));
        updateDataContainer();
    }

    // Función para actualizar el contenedor de datos
    function updateDataContainer() {
        dataContainer.innerHTML = '';
        dataArray.forEach((data, index) => {
            const div = document.createElement('div');
            div.className = 'dataItem';
            div.textContent = `${index}: ${data}`;
            dataContainer.appendChild(div);
        });
    }

    // Función para actualizar el estado de los botones de ordenamiento
    function updateButtons() {
        if (dataArray.length > 0) {
            sortAscButton.disabled = false;
            sortDescButton.disabled = false;
        } else {
            sortAscButton.disabled = true;
            sortDescButton.disabled = true;
        }
    }

    // Evento para añadir un nuevo dato
    addDataButton.addEventListener('click', addData);

    // Evento para borrar un dato
    clearDataButton.addEventListener('click', clearData);

    // Evento para ordenar de forma ascendente
    sortAscButton.addEventListener('click', sortAsc);

    // Evento para ordenar de forma descendente
    sortDescButton.addEventListener('click', sortDesc);
});