document.addEventListener('DOMContentLoaded', function() {
    const carruseles = document.querySelectorAll('.room-carrusel');
    
    carruseles.forEach(carrusel => {
        const imagenesContainer = carrusel.querySelector('.carrusel-imagenes');
        const prevBtn = carrusel.querySelector('.carrusel-navprev-btn');
        const nextBtn = carrusel.querySelector('.carrusel-navnext-btn');
        
        let currentIndex = 0;
        const totalImagenes = imagenesContainer.children.length;
        
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImagenes - 1;
            updateCarruselPosition();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex < totalImagenes - 1) ? currentIndex + 1 : 0;
            updateCarruselPosition();
        });

        function updateCarruselPosition() {
            const imagenWidth = imagenesContainer.children[0].clientWidth;
            const newTransformValue = -currentIndex * imagenWidth;
            imagenesContainer.style.transform = `translateX(${newTransformValue}px)`;
        }
    });
});