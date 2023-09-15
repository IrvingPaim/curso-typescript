"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
let family = ["Irving", "Leila"];
family.push("Heitor");
console.log(`${family[2]} nasceu do fruto do amor entre ${family[0]} e ${family[1]}`);
// 2 - Outra Sintaxe de Array
const numbs = [100, 200];
numbs.push(300);
console.log(numbs);
console.log(numbs[2]);
// 3 - any
const array = [1, "teste", true, [], { name: 'Irving' }];
console.log(array);
array.push([1, 2, 3]);
console.log(array);
// 4 - Parâmetros Tipados
function soma(a, b) {
    console.log(a + b);
}
soma(5, 5);
const sum = (n1, n2) => console.log(n1 - n2);
sum(10, 2);
// 5 - Retorno da função
const greeting = (name) => `Olá, ${name}`;
console.log(greeting('Irving'));
// 6 - Funções Anônimas
setTimeout(() => {
    console.log('Executando função anônima depois de 2 segundos');
}, 2000);
setTimeout(function () {
    const sallary = 1000;
    console.log(sallary);
}, 3000);
// 7 - Tipos de Objetos
const passCoordinates = (coord) => {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
};
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
const pessoaObj = { name: "Irving", lastName: "Paim" };
console.log(pessoaObj);
// 8 - Propriedades Opcionais
const showNumbers = (a, b, c) => {
    console.log("A: " + a);
    console.log("B: " + b);
    c ? console.log("C: " + c) : "";
};
showNumbers(1, 2, 3);
showNumbers(4, 5);
// 9 - Validação de props opcionais
const advancedGreeting = (firstName, lastNome) => {
    lastNome !== undefined
        ? console.log(`Olá, ${firstName} ${lastNome}, tudor bem?`)
        : console.log(`Olá, ${firstName}, tudor bem?`);
};
advancedGreeting("Irving");
// 10 - Union Types
const showBalance = (balance) => {
    console.log(`O saldo da conta é R$ ${balance}`);
};
showBalance(100);
showBalance('500');
const arr2 = [1, "Irving", true];
// 11 - Avançando com Union Types
const showUserRole = (role) => {
    if (typeof role === "boolean") {
        return "Usuário não aprovado";
    }
    return `A função do usuário é: ${role}`;
};
console.log(showUserRole(false));
console.log(showUserRole("Irving Paim"));
const showId = (id) => {
    console.log(`O ID é: ${id}`);
};
showId(1);
showId("200");
const showCoords = ({ x, y, z }) => {
    console.log(`X: ${x} Y: ${y} Z: ${z}`);
};
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = {
    name: "Irving",
    age: 39
};
console.log(somePerson);
const somePersonType = {
    name: "Irving Paim"
};
console.log(somePersonType);
// 15 - Literal Types
let test;
test = "testando";
console.log(test);
const showDirection = (direction) => {
    console.log(`A direção é: ${direction}`);
};
showDirection("center");
// 16 - Non-null Assertion Operator
const p = document.getElementById('some-p');
console.log(p.textContent);
const para = document.createElement('h2');
para.textContent = "Título de Exemplo";
para.insertAdjacentElement('afterend', p);
console.log(para.textContent);
