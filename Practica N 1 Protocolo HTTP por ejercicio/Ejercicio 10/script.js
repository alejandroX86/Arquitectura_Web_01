document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const message = document.getElementById('message');

    // Función para validar el formulario
    function validateForm(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (name === '' || email === '' || password === '') {
            showMessage('error', 'Todos los campos son obligatorios.');
            return;
        }

        if (!validateEmail(email)) {
            showMessage('error', 'Por favor, introduce un email válido.');
            return;
        }

        // Simulación de envío del formulario
        setTimeout(() => {
            showMessage('success', 'Registro exitoso. ¡Bienvenido, ' + name + '!');
            form.reset();
        }, 1000);
    }

    // Función para validar el formato de email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Función para mostrar mensajes
    function showMessage(type, text) {
        message.className = type;
        message.textContent = text;
    }

    // Evento para validar el formulario al enviar
    form.addEventListener('submit', validateForm);
});