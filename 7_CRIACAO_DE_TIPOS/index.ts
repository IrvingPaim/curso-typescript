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

// 4 - Type Parameters

const getSomeKey = <T, K extends keyof T> (obj: T, key: K) => {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))

// 5 - keyof type operator

type Character = {name: string, age: number, hasDriveLicense: boolean}

type C = keyof Character

const showCharName = (obj: Character, key: C): string => {
    return `${obj[key]}`
}

const myChar: Character = {
    name: 'Irving Paim',
    age: 40,
    hasDriveLicense: true
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))
console.log(showCharName(myChar, 'hasDriveLicense'))

// 6 - typeof type operator

const userName: string = "Irving Paim"

const userName2: typeof userName = "Leila e Heitor Paim"

console.log(userName)
console.log(userName2)

type x = typeof userName

const userName4: x = "Leila Paim"

console.log(userName4)

// 7 - indexed access types

type Truck = {km: number, kg: number, description: string}

type km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga'
}

const showKm = (km: km) => {
    console.log(`O veículo tem a km de: ${km}`)
}

showKm(newTruck.km)

// 8 - conditional expressions type

interface A {}

interface B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string

const someVar: myType = 5

type myTypeB = Teste extends {showNumber(): number} ? string : boolean

// 9 - template literals type

type testA = 'text'

type CustomType = `some ${testA}`

const testing: CustomType = 'some text'

 
