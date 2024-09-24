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

    // 8. Realizar una Petición HTTP DELETE a algún elemento de https://jsonplaceholder.typicode.com/
    document.getElementById('deletePost').addEventListener('click', () => {
        fetchData('https://jsonplaceholder.typicode.com/posts/1', 'DELETE')
            .then(data => {
                output.textContent = 'DELETE Post:\n' + data;
                // Guardar la respuesta en un archivo (esto se hace en el servidor, no en el navegador)
                // Revisar el contenido de la respuesta e identificar los elementos más comunes
                // ¿Se obtuvo una respuesta exitosa?
            });
    });
});