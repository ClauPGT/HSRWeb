document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const closeLightbox = document.getElementById('closeLightbox');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const contador = document.getElementById('contador');
    
    // Obtener todas las imágenes de la galería
    const galeriaImages = document.querySelectorAll('.card-galeria .card-img-top');
    const totalImagenes = galeriaImages.length;
    let currentIndex = 0;

    // Actualizar contador
    function actualizarContador() {
        contador.textContent = (currentIndex + 1) + ' / ' + totalImagenes;
    }

    // Abrir lightbox al hacer clic en una imagen
    galeriaImages.forEach((img, index) => {
        img.addEventListener('click', function() {
            currentIndex = index;
            lightboxImage.src = this.src;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            actualizarContador();
        });
    });

    // Cerrar lightbox
    closeLightbox.addEventListener('click', function() {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    });

    // Cerrar al hacer clic fuera de la imagen
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // Imagen anterior
    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + totalImagenes) % totalImagenes;
        lightboxImage.src = galeriaImages[currentIndex].src;
        actualizarContador();
    });

    // Imagen siguiente
    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % totalImagenes;
        lightboxImage.src = galeriaImages[currentIndex].src;
        actualizarContador();
    });

    // Navegación con teclado
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') {
                lightbox.style.display = 'none';
                document.body.style.overflow = '';
            } else if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + totalImagenes) % totalImagenes;
                lightboxImage.src = galeriaImages[currentIndex].src;
                actualizarContador();
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % totalImagenes;
                lightboxImage.src = galeriaImages[currentIndex].src;
                actualizarContador();
            }
        }
    });
});