// promisses sao como promessas da vida real, ela esta esperando algum retorno
//para criar uma promessa instaciamos a classe Promisse
// que leva dois argumentos resolve(soluçao) e reject(erro)
//para encadear mais processos utilizamos o metodo then
//alguns recursos de js(FETCH API) e bibliotecas retornam PRomisses

const mypromise = new Promise((resolve,reject) => {
    const nome = 'nomes'


    if(nome == 'nome') {
        resolve('nome encontrado')
    }else {
        reject('nome nao encontrado')
    }

})

mypromise.then((data) =>{
    console.log(data)
})
