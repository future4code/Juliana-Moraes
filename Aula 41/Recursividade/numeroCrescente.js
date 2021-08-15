// Escreva uma função recursiva que:
// a. Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente
// b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente



const numeroCrescente = (n) => {

    if( n >= 0) {
        numeroCrescente(n - 1)
        console.log(n)
    }    
}

console.log(numeroCrescente(100))