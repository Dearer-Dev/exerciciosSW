//Imprimir todos os números divisíveis por 3 de 1 a 50 

function laco3() {

let numeros = []
    

for (let i = 0; i <= 50; i++){
    if (i % 3 === 0 ){
        numeros.push(i)
        console.log(i)
    }
}

return(numeros)
}

export {laco3}
//for