console.log(salarios);

function encontrarPersona(nombrePersona) {
    const personaEncontrada = salarios.find((persona) =>  persona.name == nombrePersona)

    if (personaEncontrada !== undefined) {
        return personaEncontrada;
    } else {
        return `No se puede encontrar a ${nombrePersona}`;
    }
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map((x) => x.salario);

    const medianaSalarios = PlatziMath.calcularMediana(salarios);

    return `La mediana del salario de ${nombrePersona} es ${medianaSalarios}.`;
}

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
    
    const ultimoSalario = trabajos[trabajos.length -1].salario;

    const nuevoSalario = (ultimoSalario * medianaPorcentajesCrecimiento) + ultimoSalario;

    console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento, nuevoSalario});

    return `La proyección de salario a futuro de ${nombrePersona} sera de ${nuevoSalario.toFixed(2)}€.`
}