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
