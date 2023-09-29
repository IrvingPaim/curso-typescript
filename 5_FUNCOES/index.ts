// 1 - void

const withoutReturn = (): void => {
    console.log('Esta função não tem retorno')
    //return 1
}

withoutReturn()

// 2 - Callback como argumento

const greeting = (name: string): string => {
    return `Olá, ${name}`
}    

const preGreeting = (f: (name: string) => string, userName: string) => {
    console.log('Preparando a função!')

    const greet = f(userName)

    console.log(greet)
}

preGreeting(greeting, 'Irving')
preGreeting(greeting, 'Leila')

// 3 - Generic Functions

const firstElement = <T> (arr: T[]): T => {
    return arr[2]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(["Irving", "Leila", "Heitor"]))
console.log(firstElement([false, true, false]))
console.log(firstElement([false, "true", 1]))

console.log(typeof firstElement([1, 2, 3]))
console.log(typeof firstElement(["Irving", "Leila", "Heitor"]))
console.log(typeof firstElement([false, true, false]))
console.log(typeof firstElement([false, "true", 1]))

const mergeObject = <U, T> (obj1: U, obj2: T) => {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObject({name: "Irving", lastName: "Paim"}, {Age: 40, work: "Programmer"})

console.log(newObject)

// 4 - constraints nas generic functions

const biggestNumber = <T extends number | string> (a: T, b: T): T => {
    let biggest: T

    if (+a > +b) {
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(1, 2))
console.log(biggestNumber("12", "5"))

console.log(typeof biggestNumber(1, 2))
console.log(typeof biggestNumber("12", "5"))

// 5 - Definindo tipo de parâmetros

type merge = number | string

const mergeArrays = <T> (arr1: T[], arr2: T[]) => {
    return arr1.concat(arr2)
}

console.log(mergeArrays([1, 5, 7], [10, 15]))
console.log(mergeArrays <merge>([1, 5, 7], ["10", "15", "Irving"]))
console.log(mergeArrays <string | boolean>([true, false], ["10", "15", "Irving"]))

// 6 - Parâmetros Opcionais

const modernGreeting = (name: string, greet?: string) => {

    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`
    }

    return `Olá ${name}, tudo bem?`
    
}

console.log(modernGreeting("Irving"))
console.log(modernGreeting("Irving", "Dr."))

// 7 - Parâmetros Default

const somaDefault = (n1: number, n2 = 10): number => {
    return n1 + n2
}

console.log(somaDefault(14))
console.log(somaDefault(14, 16))

// 8 - O Tipo Unknown

const doSomething = (x: unknown) => {

    if (Array.isArray(x)) {
        console.log(x[0])
    } else if (typeof x === 'number') {
        console.log(`O ${x} é um número`)
    } else {
        console.log('X é outra coisa')
    }
}

doSomething([10, 20, 30])
doSomething(10)
doSomething("oi")

// 9 - O tipo Never

const showErrorMessage = (msg: string): never => {
    throw new Error(msg)
}

//showErrorMessage("Servidor caiu! Estamos trabalhando para retorno da normalidade!")

// 10 - Rest Operator??? - Parameter

const sumAll = (...n: number[]): number => {
    return n.reduce((acc, number) => acc + number , 0)
}

console.log(sumAll(1, 2, 3, 4, 5))

// 11 - Destructuring

const showProductdetails = ({ name, price}: { name: string, price: number }): string => {
    return `O nome do produto é ${name} e ele custa R$ ${price}`
}

const shirt = { name: "Camisa", price: 49.99}

console.log(showProductdetails(shirt))


