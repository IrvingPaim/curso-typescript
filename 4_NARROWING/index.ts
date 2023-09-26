// 1 - Type Guard

const sum = (a: number | string, b: number | string) => {

    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b))
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b)
    } else {
        console.log("Impossível realizar esta soma!")
    }

}

sum("4", "59")
sum(12, 42.3)
sum("5", 6)

// 2 - Checando se valor existe

const operations = (arr: number[], operation?: string | undefined) => {
    
    if (operation) {

        if (operation === "sum") {
            const sum = arr.reduce((acc, total) => acc + total, 0)
            console.log(sum)
        } else if (operation === "multiply") {
            const multiply = arr.reduce((acc, total) => acc * total, 1)
            console.log(multiply)
        }

    } else {
        console.log("Por favor, defina uma operação")
    }
}

operations([1, 2, 3])
operations([1, 2, 3], "sum")
operations([1, 2, 4], "multiply")

// 3 - Operador instanceof

class User {
    name

    constructor (name: string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super (name)
    }
}

const irving = new User("Irving")
const heitor = new SuperUser("Heitor")

console.log(irving)
console.log(heitor)

const userGreeting = (user: object) => {

    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, gostaria de ver os dados do sistema?`)
    } else if (user instanceof User) {
        console.log(`Olá ${user.name}`)
    }

}

userGreeting(irving)
userGreeting(heitor)