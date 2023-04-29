class car {

    constructor (name, year){
        this.name = name
        this.year = year
    }

    age() {
        let date = new Date()
        return date.getFullYear() - this.year
    }

}

let car1 = new car('mustang',2012)

console.log(car1.year)
console.log(car1.age())
