var pessoa = {
    nome: 'lucas',
    idade: 13,
    saudacao: function () {
        console.log('ola meu nome é' + ' ' + this.nome + ' ' + 'minha idade é ' + ' ' + this.idade )
    }
}

var pessoas2 = {
    nome: {
        primeiro: 'pedro',
    }
}

console.log(pessoa.saudacao())

console.log(pessoas2.nome.primeiro)

console.log(pessoa['nome'])

console.log(pessoa['idade'] + ' ' + pessoa['saudacao'])


pessoa.idade = 15

pessoa.olhos = 'castanhos'

console.log(pessoa.olhos)

console.log(pessoa.idade)