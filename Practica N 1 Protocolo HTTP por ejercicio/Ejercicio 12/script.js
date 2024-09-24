document.addEventListener('DOMContentLoaded', () => {
    const largeImage = document.getElementById('largeImage');
    const thumbnails = document.getElementById('thumbnails');

    const imageUrls = [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300?text=2',
        'https://via.placeholder.com/300?text=3',
        'https://via.placeholder.com/300?text=4'
    ];

    // Función para crear las miniaturas y agregar eventos de clic
    function createThumbnails() {
        imageUrls.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.addEventListener('click', () => {
                largeImage.src = url;
            });
            thumbnails.appendChild(img);
        });
    }

    // Inicializar la galería
    createThumbnails();
});