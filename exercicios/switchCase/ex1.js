//descobir que dia é hoje

function swt() {
    
var agora = new Date()
var diaS = agora.getDay()

switch(diaS) {
    case 0:
        return(`Hoje é Domingo `)
    case 1:
        return(`Hoje é Segunda`)
    case 2:
        return(`Hoje é Terça`)
    case 3:
        return(`Hoje é Quarta`)
    case 4:
        return(`Hoje é Quinta`)
    case 5:
        return(`Hoje é Sexta`)
    case 6:
        return(`Hoje é Sábado`)
    break
    default:
        return(`[ERRO] Dia inválido.`)    
}
}

export {swt}

//SwitchCase