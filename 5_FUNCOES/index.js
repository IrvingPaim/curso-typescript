"use strict";
// 1 - void
const withoutReturn = () => {
    console.log('Esta função não tem retorno');
    //return 1
};
withoutReturn();
// 2 - Callback como argumento
const greeting = (name) => {
    return `Olá, ${name}`;
};
const preGreeting = (f, userName) => {
    console.log('Preparando a função!');
    const greet = f(userName);
    console.log(greet);
};
preGreeting(greeting, 'Irving');
preGreeting(greeting, 'Leila');
