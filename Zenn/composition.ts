class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    public sayHello() {
        return `I'm ${this.name}. I'm ${this.age} years old.`
    }
}

class Student {
    name: string
    age: number
    school: string

    constructor(person: Person, school: string) {
        this.name = person.name
        this.age = person.age
        this.school = school
    }

    public sayHello() {
        return `I'm ${this.name}. I'm ${this.age} years old and student at ${this.school}.`
    }
}

const mahito = new Person("Anai Mahito", 23)
const oita_mahito = new Student(mahito, "Oita University")
console.log(oita_mahito.sayHello())