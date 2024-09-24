
document.addEventListener('DOMContentLoaded', () => {
    const addDataButton = document.getElementById('addData');
    const clearDataButton = document.getElementById('clearData');
    const newDataInput = document.getElementById('newData');
    const dataContainer = document.getElementById('dataContainer');

    let dataArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        } else {
            alert('Por favor, ingresa un dato válido.');
        }
    }

    // Función para borrar un dato
    function clearData() {
        if (dataContainer.firstChild) {
            dataContainer.removeChild(dataContainer.lastChild);
            dataArray.pop();
        } else {
            alert('No hay datos para borrar.');
        }
    }

    // Evento para añadir un nuevo dato
    addDataButton.addEventListener('click', addData);

    // Evento para borrar un dato
    clearDataButton.addEventListener('click', clearData);
});