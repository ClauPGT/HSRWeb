function abrirPopup(nombre, elemento, via, descripcion, splashArt) {
  document.getElementById("nombre").textContent = nombre;
  document.getElementById("elemento").src = elemento;
  document.getElementById("via").textContent = via;
  document.getElementById("descripcion").textContent = descripcion;
  document.getElementById("splashart").src = splashArt;
  document.getElementById("popup").style.display = "block";
}

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}