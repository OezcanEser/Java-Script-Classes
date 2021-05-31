class Person {
    constructor(namePara, agePara) {
        this.name = namePara
        this.age = agePara
    }
    info() {
        return `${this.name} is ${this.age} years old!`
    }
}

let emanuela = new Person("Emanuela", 18)

console.log(emanuela.info())