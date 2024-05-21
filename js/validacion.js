let formulario = document.getElementsByName('formulario')[0];
let boton = document.getElementById('b1');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


//validar nombre
let validarNombre = function (e) {
    if (formulario.nombre.value == 0) {
        alert("Completa el campo nombre");
        e.preventDefault();
    }
}
//validar apellido
let validarApellido = function (e) {
    if (formulario.apellido.value == 0) {
        alert("Completa el campo apellido");
        e.preventDefault();
    }
}

//validar email
let validarEmail =function (e){
    if (formulario.email.value == 0) {
        alert("Completa el campo Email");
        e.preventDefault();
    } else {
        expresiones.correo.test(formulario.email.value);
        return validar;
    }
   
}

// validar telefono
let validarTel =function (e){
    if (formulario.telefono.value == 0) {
        alert("Completa el campo Telefono");
        e.preventDefault();
    } else {
        expresiones.telefono.test(formulario.telefono.value);
        return validar;
    }
   
}


//terminos y condiciones
let validarCheckbox = function (e) {
    if (formulario.terminos.checked == false) {
        alert("Acepta los términos y condiciones");
        e.preventDefault();
    }
};

//validar edad ------
let validarEdad = function(e) {
    let edad = formulario.edad.value;
    edad = validarEntero(edad);
    formulario.edad.value = edad;
    if (edad == "") {
        alert("Tiene que introducir un número entero en su edad.");
        formulario.edad.focus();
        e.preventDefault();
    } else {
        if (edad < 18) {
            alert("Debe ser mayor de 18 años.");
            formulario.edad.focus();
            e.preventDefault();
        }
    }
}

function validarEntero(valor) {
    valor = parseInt(valor);
    if (isNaN(valor)) {
        return "";
    } else {
        return valor;
    }
}
// -------- -------

//validar select
let validarPieza = function(e) {
    if (formulario.pieza.selectedIndex == 0) {
      alert("Debe seleccionar que pieza desea restaurar.");
      formulario.pieza.focus();
      e.preventDefault();
}
}

//validaciones
let validar = function (e) {
    validarNombre(e);
    validarApellido(e);
    validarCheckbox(e);
    validarEdad(e);
    validarPieza(e);
    validarEmail(e);
    validarTel(e);
}

formulario.addEventListener("submit", validar);
