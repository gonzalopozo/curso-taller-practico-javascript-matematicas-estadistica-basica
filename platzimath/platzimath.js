// Mi punto de vista

const numeros = []

function añadirNumerosArray(numero) {
    numeros.push(Number(numero));
}

function sumaValoresArray(array) {
    const resultadoSuma = array.reduce((acumulador, valorActual) => acumulador + valorActual); // Esto es lo mismo que esto === const resultadoSuma = array.reduce((a, b) => a + b);
    return resultadoSuma;
}

function calcularPromedio(sumaArray, array) {
    return (sumaArray / array.length);
}

// El punto de vista del profesor

function calcularPromedio2(lista) {
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}   

// --------------------------------

function esPar(array) {
    return !(array.length % 2);
}

function esImpar(array) {
    return array.length % 2;
}

function calcularMediana(array) {
    const arrayEsPar = esPar(array);
    const arrayOrdenado = array.sort((a, b) => a - b);

    if (arrayEsPar) {

        const indexPrimeraMitadArrayPar = (arrayOrdenado.length / 2) - 1;
        const indexSegundaMitadArrayPar = (arrayOrdenado.length / 2);
        
        const valorPrimeraMitadArrayPar = arrayOrdenado[indexPrimeraMitadArrayPar];
        const valorSegundaMitadArrayPar = arrayOrdenado[indexSegundaMitadArrayPar];

        const medianaListaPar = (valorPrimeraMitadArrayPar + valorSegundaMitadArrayPar) / 2;

        return medianaListaPar;
    } else {
        const indexMitadArrayImpar = Math.floor(arrayOrdenado.length / 2);
        const medianaListaImpar = arrayOrdenado[indexMitadArrayImpar];
        return medianaListaImpar;
    }
}