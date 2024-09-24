document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addItemButton = document.getElementById('addItem');
    const removeItemButton = document.getElementById('removeItem');
    const itemList = document.getElementById('itemList');

    // Función para agregar un elemento a la lista
    function addItem() {
        const itemText = itemInput.value.trim();
        if (itemText) {
            const li = document.createElement('li');
            li.textContent = itemText;
            itemList.appendChild(li);
            itemInput.value = '';
        }
    }

    // Función para eliminar el último elemento de la lista
    function removeItem() {
        const items = itemList.getElementsByTagName('li');
        if (items.length > 0) {
            itemList.removeChild(items[items.length - 1]);
        }
    }

    // Evento para agregar un elemento
    addItemButton.addEventListener('click', addItem);

    // Evento para eliminar el último elemento
    removeItemButton.addEventListener('click', removeItem);

    // Evento para agregar un elemento al presionar Enter
    itemInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addItem();
        }
    });
});