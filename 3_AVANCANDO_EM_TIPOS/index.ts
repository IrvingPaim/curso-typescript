// 1 - arrays

let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

let family: string[] = ["Irving", "Leila"]

family.push("Heitor")

console.log(`${family[2]} nasceu do fruto do amor entre ${family[0]} e ${family[1]}`)

// 2 - Outra Sintaxe de Array

const numbs: Array<number> = [100, 200]

numbs.push(300)

console.log(numbs)

console.log(numbs[2])

// 3 - any

const array: any = [1, "teste", true, [], {name: 'Irving'}]

console.log(array)

array.push([1, 2, 3])

console.log(array)

// 4 - Parâmetros Tipados

function soma (a: number, b: number) {
    console.log(a + b)
}

soma(5, 5)

const sum = (n1: number, n2: number) => console.log(n1 - n2)

sum(10, 2)

// 5 - Retorno da função

const greeting = (name: string): string => `Olá, ${name}`

console.log(greeting('Irving'))

// 6 - Funções Anônimas

setTimeout(() => {
    console.log('Executando função anônima depois de 2 segundos')
}, 2000)

setTimeout(function () {
    const sallary: number = 1000

    console.log(sallary)
}, 3000)

// 7 - Tipos de Objetos

const passCoordinates = (coord: {x: number, y: number}) => {
    console.log("X coordinates: " + coord.x)
    console.log("Y coordinates: " + coord.y)
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)

const pessoaObj: {name: string, lastName: string} = {name: "Irving", lastName: "Paim"}

console.log(pessoaObj)

// 8 - Propriedades Opcionais

const showNumbers = (a: number, b: number, c?: number) => {
    console.log("A: " + a)
    console.log("B: " + b)
    c ? console.log("C: " + c) : ""
}

showNumbers(1, 2, 3)
showNumbers(4, 5)

// 9 - Validação de props opcionais

const advancedGreeting = (firstName: string, lastNome?: string) => {

    lastNome !== undefined 
    ? console.log(`Olá, ${firstName} ${lastNome}, tudor bem?`) 
    : console.log(`Olá, ${firstName}, tudor bem?`)

}

advancedGreeting("Irving")

// 10 - Union Types

const showBalance = (balance: string | number) => {
    console.log(`O saldo da conta é R$ ${balance}`)
}

showBalance(100)
showBalance('500')

const arr2: Array<number | string | boolean> = [1, "Irving", true]

// 11 - Avançando com Union Types

const showUserRole = (role: boolean | string) => {
    if (typeof role === "boolean") {
        return "Usuário não aprovado"
    }

    return `A função do usuário é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Irving Paim"))

// 12- Type Alias
type ID = string | number

const showId = (id: ID) => {
    console.log(`O ID é: ${id}`)
}

showId(1)
showId("200")

// 13 - Introdução a Interfaces

interface Point {
    x: number
    y: number
    z: number
}

const showCoords = ({x, y, z}: Point) => {
    console.log(`X: ${x} Y: ${y} Z: ${z}`)
}

const coordObj: Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)

// 14 - Diferença Entre Type Alias e Interface

interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {
    name: "Irving",
    age: 39
}

console.log(somePerson)

type personType = {
    name: string
}

const somePersonType: personType = {
    name: "Irving Paim"
}

console.log(somePersonType)

// 15 - Literal Types

let test: "testando"

test = "testando"

console.log(test)

const showDirection = (direction: "left" | "rigth" | "center") => {
    console.log(`A direção é: ${direction}`)
}

showDirection("center")

// 16 - Non-null Assertion Operator

const p = document.getElementById('some-p')

console.log(p!.textContent)

const para = document.createElement('h2')
para.textContent = "Título de Exemplo"
para.insertAdjacentElement('afterend', p!)

console.log(para.textContent)

// 17 - Bigint

let n: bigint

n = 1000n

console.log(n)

console.log(typeof n)

console.log(n + 100n)

// 18 - Symbol

let symbolA: symbol = Symbol("a")
let symbolB: symbol = Symbol("a")

console.log(symbolA === symbolB)