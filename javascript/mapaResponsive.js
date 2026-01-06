function resizeMap() {
    const img = document.getElementById('mapaImg');
    const map = document.getElementById('mapita');
    
    if (!img || !map) return;
    
    // Tamaño original de la imagen
    const originalWidth = 1920;
    
    // Tamaño actual de la imagen
    const currentWidth = img.clientWidth;
    
    // Factor de escala
    const scale = currentWidth / originalWidth;
    
    // Actualizar todas las áreas
    const areas = map.getElementsByTagName('area');
    
    for (let area of areas) {
        const originalCoords = area.getAttribute('data-coords');
        if (originalCoords) {
            const coords = originalCoords.split(',').map(coord => {
                return Math.round(parseInt(coord) * scale);
            });
            area.setAttribute('coords', coords.join(','));
        }
    }
}

// Ejecutar cuando la imagen cargue
document.getElementById('mapaImg').addEventListener('load', resizeMap);

// Ejecutar cuando cambie el tamaño de la ventana
window.addEventListener('resize', resizeMap);

// Ejecutar al cargar la página (por si la imagen ya está en caché)
document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('mapaImg');
    if (img.complete) {
        resizeMap();
    }
});