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

    // 2. Realizar una Petición HTTP GET a https://info.cern.ch/hypertext/WWW/TheProject.html
    document.getElementById('getProject').addEventListener('click', () => {
        fetchData('https://info.cern.ch/hypertext/WWW/TheProject.html')
            .then(data => {
                output.textContent = 'GET Project:\n' + data;
                // Guardar la respuesta en un archivo (esto se hace en el servidor, no en el navegador)
                // Revisar el contenido de la respuesta e identificar lo sucedido
                // Comparar esta respuesta con la del punto 2. ¿Existe alguna diferencia?
            });
    });
});