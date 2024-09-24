document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');

    // Función asíncrona para realizar peticiones HTTP
    async function fetchData(url, method = 'GET', options = {}) {
        try {
            const response = await fetch(url, { method, ...options });
            if (method === 'HEAD') {
                return response.headers;
            }
            return await response.text();
        } catch (error) {
            return `Error: ${error.message}`;
        }
    }

    // 5. Realizar una Petición HTTP HEAD a https://jsonplaceholder.typicode.com/todos/
    document.getElementById('headTodos').addEventListener('click', () => {
        fetchData('https://jsonplaceholder.typicode.com/todos/', 'HEAD')
            .then(headers => {
                output.textContent = 'HEAD Todos:\n' + JSON.stringify([...headers], null, 2);
                // Guardar la respuesta en un archivo (esto se hace en el servidor, no en el navegador)
                // Revisar el contenido de la respuesta e identificar lo sucedido
                // Comparar esta respuesta con la obtenida con los métodos GET. ¿Existe alguna diferencia?
            });
    });
});