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
