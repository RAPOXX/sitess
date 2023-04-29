class Car {
    constructor(modelo,ano,cor) {
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
    }

    age() {
        let date = new Date()
        return date.getFullYear() - this.ano
    }

}

let car1 = new Car('mustang',2011,'prata')

console.log(car1.modelo)
console.log(car1.ano)

console.log(car1.age())