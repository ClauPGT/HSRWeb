function abrirPopup5(nombre, elemento, via, descripcion1, descripcion2, splashArt, conoDeLuz) {
  document.getElementById("nombre").textContent = nombre;
  document.getElementById("elemento").src = elemento;
  document.getElementById("via").src = via;
  document.getElementById("descripcion1").textContent = descripcion1;
  document.getElementById("descripcion2").textContent = descripcion2;
  document.getElementById("splashart").src = splashArt;
  document.getElementById("conoDeLuz").src = conoDeLuz;
  document.getElementById("popup").style.display = "block";
}

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}