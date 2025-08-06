


// Función cambio de imagenes para el carrusel
document.addEventListener('DOMContentLoaded', () => {
    const servicios = document.querySelectorAll('.servicio');
    let actual = 0;

    function mostrarServicio(idx) {
        servicios.forEach((serv, i) => {
            serv.classList.toggle('activo', i === idx);
        });
    }

    document.getElementById('prev').addEventListener('click', () => {
        actual = (actual - 1 + servicios.length) % servicios.length;
        mostrarServicio(actual);
    });

    document.getElementById('next').addEventListener('click', () => {
        actual = (actual + 1) % servicios.length;
        mostrarServicio(actual);
    });
});