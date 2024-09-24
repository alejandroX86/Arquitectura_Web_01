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

    // Realizar una Petición HTTP POST a https://jsonplaceholder.typicode.com/posts
    document.getElementById('postPost').addEventListener('click', () => {
        fetchData('https://jsonplaceholder.typicode.com/posts', 'POST', {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })
        }).then(data => {
            output.textContent = 'POST Post:\n' + data;
            // Revisar el contenido de la respuesta e identificar lo sucedido
        });
    });
});