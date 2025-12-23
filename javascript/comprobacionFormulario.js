function validar(e){
  // e.preventDefault(); Método que bloquea el envío del formulario.
  if (miform.inputNombre.value == ""){
    e.preventDefault(); //Solo se valida que no esté vacío
    miform.inputNombre.focus();
    alert("El nombre es obligatorio");
    return false;
  }

  if (miform.inputApellidos.value == ""){
    e.preventDefault(); //Solo se valida que no esté vacío
    miform.inputApellidos.focus();
    alert("Los apellidos son obligatorios");

    return false;
  }

  if (miform.inputEmail.value == ""){
    e.preventDefault(); //Solo se valida que no esté vacío
    miform.inputEmail.focus();
    alert("El email es obligatorio");
    return false;
  }

  if (!miform.inputEmail.value.includes(".com", ".es")){
    e.preventDefault();
    miform.inputEmail.focus();
    alert("Introduzca un email válido");
    return false;
  }

  if (miform.inputTelefono.value == ""){
    e.preventDefault(); //Solo se valida que no esté vacío
    miform.inputTelefono.focus();
    alert("El teléfono es obligatorio");
    return false;
  }

  if (miform.inputTelefono.value.length != 9){
    e.preventDefault();
    miform.inputTelefono.focus();
    alert("El teléfono debe tener 9 dígitos");
    return false;
  }

  if (miform.inputDireccion.value == ""){
    e.preventDefault(); //Solo se valida que no esté vacío
    miform.inputDireccion.focus();
    alert("La dirección es obligatoria");
    return false;
  }

  if (miform.inputCiudad.value == ""){
    e.preventDefault(); //Solo se valida que no esté vacío
    miform.inputCiudad.focus();
    alert("La ciudad es obligatoria");
    return false;
  }

  if (!miform.gridCheck.checked){
    e.preventDefault(); //Comprueba que esté marcado el checkbox
    miform.inputCity.focus();
    alert("Debes aceptar la checkbox");
    return false;
  }
  return true;
}

function load(){
  miform.addEventListener("submit", validar);
}
document.addEventListener("DOMContentLoaded", load, false);
