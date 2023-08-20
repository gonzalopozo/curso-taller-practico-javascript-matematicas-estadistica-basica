console.log(salarios);

function encontrarPersona(nombrePersona) {
    const personaEncontrada = salarios.find((persona) =>  persona.name == nombrePersona)

    if (personaEncontrada !== undefined) {
        return personaEncontrada;
    } else {
        return `No se puede encontrar a ${nombrePersona}`;
    }
}

console.warn('Usa la función encontrarPersona(), mandándole como argumento el nombre de la persona para saber donde trabajo y cuanto dinero gano en cada año de su vida laboral.');

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map((x) => x.salario);

    const medianaSalarios = PlatziMath.calcularMediana(salarios);

    // return `La mediana del salario de ${nombrePersona} es ${medianaSalarios}.`;

    return medianaSalarios;
}

console.warn('Usa la función medianaPorPersona(), mandándole como argumento el nombre de la persona para saber la mediana de sus sueldos durante su vida laboral.');

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
    
    const ultimoSalario = trabajos[trabajos.length - 1].salario;

    const nuevoSalario = (ultimoSalario * medianaPorcentajesCrecimiento) + ultimoSalario;

    console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento, nuevoSalario});

    return `La proyección de salario a futuro de ${nombrePersona} sera de ${nuevoSalario.toFixed(2)}€.`
}

console.warn('Usa la función proyeccionPorPersona(), mandándole como argumento el nombre de la persona para saber el sueldo esperado (proyección del sueldo según lo ganado durante los años anteriores) para el siguiente año de su vida laboral.');

const empresas = {}

for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }

        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

console.log({empresas});

function medianaEmpresaYear(nombre, year) {
    if (!empresas[nombre]) {
        console.warn(`La empresa ${nombre} no existe.`);
    } else if (!empresas[nombre][year]) {
        console.warn(`La empresa no pago salarios en el año ${year}.`);
    } else {
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}

console.warn('Usa la función medianaEmpresaYear(), mandándole como primer argumento el nombre de la empresa y como segundo argumento el año para saber la mediana de los sueldos de todos los trabajadores de esa empresa en un año concreto.');

function proyeccionPorEmpresa(nombre) {
    if (!empresas[nombre]) {
        console.warn(`La empresa ${nombre} no existe.`);
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresaYear(nombre, year);
        });
        console.log(listaMedianaYears);

        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;
            porcentajesCrecimiento.push(porcentajeCrecimiento);
        }

        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

        const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];

        const nuevaMediana = (ultimaMediana * medianaPorcentajesCrecimiento) + ultimaMediana;
    
        console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento, ultimaMediana});
    
        return `La proyección de salario a futuro de la empresa ${nombre} sera de ${nuevaMediana.toFixed(2)}€.`
    }
}

console.warn('Usa la función proyeccionPorEmpresa(), mandándole como argumento el nombre de la empresa para saber la mediana del sueldo esperado (proyección del sueldo según lo ganado durante los años anteriores) para el siguiente año.');

function medianaGeneral() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));

    const mediana = PlatziMath.calcularMediana(listaMedianas);

    return mediana;
}

console.warn('Usa la función medianaGeneral(), para saber la mediana de todos los sueldos.');

function medianaTop10() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));

    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);

    const cantidad = medianasOrdenadas.length / 10;
    const limite = medianasOrdenadas.length - cantidad;


// Mi punto de vista:
/*  const posicionBorrarArray = medianasOrdenadas.length - cantidad;

    for (let i = 0; i < posicionBorrarArray; i++) {  
        const element = medianasOrdenadas[i];
        medianasOrdenadas.shift(element) 
    }

*/

// El punto de vista del profesor:

    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);

    const medianaTop10 = PlatziMath.calcularMediana(top10)

    // return `La mediana del salario del 10% de trabajadores es ${medianaTop10}€.`;

    return medianaTop10;
}

console.warn('Usa la función medianaTop10(), para saber la mediana del sueldo del 10% de personas que ganas más dinero.');

function diferenciaGeneralTop10() {
    const medianGeneral2 = medianaGeneral();
    const medianaTop102 = medianaTop10();

    const valorDiferencia = medianaTop102 - medianGeneral2;

    return `La diferencia de salarios entre el 10% mayor y la media general es de ${valorDiferencia}€.`;
}

console.warn('Usa la función diferenciaGeneralTop10(), para saber la diferencia entre la mediana de todos los sueldos y la mediana del sueldo del 10% de personas que ganas más dinero.');