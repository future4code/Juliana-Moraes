// 1. 

// O código inicializa a variável valor com o zero;
// o for soma ele mesmo + 1 a cada interação, enquanto i for menor que 5
// o resultado é igual a 10.

// 2.

// A) são impressos os valores maiores que 18, portanto [19, 21, 23, 25, 27, 30]
// B) Somente o for..of não seria suficiente, utilizei o indexOf para mostrar esse index;

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     console.log(lista.indexOf(numero))
// }

// 3.

// a)

// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for (let numero of arrayOriginal) {
// 		console.log(numero)	
// }

// b) 

// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for (let numero of arrayOriginal) {
// 		console.log(numero/10)	
// }

// c)

// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let novoArray = []
// for (let numero of arrayOriginal) {
		
//         if(numero % 2 === 0){

//             novoArray.push(numero)
//             console.log(novoArray)
//         }
// }


// d)
// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let novoArray = []
// for (let i = 0; i < arrayOriginal.length; i++) {

//     novoArray.push('O elemento do index' + [i] + 'é:' + arrayOriginal[i]);
// }
// console.log(novoArray)

// e)

// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maior = arrayOriginal[0];
// let menor = arrayOriginal[0];

// for (let i = 0; i < arrayOriginal.length; i++) {

//     if(maior < arrayOriginal[i]){
//         maior = arrayOriginal[i];
//     }else{
//         if(menor > arrayOriginal[i]){
//             menor = arrayOriginal[i];
//         }
//     } 
// }
// console.log("O maior valor é: " + maior)
// console.log("O menor valor é: " + menor)

let numero = prompt("Escolha um número.");
let chute;

console.log("Vamos Jogar!");


chute = prompt("Chute um número")

let tentativas =+ 1

while(chute != numero){
 

    if(numero > chute){
        console.log("Errou. O número escolhido é maior")
    }else{
        if(numero < chute){
            console.log("Errou. O número escolhido é menor")
        }else{
           if(numero == chute){
            console.log("Acertou! O número de tentativas foi: ")
           }
        }
    }
    
   
    chute = prompt("Chute um número") 
    tentativas =+ 1
    
}

console.log("Acertou! O número de tentativas foi: " + tentativas)








