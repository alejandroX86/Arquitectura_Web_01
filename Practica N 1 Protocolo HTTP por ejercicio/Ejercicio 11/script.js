document.addEventListener('DOMContentLoaded', () => {
    const countElement = document.getElementById('count');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    let count = 0;

    // Función para actualizar el contador en la página
    function updateCount() {
        countElement.textContent = count;
    }

    // Función para incrementar el contador
    function increment() {
        count++;
        updateCount();
    }

    // Función para decrementar el contador
    function decrement() {
        if (count > 0) {
            count--;
            updateCount();
        }
    }

    // Evento para incrementar el contador
    incrementButton.addEventListener('click', increment);

    // Evento para decrementar el contador
    decrementButton.addEventListener('click', decrement);
});