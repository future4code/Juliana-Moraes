// 1. --------------------------------------------
// a) 10 / 50
// mesmo retirando o console.log o console mostra o resultado da função

// 2. ------------------------------------------------
// a) Darvas Caio
// b) Amanda Caio

// 3.---------------------------------------------------
// A função recebe um array como parametro, verifica se o número é par fazendo uma divisão, após isso multiplica por ele mesmo e adiciona ao novo array (arrayFinal). No final da função exibi o array no console.



// 4.----------------------------------------------

// sobreMim();


// function sobreMim(){
//     alert('"Eu sou Juliana, tenho 33 anos, moro no Rio de Janeiro e atuamente sou estudante de front-end"');
// }



// let nome = prompt('Qual o seu nome?')
// let idade = Number(prompt('Qual a sua idade?'))
// let cidade = prompt('Qual a sua cidade?')
// let estudante = confirm('Você é estudante?')

// fraseSobreMim(nome, idade, cidade, estudante);

// function fraseSobreMim(n, i, c, e){
//     if(e == true){
//         alert('Eu sou ' + n + ', tenho ' + i + ' anos, moro em ' + c +  ' e sou estudante.')
//     }else {
//         alert('Eu sou ' + n + ', tenho ' + i + ' anos, moro em ' + c +  'e não sou estudante.')
//     }
// }



// 5. ------------------------
// let num1 = 1
// let num2 = 2
// let retorno = true
// soma(num1, num2);

// function soma(valor1, valor2){
//     console.log(valor1 + valor2)
// }

// function soma(valor1, valor2){
//     if(valor1 >= valor2){
//         alert(retorno)
//     }else {
//         retorno = false;
//         alert(retorno)
//     }

// }


// let frase = 'Eu sou!'
// novoArray = new Array 

// repeteFrase(frase)

// function repeteFrase(f){
//     for(let i = 0; i <=9; i++){
//         novoArray[i] = f
//     }
// }
// console.log(novoArray)


// 6. ------------------------------

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// tamanhoArray(array)

// function tamanhoArray(a){
//     console.log(a.length)
// }



// let numero = prompt('Digite um número!')
// let par = true
// arrayPares = new Array 

// arrayPar(numero)

// function arrayPar(n){
//     if(n % 2 === 0){
//         alert(par)
//     }else {
//         par = false
//         alert(par)
//     }
// }


let array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
arrayPares = new Array 

//arrayPar(array)

function arrayPar(n){
    for(let i = 0; i <= n.length; i++){
        if(n[i] % 2 === 0){
            arrayPares.push(n[i])         
        }  
    }

    console.log(arrayPares.length) 
}

verificaPar(array)

function verificaPar(a){
   arrayPar(a)
}

