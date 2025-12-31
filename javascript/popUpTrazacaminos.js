function abrirPopupTrazacaminos(nombre, elemento, via, descripcion1, descripcion2, splashArt1, splashArt2) {
  document.getElementById("nombre-trazacaminos").textContent = nombre;
  document.getElementById("descripcion1-trazacaminos").textContent = descripcion1;
  document.getElementById("descripcion2-trazacaminos").textContent = descripcion2;
  
  // Inicializar carruseles sincronizados
  inicializarCarruselesSincronizados(
    ["elemento-carousel", "via-carousel", "splashart1-carousel", "splashart2-carousel"],
    [elemento, via, splashArt1, splashArt2]
  );
  
  document.getElementById("popup-trazacaminos").style.display = "block";
}

function inicializarCarruselesSincronizados(carouselIds, imagenes) {
  let indiceActual = 0;
  
  function mostrarImagenes() {
    carouselIds.forEach((carouselId, index) => {
      const carousel = document.getElementById(carouselId);
      const img = carousel.querySelector("img");
      img.src = imagenes[index][indiceActual];
    });
  }
  
  carouselIds.forEach(carouselId => {
    const carousel = document.getElementById(carouselId);
    const prevBtn = carousel.querySelector(".carousel-prev");
    const nextBtn = carousel.querySelector(".carousel-next");
    
    prevBtn.onclick = () => {
      indiceActual = (indiceActual - 1 + imagenes[0].length) % imagenes[0].length;
      mostrarImagenes();
    };
    
    nextBtn.onclick = () => {
      indiceActual = (indiceActual + 1) % imagenes[0].length;
      mostrarImagenes();
    };
  });
  
  mostrarImagenes();
}

function cerrarPopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}
