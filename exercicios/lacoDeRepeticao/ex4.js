function laco4() {
    const numeros = [2, 4, 8, 6, 10]
    let textoFinal = "" // Começamos com um texto vazio

    numeros.forEach(function(n) {
        // Para cada número, grudamos uma linha nova no texto
        textoFinal += `Número: ${n} e sua Metade: ${n / 2}, `
    })

    return textoFinal // Retorna "Número: 2 => Metade: 1 <br> Número: 4..."
}

export { laco4 }

//foreach