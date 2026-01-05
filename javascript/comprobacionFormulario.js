function validar(e){
  // e.preventDefault(); Método que bloquea el envío del formulario.
  limpiarErrores();
  let esValido = true;

  if (miform.inputNombre.value == ""){
    e.preventDefault();
    marcarError(miform.inputNombre, "El nombre es obligatorio");
    miform.inputNombre.focus();
    esValido = false;
  }

  if (miform.inputApellidos.value == ""){
    e.preventDefault();
    marcarError(miform.inputApellidos, "Los apellidos son obligatorios");
    miform.inputApellidos.focus();
    esValido = false;
  }

  if (miform.inputEmail.value == ""){
    e.preventDefault();
    marcarError(miform.inputEmail, "El email es obligatorio");
    miform.inputEmail.focus();
    esValido = false;
  }

  if (!miform.inputEmail.value.includes(".com") && !miform.inputEmail.value.includes(".es")){
    e.preventDefault();
    marcarError(miform.inputEmail, "Introduzca un email válido");
    miform.inputEmail.focus();
    esValido = false;
  }

  if (miform.inputTelefono.value == ""){
    e.preventDefault();
    marcarError(miform.inputTelefono, "El teléfono es obligatorio");
    miform.inputTelefono.focus();
    esValido = false;
  }

  if (miform.inputTelefono.value.length != 9){
    e.preventDefault();
    marcarError(miform.inputTelefono, "El teléfono debe tener 9 dígitos");
    miform.inputTelefono.focus();
    esValido = false;
  }

  if (miform.inputDireccion.value == ""){
    e.preventDefault();
    marcarError(miform.inputDireccion, "La dirección es obligatoria");
    miform.inputDireccion.focus();
    esValido = false;
  }

  if (miform.inputCiudad.value == ""){
    e.preventDefault();
    marcarError(miform.inputCiudad, "La ciudad es obligatoria");
    miform.inputCiudad.focus();
    esValido = false;
  }

  if (!miform.gridCheck.checked){
    e.preventDefault();
    marcarError(miform.gridCheck, "Debes aceptar la checkbox");
    miform.gridCheck.focus();
    esValido = false;
  }

  return esValido;
}

function marcarError(elemento, mensaje) {
  elemento.style.borderColor = 'red';
  elemento.style.borderWidth = '2px';
  
  let errorDiv = elemento.parentElement.querySelector('.error-mensaje');
  if (!errorDiv) {
    errorDiv = document.createElement('div');
    errorDiv.className = 'error-mensaje';
    errorDiv.style.color = 'red';
    errorDiv.style.fontSize = '12px';
    errorDiv.style.marginTop = '5px';
    elemento.parentElement.appendChild(errorDiv);
  }
  errorDiv.textContent = mensaje;
}

function limpiarErrores() {
  const form = document.getElementById('miform');
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.style.borderColor = '';
    input.style.borderWidth = '';
    const errorDiv = input.parentElement.querySelector('.error-mensaje');
    if (errorDiv) {
      errorDiv.remove();
    }
  });
}

function load(){
  miform.addEventListener("submit", validar);
}
document.addEventListener("DOMContentLoaded", load, false);
