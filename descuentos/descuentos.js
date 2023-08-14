const formularioDescuentos = document.querySelector('#form');
const formularioDescuentosPorCupones = document.querySelector('#form2');
const formularioDescuentosPorCuponesOcultos = document.querySelector('#form3');
const formularioDescuentosPorCuponesOcultosObsYArr = document.querySelector('#form4');
const inputPrecioOriginal = document.querySelector('#inputPrecioOriginal');
const inputPorcentajeDescuento = document.querySelector('#inputPorcentajeDescuento');
const btnCalcular = document.querySelector('#btnCalcular');
const btnCalcular2 = document.querySelector('#btnCalcular2');
const btnCalcular3 = document.querySelector('#btnCalcular3');
const btnCalcular4 = document.querySelector('#btnCalcular4');
const inputVerano20 = document.querySelector('#verano20');
const inputOtono25 = document.querySelector('#otono25');
const inputInvierno30 = document.querySelector('#invierno30');
const inputSuscripcionPrecioOriginal = document.querySelector('#inputSuscripcionPrecioOriginal');
const inputSuscripcionPrecioOriginalCuponOculto = document.querySelector('#inputSuscripcionPrecioOriginalCuponOculto');
const inputNombreCupon = document.querySelector('#inputNombreCupon');
const inputSuscripcionPrecioOriginalCuponOcultoObsYArr = document.querySelector('#inputSuscripcionPrecioOriginalCuponOcultoObsYArr');
const inputNombreCuponObsYArr = document.querySelector('#inputNombreCuponObsYArr');


btnCalcular.addEventListener('click', calcularDescuentoArticulo)
btnCalcular2.addEventListener('click', calcularDescuentoArticuloPorCupones)
btnCalcular3.addEventListener('click', calcularDescuentoArticuloPorCuponesOcultos)
btnCalcular4.addEventListener('click', calcularDescuentoArticuloPorCuponesOcultosObsYArr)

function calcularPorcentaje(numero, porcentaje) {
    return ((numero * (100 - porcentaje)) / 100)
}

function calcularDescuentoArticulo() {
    const resultadoCalcularDescuentoArticuloHTML = document.createElement('div');
    const valorPrecio = inputPrecioOriginal.value;
    const valorPorcentaje = inputPorcentajeDescuento.value;
    formularioDescuentos.appendChild(resultadoCalcularDescuentoArticuloHTML);

    if (inputPrecioOriginal.value == 0 || inputPorcentajeDescuento.value == 0) {
        resultadoCalcularDescuentoArticuloHTML.innerText = `Debes añadir un valor superior a 0 en los campos para que la calculador funciones correctamente.`
    } else if (inputPorcentajeDescuento.value >= 100 ) {
        resultadoCalcularDescuentoArticuloHTML.innerText = `El porcentaje de descuento no puede superar el 99%.`
    } else {
        var resultadoCalcularDescuentoArticulo = calcularPorcentaje(valorPrecio, valorPorcentaje);  /* (inputPrecioOriginal.value * (100 - inputPorcentajeDescuento.value)) / 100 */

        resultadoCalcularDescuentoArticuloHTML.innerText = `El precio del artículo aplicándole el descuento será ${resultadoCalcularDescuentoArticulo}€.`
    }    
}

function calcularDescuentoArticuloPorCupones() {
    const valorSuscripción = inputSuscripcionPrecioOriginal.value
    const resultadoCalcularDescuentoArticuloPorCuponesHTML = document.createElement('div');
    formularioDescuentosPorCupones.appendChild(resultadoCalcularDescuentoArticuloPorCuponesHTML);
    var resultadoCalcularDescuentoArticuloPorCupones


    if (valorSuscripción == 0 || valorSuscripción <= 0) {
        resultadoCalcularDescuentoArticuloPorCuponesHTML.innerText = `¡El valor de tu suscripción no puede ser ni 0 ni negativo!`
        return;        
    } else {
        if (inputVerano20.checked) {
            resultadoCalcularDescuentoArticuloPorCupones = calcularPorcentaje(valorSuscripción, 20);
        } else if (inputOtono25.checked) {
            resultadoCalcularDescuentoArticuloPorCupones = calcularPorcentaje(valorSuscripción, 25);
        } else if (inputInvierno30.checked) {
            resultadoCalcularDescuentoArticuloPorCupones = calcularPorcentaje(valorSuscripción, 30);
        } else {
            resultadoCalcularDescuentoArticuloPorCuponesHTML.innerText = `¡Selecciona un cupón y calcula el descuento de tu suscripción!`
            return;
        }
    }

    resultadoCalcularDescuentoArticuloPorCuponesHTML.innerText = `El precio de la suscripción aplicándole el descuento será ${resultadoCalcularDescuentoArticuloPorCupones}€.`
}

