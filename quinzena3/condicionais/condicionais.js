// 1. o código solicita ao usuário um número para testar , transforma essa string em "numero" e se o resto da divisão po 2 for 0 ele retorna "Passou no teste", se o resto não for 0 ele retorna "Não passou no teste"

// 2. 
//a) o código serve para informar o preço da fruta que o cliente deseja comprar. Há 3 opções de fruta, onde o usuário escolhe a fruta e o código informa o valor. 
//b) O preço da fruta maçã é R$ 2.25
//c) o preço será 5 que é o valor do default

// 3.
// a) a primeira linha solicita ao usuário para digitar 1 numero e armazena ele em uma variável já convertido de string para numero.
//b) se o numro for 10 a mensagem será "Esse numero passou no teste"  . se o valor digitado for negativo, o programa não fará nada, pois não há o else
//c) sim há um erro no console. A variável mensagem só existe dentro do bloco do if

// 4.
// var cidade = prompt('Qual a sua cidade?');
// var idade = Number(prompt('Qual a sua idade?'));

// const idadeMinima = 18;

// if(idade == idadeMinima){
//     console.log('Pode dirigir');
// }else{
//     console.log('Não pode dirigir');
// }

// 5.

// var turno = prompt('Qual o turno do aluno? Digite M para Matutino, V para vespertino e N para noturno')
// if(turno == 'm' || 'M'){
//     console.log('Bom Dia!');
// }else{
//     if(turno == 'v' || 'V'){
//         console.log('Boa Tarde!');
//     }else{
//         if(turno == 'n' || 'N'){
//             console.log('Boa Noite!');
//         }else{
//         console.log('Opção invalida!')
//         }
//     } 
// }


//6.
// var turno = prompt('Qual o turno do aluno? Digite M para Matutino, V para vespertino e N para noturno')

// switch (turno) {
//   case "M":
//     console.log('Bom Dia!');
//     break;
//   case "V":
//     console.log('Boa Tarde!');
//     break;
//   case "N":
//     console.log('Boa Noite!');
//     break;
//   default:
//     console.log('Opção invalida!');
//     break;
// }

// 7. (Não deu tempo de terminar esse são 22:43 agora)

// var generoFilme = prompt('Qual o genero do filme?');
// var preco = Number(prompt('Qual o valor do ingresso?'))

// if (generoFilme == 'fantasia' && preco == 15){
//     console.log('Bom filme!')
// }else{
//     console.log('escolha outro filme')
// }