// 1 - generics

const showData = <T> (arg: T): string => {
    return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData('testando generic'))
console.log(showData(true))

// 2 - Constraint em Generics

const showProductName = <T extends {name: string}> ({name}: T) => {
    return `O nome do produto é: ${name}`
}

const myObj = {name: 'Irving Paim', age: 40}

console.log(showProductName(myObj))

// 3 - Interfaces com Generics

interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = {name: 'Fusca', wheels: 4, engine: 1.0, color: 'Red'}
const myPen: Pen = {name: 'Bic', wheels: false, engine: false, color: 'Black'}

console.log(myCar)
console.log(myPen)

