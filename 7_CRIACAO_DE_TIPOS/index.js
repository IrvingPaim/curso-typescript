"use strict";
// 1 - generics
const showData = (arg) => {
    return `O dado é: ${arg}`;
};
console.log(showData(5));
console.log(showData('testando generic'));
console.log(showData(true));
// 2 - Constraint em Generics
const showProductName = ({ name }) => {
    return `O nome do produto é: ${name}`;
};
const myObj = { name: 'Irving Paim', age: 40 };
console.log(showProductName(myObj));
const myCar = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'Red' };
const myPen = { name: 'Bic', wheels: false, engine: false, color: 'Black' };
console.log(myCar);
console.log(myPen);
// 4 - Type Parameters
const getSomeKey = (obj, key) => {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`;
};
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
const showCharName = (obj, key) => {
    return `${obj[key]}`;
};
const myChar = {
    name: 'Irving Paim',
    age: 40,
    hasDriveLicense: true
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
console.log(showCharName(myChar, 'hasDriveLicense'));
// 6 - typeof type operator
const userName = "Irving Paim";
const userName2 = "Leila e Heitor Paim";
console.log(userName);
console.log(userName2);
const userName4 = "Leila Paim";
console.log(userName4);
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga'
};
const showKm = (km) => {
    console.log(`O veículo tem a km de: ${km}`);
};
showKm(newTruck.km);
const someVar = 5;
const testing = 'some text';
