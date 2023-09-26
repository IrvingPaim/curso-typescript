// 1 - void

const withoutReturn = (): void => {
    console.log('Esta função não tem retorno')
    //return 1
}

withoutReturn()

// 2 - Callback como argumento

const greeting = (name: string): string => {
    return `Olá, ${name}`
}    

const preGreeting = (f: (name: string) => string, userName: string) => {
    console.log('Preparando a função!')

    const greet = f(userName)

    console.log(greet)
}

preGreeting(greeting, 'Irving')
preGreeting(greeting, 'Leila')