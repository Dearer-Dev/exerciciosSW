
function laco5() {
    

const pessoas = [
    { nome: "Ana ", idade: 20 },{ nome: " Carlos", idade: 25 },{ nome: " Beatriz", idade: 18 }];

const nomes = pessoas.map (function(pessoa){
    return pessoa.nome
} )

return nomes
}

export {laco5}