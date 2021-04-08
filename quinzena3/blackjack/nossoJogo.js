/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   console.log('Bem Vindo ao jogo de Black!');

   if(confirm("Quer iniciar uma nova rodada?")) {
      
      let usuarioCarta1 = comprarCarta();
      let usuarioCarta2 = comprarCarta();

      while (usuarioCarta1 == "A" && usuarioCarta2 == "A"){
         usuarioCarta1 = comprarCarta();
         usuarioCarta2 = comprarCarta();
         console.log('sorteio realizado');
         break;
      }

         const pontosUsuario = usuarioCarta1.valor + usuarioCarta2.valor;

         console.log('Usuário - cartas: ' + usuarioCarta1.texto, usuarioCarta2.texto + ' Pontuação ' + pontosUsuario);

         const computadorCarta1 = comprarCarta();
         const computadorCarta2 = comprarCarta();

         const pontosComputador = computadorCarta1.valor + computadorCarta2.valor;

         console.log('Computador - cartas: ' + computadorCarta1.texto, computadorCarta2.texto + ' Pontuação ' + pontosComputador);

         if(pontosUsuario == pontosComputador){
               console.log('Empate!');
         } else { 
            
            if(pontosUsuario > pontosComputador){
               console.log('O usuário ganhou!'); 
            } else {
               console.log('O computador ganhou!')
            }

         }

      } else {
      console.log('O jogo acabou!');
   }

    





   

   
  