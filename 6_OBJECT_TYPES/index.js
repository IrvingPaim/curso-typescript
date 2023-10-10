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
const irving = {
    name: 'Irving',
    age: 40
};
console.log(irving);
const goku = {
    name: 'Goku',
    age: 30,
    superpowers: ['kamehameha', 'genki-dama']
};
console.log(goku);
console.log(goku.superpowers[1]);
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12
};
console.log(arnold);
console.log(`${arnold.name}, o exterminador do futuro, usou uma ${arnold.type} de calibre ${arnold.caliber} para matar o inimigo`);
// 7 - ReadonlyArray
let myArray = ['maça', 'laranja', 'banana'];
console.log(myArray);
myArray.forEach(item => console.log(`Fruta: ${item}`));
console.log(myArray);
myArray = myArray.map(item => `Fruta: ${item}`);
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
const anotherUser = ['Irving', 40];
console.log(anotherUser);
// 9 - Tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([10, 20]);
