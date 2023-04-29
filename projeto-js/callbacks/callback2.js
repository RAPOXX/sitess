const usuario = 'lucas'
const senha = 12345


const mypromisse = new Promise((reject,resolve) => {
    if(usuario == 'lucas'&& senha == 12345) {
        resolve('usuario logado com sucesso')
    }else {
        reject('usuario nao logado')
    }
})


mypromisse.then((data) => {
    console.log(data)
})