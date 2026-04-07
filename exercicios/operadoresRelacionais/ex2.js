//Crie um programa que: Declare a velocidade de um carro, verifique se a velocidade é menor que 60 km/h, mostre no console o resultado da comparação

function opr2(vel) {

if (vel < 60){
    return(`A velocidade do seu carro é de ${vel}Km/h. Você está andando na velocidade da via, continue assim!`)
}else return(`A velocidade do seu carro é ${vel}Km/h. Você passou do limite da via, MULTADO!`)
}
export {opr2}
//Menor que (<)

