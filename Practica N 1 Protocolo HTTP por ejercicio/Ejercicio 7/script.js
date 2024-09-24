document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');

    // Función asíncrona para realizar peticiones HTTP
    async function fetchData(url, method = 'GET', options = {}) {
        try {
            const response = await fetch(url, { method, ...options });
            if (method === 'OPTIONS') {
                return response.headers;
            }
            return await response.text();
        } catch (error) {
            return `Error: ${error.message}`;
        }
    }

    // 7. Realizar una Petición HTTP OPTIONS a https://jsonplaceholder.typicode.com
    document.getElementById('optionsJson').addEventListener('click', () => {
        fetchData('https://jsonplaceholder.typicode.com', 'OPTIONS')
            .then(headers => {
                output.textContent = 'OPTIONS JSON:\n' + JSON.stringify([...headers], null, 2);
                // Guardar la respuesta en un archivo (esto se hace en el servidor, no en el navegador)
                // Revisar el contenido de la respuesta, que información nos dio la cabecera?
            });
    });

    // 7. Realizar una Petición HTTP OPTIONS a https://www.google.com
    document.getElementById('optionsGoogle').addEventListener('click', () => {
        fetchData('https://www.google.com', 'OPTIONS')
            .then(headers => {
                output.textContent = 'OPTIONS Google:\n' + JSON.stringify([...headers], null, 2);
                // Guardar la respuesta en un archivo (esto se hace en el servidor, no en el navegador)
                // Revisar el contenido de la respuesta, que información nos dio la cabecera?
                // Si lo hacemos a www.google.com se encuentra alguna diferencia importante en la respuesta
            });
    });
});