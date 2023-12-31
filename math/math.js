// console.group('Cuadrado')


const ladoCuadrado = 5;

const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = Math.pow(ladoCuadrado, 2);

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: Math.pow(lado, 2),  
    }
}

console.warn('Para calcular el perímetro y el área del cuadrado usé la función calcularCuadrado(), mandándole como argumento la distancia un lado del cuadrado.');

// console.table({
//     ladoCuadrado,
//     perimetroCuadrado,
//     areaCuadrado
// });

// console.groupEnd('Cuadrado')

// console.group('Triangulo')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;
const semiperimetroHeron = (ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase) / 2;
const areaTrianguloHeron = Math.floor(Math.sqrt(semiperimetroHeron * (semiperimetroHeron - ladoTriangulo1) * (semiperimetroHeron - ladoTriangulo2) * (semiperimetroHeron - ladoTrianguloBase)));

function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,  
    }
}

// function calcularAlturaTrianguloIsosceles1(ladoA, ladoB, base) { // Primer punto de vista (mi punto de vista)
//     if (ladoA == ladoB) {
//         return Math.sqrt(Math.pow(ladoA, 2) - ((Math.pow(base, 2)) / 4));
//     } else  {
//         console.warn(`
//         • Los argumentos definidos en la función como los lados no son iguales.
//         • Para que esta función se ejecute correctamente los lados deben ser iguales.
//         • ${ladoA} ≠ ${ladoB}`);
//     }
// }

function calcularAlturaTrianguloIsosceles(ladoEquivalente, base) { // Segundo punto de vista (punto de vista del profesor)
    if (ladoEquivalente == base) {
        console.warn(`
        • Los argumentos definidos en la función como los lados y base son iguales.
        • Para que esta función se ejecute correctamente los lados equivalentes no deben ser iguales a la base.
        • ${ladoEquivalente} = ${base}`);
    } else {
        return Math.sqrt(Math.pow(ladoEquivalente, 2) - ((Math.pow(base, 2)) / 4));
    }
}

function calcularAlturaCualquierTriangulo(ladoA, ladoB, base) {
    const superPerimetroFunción = (ladoA + ladoB + base) / 2;
    return (2 / base) * (Math.sqrt(superPerimetroFunción * (superPerimetroFunción - base) * (superPerimetroFunción - ladoA) * (superPerimetroFunción - ladoB)))
}

console.warn('Para calcular el perímetro y el área de un triángulo usé la función calcularTriangulo(), mandándole como primer argumento la distancia del primer lado, como segundo argumento la distancia del segundo lado, como tercer argumento la distancia de la base y como último argumento la altura del triángulo.');

console.warn('Para calcular la altura de un triángulo isósceles usé la función calcularAlturaTrianguloIsosceles(), mandándole como primer argumento la distancia (similar en este tipo de triángulo) de los uno de los dos lados equivalentes y como segundo argumento la distancia de la base.');

console.warn('Para calcular la altura de un triángulo el cual no es isósceles usé la función calcularAlturaCualquierTriangulo, mandándole como primer argumento la distancia del primer lado, como segundo argumento la distancia del segundo lado y por último argumento la distancia de la base.');

// console.table({
//     ladoTriangulo1,
//     ladoTriangulo2,
//     ladoTrianguloBase,
//     alturaTriangulo,
//     perimetroTriangulo,
//     areaTriangulo,
//     semiperimetroHeron,
//     areaTrianguloHeron
// });

// console.groupEnd('Triangulo')

// console.group('Circulo')

const radioCiruclo = 3;
const diametroCirculo = radioCiruclo * 2;

const circunferencia = diametroCirculo * Math.PI;
const areaCirculo = Math.pow(radioCiruclo, 2) * Math.PI;

function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,
    }
}

console.warn('Para calcular la circunferencia y el área de un círculo usé la función calcularCirculo(), mandándole como argumento el radio del círculo.');

// console.table({
//     radioCiruclo,
//     diametroCirculo,
//     circunferencia,
//     areaCirculo
// });

// console.groupEnd('Circulo')