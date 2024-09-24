document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');

    // Función asíncrona para realizar peticiones HTTP
    async function fetchData(url, method = 'GET', options = {}) {
        try {
            const response = await fetch(url, { method, ...options });
            return await response.text();
        } catch (error) {
            return `Error: ${error.message}`;
        }
    }

    // 2. Realizar una Petición HTTP GET a https://jsonplaceholder.typicode.com/todos
    document.getElementById('getTodos').addEventListener('click', () => {
        fetchData('https://jsonplaceholder.typicode.com/todos')
            .then(data => {
                output.textContent = 'GET Todos:\n' + data;
                // Guardar la respuesta en un archivo (esto se hace en el servidor, no en el navegador)
                // Revisar el contenido de la respuesta e identificar los elementos más comunes
            });
    });
});