function calcularDescuentoArticuloPorCuponesOcultos() {
    const valorSuscripciónCuponOculto = inputSuscripcionPrecioOriginalCuponOculto.value
    const resultadoCalcularDescuentoArticuloPorCuponesOcultosHTML = document.createElement('div');
    formularioDescuentosPorCuponesOcultos.appendChild(resultadoCalcularDescuentoArticuloPorCuponesOcultosHTML);
    var resultadoCalcularDescuentoArticuloPorCupones


    if (valorSuscripciónCuponOculto == 0 || valorSuscripciónCuponOculto <= 0) {
        resultadoCalcularDescuentoArticuloPorCuponesHTML.innerText = `¡El valor de tu suscripción no puede ser ni 0 ni negativo!`
        return;        
    } else {
        if (inputNombreCupon.value == "gonzaloGOD") {
            resultadoCalcularDescuentoArticuloPorCupones = calcularPorcentaje(valorSuscripciónCuponOculto, 50);
        } else if (inputNombreCupon.value == "noPainNoGain") {
            resultadoCalcularDescuentoArticuloPorCupones = calcularPorcentaje(valorSuscripciónCuponOculto, 75);
        } else if (inputNombreCupon.value == "improving") {
            resultadoCalcularDescuentoArticuloPorCupones = calcularPorcentaje(valorSuscripciónCuponOculto, 40);
        } else {
            resultadoCalcularDescuentoArticuloPorCuponesHTML.innerText = `¡¡¡CUPÓN NO VALIDO!!!`
            return;
        }
    }
    resultadoCalcularDescuentoArticuloPorCuponesOcultosHTML.innerText = `El precio de la suscripción aplicándole el cupón oculto será ${resultadoCalcularDescuentoArticuloPorCupones}€.`
}

class Coupon {
    constructor(nombre, descuento) {
        this.nombre = nombre,
        this.descuento = descuento
    }
}

const coupons = [];

coupons.push(new Coupon('soyGOD', 50), new Coupon('mySelfBetter', 60), new Coupon('iAmHim', 70), new Coupon('tuAbuela', 10))

function calcularDescuentoArticuloPorCuponesOcultosObsYArr() {
    const cuponValido = coupons.find(item => item.nombre == inputNombreCuponObsYArr.value)

    const valorSuscripciónCuponOcultoObsYArr = inputSuscripcionPrecioOriginalCuponOcultoObsYArr.value
    const resultadoCalcularDescuentoArticuloPorCuponesOcultosObsYArrHTML = document.createElement('div');
    formularioDescuentosPorCuponesOcultosObsYArr.appendChild(resultadoCalcularDescuentoArticuloPorCuponesOcultosObsYArrHTML);
    var resultadoCalcularDescuentoArticuloPorCuponesOcultosObsYArr

    if (valorSuscripciónCuponOcultoObsYArr == 0 || valorSuscripciónCuponOcultoObsYArr <= 0) {
        resultadoCalcularDescuentoArticuloPorCuponesOcultosObsYArrHTML.innerText = `¡El valor de tu suscripción no puede ser ni 0 ni negativo!`
        return;        
    } else {
        if (cuponValido !== undefined) {
            resultadoCalcularDescuentoArticuloPorCuponesOcultosObsYArr = calcularPorcentaje(valorSuscripciónCuponOcultoObsYArr, cuponValido.descuento)
        } else {
            resultadoCalcularDescuentoArticuloPorCuponesOcultosObsYArrHTML.innerText = `¡¡¡CUPÓN NO VALIDO!!!`
            return;
        }
    }

    resultadoCalcularDescuentoArticuloPorCuponesOcultosObsYArrHTML.innerText = `El precio de la suscripción aplicándole el cupón oculto será ${resultadoCalcularDescuentoArticuloPorCuponesOcultosObsYArr}€.`

}