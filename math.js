console.group('Cuadrado')


const ladoCuadrado = 5;

const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = Math.pow(ladoCuadrado, 2);

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: Math.pow(lado, 2),  
    }
}

console.table({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

console.groupEnd('Cuadrado')

console.group('Triangulo')

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

function calcularAlturaTrianguloIsosceles1(ladoA, ladoB, base) { // Primer punto de vista (mi punto de vista)
    if (ladoA == ladoB) {
        return Math.sqrt(Math.pow(ladoA, 2) - ((Math.pow(base, 2)) / 4));
    } else  {
        console.warn(`
        • Los argumentos definidos en la función como los lados no son iguales.
        • Para que esta función se ejecute correctamente los lados deben ser iguales.
        • ${ladoA} ≠ ${ladoB}`);
    }
}

function calcularAlturaTrianguloIsosceles2(ladoEquivalente, base) { // Segundo punto de vista (punto de vista del profesor)
    if (ladoEquivalente == base) {
        console.warn(`
        • Los argumentos definidos en la función como los lados y base son iguales.
        • Para que esta función se ejecute correctamente los lados equivalentes no deben ser iguales a la base.
        • ${ladoEquivalente} = ${base}`);
    } else {
        return Math.sqrt(Math.pow(ladoEquivalente, 2) - ((Math.pow(base, 2)) / 4));
    }
}

console.table({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
    semiperimetroHeron,
    areaTrianguloHeron
});

console.groupEnd('Triangulo')

console.group('Circulo')

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

console.table({
    radioCiruclo,
    diametroCirculo,
    circunferencia,
    areaCirculo
});

console.groupEnd('Circulo')