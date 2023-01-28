// Alerta en boton Enviar de formulario contacto
const botonEnviar = document.querySelector('.botonenviar');
botonEnviar.addEventListener(onclick, alertaBotonEnviar());

function alertaBotonEnviar() {
    alert('Gracias por contactarse con nosotros!')
}