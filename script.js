function insert(numero) {
   var number = document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML = number + numero // inserir numeros na tela
}

function clean() {
    document.querySelector('#resultado').innerHTML = "" // apagar numeros da tela
}

function deletar() {
    var deletar1 = document.querySelector('#resultado').innerHTML                    // ".length" conta a quantia de strings
    document.querySelector('#resultado').innerHTML = deletar1.substring(0, deletar1.length -1) // apagar numeros na tela, 1 por 1
}
function calculo() {
    var resultado = document.querySelector('#resultado').innerHTML
    if (resultado) {
        document.querySelector('#resultado').innerHTML = eval(resultado)    // realizar calculos
    }
    else {
        document.querySelector('#resultado').innerHTML = 'Inválido' 
    }
}