const formularioCalculos = document.querySelector('#form')
const inputPrecioOriginal = document.querySelector('#inputPrecioOriginal');
const inputPorcentajeDescuento = document.querySelector('#inputPorcentajeDescuento');
const btnCalcular = document.querySelector('#btnCalcular')


btnCalcular.addEventListener('click', calcularDescuentoArticulo)

function calcularDescuentoArticulo() {
    const resultadoCalcularDescuentoArticuloHTML = document.createElement('p');
    formularioCalculos.appendChild(resultadoCalcularDescuentoArticuloHTML);

    if (inputPrecioOriginal.value == 0 || inputPorcentajeDescuento.value == 0) {
        resultadoCalcularDescuentoArticuloHTML.innerText = `Debes añadir un valor superior a 0 en los campos para que la calculador funciones correctamente.`
    } else if (inputPorcentajeDescuento.value >= 100 ) {
        resultadoCalcularDescuentoArticuloHTML.innerText = `El porcentaje de descuento no puede superar el 99%.`
    } else {
        var resultadoCalcularDescuentoArticulo = (inputPrecioOriginal.value * (100 - inputPorcentajeDescuento.value)) / 100

        resultadoCalcularDescuentoArticuloHTML.innerText = `El precio del artículo aplicándole el descuento será ${resultadoCalcularDescuentoArticulo}€.`
    }    
}
