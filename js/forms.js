function showForm(){
    const form = document.getElementById('info-confidencial');
    const entregaTercero = document.getElementById('checkbox-entrega-terc');

    if(entregaTercero.checked){
        form.style.display = "inline-block";
    }else{
        form.style.display = "none";
    }
}

function activarBoton(){
    const botonEnviar = document.getElementById('boton-enviar');
    const entregaProp = document.getElementById('checkbox-entrega-prop');

    botonEnviar.disabled = !entregaProp.checked;
}

function desmarcar() {
    const checkbox1 = document.getElementById('checkbox-entrega-prop');
    const checkbox2 = document.getElementById('checkbox-entrega-terc');
    const form = document.getElementById('info-confidencial');

    if (checkbox1.checked && checkbox2.checked){
        checkbox2.checked = false;
        form.style.display = "none";
    }
}

function resetForm(){
    document.getElementById('formulario-producto').reset();
}

function validarForm1() {
    var usuario = document.getElementById("usuario");
    var clave = document.getElementById("clave");

    var mensajeUsuario = document.getElementById("mensaje-usuario");
    var mensajeClave = document.getElementById("mensaje-clave");
  
    if (usuario.value == "") {
        mensajeUsuario.innerHTML = "El campo Usuario es obligatorio*";
        usuario.focus();
        return false;
    } else {
      mensajeUsuario.innerHTML = "";
    }

    if (clave.value == "") {
        mensajeClave.innerHTML = "El campo Contraseña es obligatorio*";
        clave.focus();
        return false;
    } else {
        mensajeClave.innerHTML = "";
    }
    return true;
}

function validarForm2() {
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var usu = document.getElementById("usu");
    var email = document.getElementById("email");
    var pass = document.getElementById("pass");
    var tlf = document.getElementById("tlf");
    var empresa = document.getElementById("empresa");
    var fecha = document.getElementById("fecha");

    var mensajeNombre = document.getElementById("mensaje-nombre");
    var mensajeApellido = document.getElementById("mensaje-apellido");
    var mensajeUsu = document.getElementById("mensaje-usu");
    var mensajeEmail = document.getElementById("mensaje-email");
    var mensajePass = document.getElementById("mensaje-pass");
    var mensajeTlf = document.getElementById("mensaje-tlf");
    var mensajeEmpresa = document.getElementById("mensaje-empresa");
    var mensajeFecha = document.getElementById("mensaje-Fecha");
  
    if (nombre.value == "") {
        mensajeNombre.innerHTML = "El campo Nombre es obligatorio*";
        nombre.focus();
        return false;
    } else {
      mensajeNombre.innerHTML = "";
    }

    if (apellido.value == "") {
        mensajeApellido.innerHTML = "El campo Apellido es obligatorio*";
        apellido.focus();
        return false;
    } else {
        mensajeApellido.innerHTML = "";
    }
    if (usu.value == "") {
        mensajeUsu.innerHTML = "El campo Usuario es obligatorio*";
        usu.focus();
        return false;
    } else {
        mensajeUsu.innerHTML = "";
    }

    if (email.value == "") {
        mensajeEmail.innerHTML = "El campo Email es obligatorio*";
        email.focus();
        return false;
    } else {
        mensajeEmail.innerHTML = "";
    }
    if (pass.value == "") {
        mensajePass.innerHTML = "El campo Password es obligatorio*";
        pass.focus();
        return false;
    } else {
      mensajePass.innerHTML = "";
    }

    if (tlf.value == "") {
        mensajeTlf.innerHTML = "El campo Telefono es obligatorio*";
        tlf.focus();
        return false;
    } else {
        mensajeTlf.innerHTML = "";
    }
    if (empresa.value == "") {
        mensajeEmpresa.innerHTML = "El campo Empresa es obligatorio*";
        empresa.focus();
        return false;
    } else {
      mensajeEmpresa.innerHTML = "";
    }

    if (fecha.value == "") {
        mensajeFecha.innerHTML = "El campo Fecha es obligatorio*";
        fecha.focus();
        return false;
    } else {
        mensajeFecha.innerHTML = "";
    }
    return true;
}



function valFormCont() {
    const emailRegex = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    var email = document.getElementById('email').value;
    var numero = document.getElementById('tlf').value;
    if (!emailRegex.test(email)) {
        alert('El correo no es valido');
        return false;
    }

    if (numero.length !== 10) {
        //alert('no tiene longitud 10');
        return false;
    }

    for (let i = 0; i < numero.length; i++) {
        if (isNaN(numero[i])) {
           // alert('no son solo numeros');
            return false;
        }
    }
    enviarFormulario();
    setTimeout(() => {
        return true;
    },7000);
}

function enviarFormulario() {
    const botonEnvio = document.querySelector('input[type="submit"][form="formContacto"]');
  
    botonEnvio.disabled = true;

    botonEnvio.value = 'Enviando datos...';
  
    setTimeout(() => {
        this.form.submit();
      }, 7000);
  }