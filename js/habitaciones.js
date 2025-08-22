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
            imagenesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        updateCarruselPosition();
    });

    function scrollToRoomCenter(roomId) {
        const room = document.getElementById(roomId);
        if (!room) return;

        const headerHeight = document.querySelector('.header').offsetHeight || 70;
        const windowHeight = window.innerHeight;
        const roomHeight = room.offsetHeight;
        
        const roomTop = room.offsetTop;
        const centerPosition = roomTop - (windowHeight - roomHeight) / 2 + headerHeight;
        
        window.scrollTo({
            top: Math.max(0, centerPosition),
            behavior: 'smooth'
        });
    }

    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href^="#room"]');
        if (link) {
            e.preventDefault();
            const roomId = link.getAttribute('href').substring(1);
            scrollToRoomCenter(roomId);
        }
    });

    function handleHashNavigation() {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#room')) {
            const roomId = hash.substring(1);
            setTimeout(() => {
                scrollToRoomCenter(roomId);
            }, 100);
        }
    }

    window.addEventListener('hashchange', handleHashNavigation);
    
    handleHashNavigation();

    window.scrollToRoom = scrollToRoomCenter;
});