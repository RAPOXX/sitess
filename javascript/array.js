
//metodos de criar arrays

// var cor = new Array()

// var cor = []



var cor = [] // cria um array

cor.push('preto') // insere dados no array
cor.push('branco')  //insere dados no array
cor.push('vermelho') //insere dados no array 
cor.push('verde') // insere dados no array
cor.push('azul') //insere dados no array

//console.log(cor[0])  //retorna o item do indice informado
// console.log(cor[3]) //retorna o item do indice informado

cor[6] = 'amarelo' // adiciona o valor ao indice informado  



var items = ['faca','pederneira','corda','lanterna','luvas','chave','arame'] //cria um array chamado items

var mochila = [] //cria um array chamado mochila

mochila.push(items[2]) 

for(itens in items) {
    console.log(items[itens])
}