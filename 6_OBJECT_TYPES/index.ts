// 1 - Tipo de Objetos para a Finção com Interface

interface Product {
    name: string,
    price: number,
    isAvailable: boolean
}

const showProductDetails = ({name, price, isAvailable}: Product) => {
    console.log(`O nome do produto é ${name} e o seu preço é R$ ${price}`)

    isAvailable 
    ? console.log('O produto está disponível') 
    : console.log('O produto não está disponível')

}

showProductDetails({name: 'Caneta', price: 100.00, isAvailable: false})

const biquini: Product = {
    name: 'Biquini Fio Dental',
    price: 20.50,
    isAvailable: false
}

showProductDetails(biquini)

// 2 - Propriedades Opcionais em Interface

interface User {
    email: string,
    role?: string
}

const showUserDetais = ({email, role}: User) =>  {
    console.log(`O usuário tem o e-mail: ${email}`)

    role 
    ? console.log(`A função do usuário é ${role}`) 
    : console.log('Função do usuário indisponível')

}

const user: User = {
    email: 'irvingpaim@yahoo.com.br',
    role: 'Developer'
}

showUserDetais(user)

// 3 - Propriedades readonly

interface Car {
    brand: string,
    readonly wheels: number
}

const car: Car = {
    brand: 'Ford',
    wheels: 4
}

console.log(car)

car.brand = 'Ferrari'

console.log(car)

// 4 - Index Signature

interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

console.log(coords)

coords.y = 15

console.log(coords)

coords.z = 20

console.log(coords)

// 5 - Extending Interfaces

interface Human {
    name: string,
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const irving: Human = {
    name: 'Irving',
    age: 40
}

console.log(irving)

const goku: SuperHuman = {
    name: 'Goku',
    age: 30,
    superpowers: ['kamehameha', 'genki-dama']
}

console.log(goku)

console.log(goku.superpowers[1])

// 6 - Intersection Types

interface Character {
    name: string
}

interface Gun {
    type: string,
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12
}

console.log(arnold)

console.log(`${arnold.name}, o exterminador do futuro, usou uma ${arnold.type} de calibre ${arnold.caliber} para matar o inimigo`)

// 7 - ReadonlyArray

let myArray: ReadonlyArray<string> = ['maça', 'laranja', 'banana']

console.log(myArray)

myArray.forEach(item => console.log(`Fruta: ${item}`))

console.log(myArray)

myArray = myArray.map(item => `Fruta: ${item}`)

console.log(myArray)

// 8 - Tuplas

type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ['Irving', 40]

console.log(anotherUser)

// 9 - Tuplas com readonly

function showNumbers (numbers: readonly [number, number]) {
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([10, 20])



