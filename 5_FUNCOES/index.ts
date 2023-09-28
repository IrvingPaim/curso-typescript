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