//fazem parte do desevolvimento de software
//e assincrona nao sera executada 
//na maioria das vezes e passada como argumetno de uma outra funçao

function somar(y,x,callback) {
    result =  y + x
    return result
}

function aviso() {
    console.log('soma efetuada com sucesso')
}

somar(15,15,aviso())
