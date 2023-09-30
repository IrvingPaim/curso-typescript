"use strict";
// 1 - Tipo de Objetos para a Finção com Interface
const showProductDetails = ({ name, price, isAvailable }) => {
    console.log(`O nome do produto é ${name} e o seu preço é R$ ${price}`);
    isAvailable
        ? console.log('O produto está disponível')
        : console.log('O produto não está disponível');
};
showProductDetails({ name: 'Caneta', price: 100.00, isAvailable: false });
const biquini = {
    name: 'Biquini Fio Dental',
    price: 20.50,
    isAvailable: false
};
showProductDetails(biquini);
const showUserDetais = ({ email, role }) => {
    console.log(`O usuário tem o e-mail: ${email}`);
    role
        ? console.log(`A função do usuário é ${role}`)
        : console.log('Função do usuário indisponível');
};
const user = {
    email: 'irvingpaim@yahoo.com.br',
    role: 'Developer'
};
showUserDetais(user);
const car = {
    brand: 'Ford',
    wheels: 4
};
console.log(car);
car.brand = 'Ferrari';
console.log(car);
let coords = {
    x: 10
};
console.log(coords);
coords.y = 15;
console.log(coords);
coords.z = 20;
console.log(coords);
