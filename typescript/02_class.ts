class Dog {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    bark() {
        console.log(`${this.name}, age is ${this.age} bark!`)
    }
}

const black = new Dog('black', 1)
const white = new Dog('white', 2)

black.bark()
white.bark()