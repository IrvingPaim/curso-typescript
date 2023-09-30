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

