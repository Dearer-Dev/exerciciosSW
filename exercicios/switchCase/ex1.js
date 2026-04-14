//descobir que dia é hoje

function swt() {
    
var agora = new Date()
var diaS = agora.getDay()

switch(diaS) {
    case 0:
        return(`Hoje é Ddomingo`)
    case 1:
        return(`Hoje é segunda-feira`)
    case 2:
        return(`Hoje é terça-feira`)
    case 3:
        return(`Hoje é quarta-feira`)
    case 4:
        return(`Hoje é quinta-feira`)
    case 5:
        return(`Hoje é sexta-feira`)
    case 6:
        return(`Hoje é sábado`)
    break
    default:
        return(`[ERRO] Dia inválido.`)    
}
}

export {swt}

//SwitchCase