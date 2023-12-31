// Mi punto de vista

const PlatziMath = {};

const numeros = []

PlatziMath.añadirNumerosArray = function añadirNumerosArray(numero) {
    numeros.push(Number(numero));
}

PlatziMath.sumaValoresArray = function sumaValoresArray(array) {
    const resultadoSuma = array.reduce((acumulador, valorActual) => acumulador + valorActual); // Esto es lo mismo que esto === const resultadoSuma = array.reduce((a, b) => a + b);
    return resultadoSuma;
}

PlatziMath.calcularPromedio = function calcularPromedio(sumaArray, array) {
    return (sumaArray / array.length);
}

// El punto de vista del profesor

PlatziMath.calcularPromedio2 = function calcularPromedio2(lista) {
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}   

// --------------------------------

PlatziMath.esPar = function esPar(array) {
    return !(array.length % 2);
}

PlatziMath.esImpar = function esImpar(array) {
    return array.length % 2;
}

PlatziMath.calcularMediana = function calcularMediana(array) {
    const arrayEsPar = PlatziMath.esPar(array);
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

PlatziMath.ordenarLista = function ordenarLista(array) {
    const arrayOrdenado2 = array.sort((a, b) => a - b)

    return arrayOrdenado2;
}

// --------------------------------

PlatziMath.calcularModa = function calcularModa(array) {
    const arrayCount = {};

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (arrayCount[element]) {
        arrayCount[element] += 1;
        } else {
            arrayCount[element] = 1;
        }
    }

    const arrayLista = Object.entries(arrayCount);

    const arrayOrdenado = ordenarListaBidimensional(arrayLista, 1);

    const arrayOrdenadoMaxNumber = arrayOrdenado[arrayOrdenado.length - 1];
    const arrayOrdenadoMaxNumberAnterior = arrayOrdenado[arrayOrdenado.length - 2];

    // console.log({arrayCount, arrayLista, arrayOrdenado, arrayOrdenadoMaxNumber});


    if (arrayOrdenadoMaxNumber[1] === arrayOrdenadoMaxNumberAnterior[1]) {
        const moda = 'No hay moda';
        return moda;
    } else {
        const moda = arrayOrdenadoMaxNumber[0];
        console.log(`La moda del array es ${arrayOrdenadoMaxNumber[0]} que se repite ${arrayOrdenadoMaxNumber[1]} veces en el array .`);
        return moda;
    }
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[i] - nuevoValor[i];
    }

    const lista = listaDesordenada.sort(ordenarListaSort)
    return lista;
}