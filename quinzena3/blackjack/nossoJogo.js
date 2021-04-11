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

    
   // // -------------tentando resolver desafio 9---------------------------------

   // console.log('Bem Vindo ao jogo de Black!');

   // if(confirm("Quer iniciar uma nova rodada?")) {
      
   //    let usuarioCarta1 = comprarCarta();
   //    let usuarioCarta2 = comprarCarta();
   //    let cartaExtra 

   //    while (usuarioCarta1 == "A" && usuarioCarta2 == "A"){
   //       usuarioCarta1 = comprarCarta();
   //       usuarioCarta2 = comprarCarta();
   //       console.log('sorteio realizado');
   //       break;
   //    }

   //       let pontosUsuario = usuarioCarta1.valor + usuarioCarta2.valor;

   //       const computadorCarta1 = comprarCarta();
   //       const computadorCarta2 = comprarCarta();

   //       const pontosComputador = computadorCarta1.valor + computadorCarta2.valor;

   //       while(pontosUsuario < 21){
            
   //       }

   //       if(confirm('Suas cartas são: ' + usuarioCarta1.texto + 'e' + usuarioCarta2.texto + '. A carta revelada do computador é: ' + computadorCarta1.texto + '\n' + 'Deseja comprar mais uma carta?')){
   //          cartaExtra = comprarCarta();
   //          pontosUsuario = usuarioCarta1.valor + usuarioCarta2.valor + cartaExtra.valor;

   //       }else{
   //          console.log('entrou no else')
   //       }
         
   //       console.log('Computador - cartas: ' + computadorCarta1.texto, computadorCarta2.texto + ' Pontuação ' + pontosComputador);

   //       // if(pontosUsuario == pontosComputador){
   //       //       console.log('Empate!');
   //       // } else { 
            
   //       //    if(pontosUsuario > pontosComputador){
   //       //       console.log('O usuário ganhou!'); 
   //       //    } else {
   //       //       console.log('O computador ganhou!')
   //       //    }

   //       // }

   //    } else {
   //    console.log('O jogo acabou!');
   // }


  // -------------DESAFIO ---------------------------------

   
   // console.log('Bem Vindo ao jogo de Black!');

   //    if(confirm("Quer iniciar uma nova rodada?")) {
         
   //       let usuarioCarta1 = comprarCarta();
   //       let usuarioCarta2 = comprarCarta();
   //       cartaExtra = new Array(52)

   //       while (usuarioCarta1 == "A" && usuarioCarta2 == "A"){
   //          usuarioCarta1 = comprarCarta();
   //          usuarioCarta2 = comprarCarta();
   //          console.log('sorteio realizado');
   //          break;
   //       }

   //          let pontosUsuario = usuarioCarta1.valor + usuarioCarta2.valor;

   //          const computadorCarta1 = comprarCarta();
   //          const computadorCarta2 = comprarCarta();

   //          const pontosComputador = computadorCarta1.valor + computadorCarta2.valor;
              
   //             if(confirm('Suas cartas são: ' + usuarioCarta1.texto + 'e' + usuarioCarta2.texto + '. A carta revelada do computador é: ' + computadorCarta1.texto + '\n' + 'Deseja comprar mais uma carta?')){
   //                cartaExtra.push(comprarCarta())
   //                pontosUsuario = usuarioCarta1.valor + usuarioCarta2.valor + cartaExtra.valor;

   //                while(pontosUsuario < 21){
   //                   if(confirm('Deseja comprar mais uma carta?')){
   //                      cartaExtra.push(comprarCarta()) 
   //                   }
   //                }
   
   //             }else{
   //                console.log('entrou no else')
   //             }
            

   //          if(confirm('Suas cartas são: ' + usuarioCarta1.texto + 'e' + usuarioCarta2.texto + '. A carta revelada do computador é: ' + computadorCarta1.texto + '\n' + 'Deseja comprar mais uma carta?')){
   //             cartaExtra = comprarCarta();
   //             pontosUsuario = usuarioCarta1.valor + usuarioCarta2.valor + cartaExtra.valor;

   //          }else{
   //             console.log('entrou no else')
   //          }
            
   //          console.log('Computador - cartas: ' + computadorCarta1.texto, computadorCarta2.texto + ' Pontuação ' + pontosComputador);

   //          // if(pontosUsuario == pontosComputador){
   //          //       console.log('Empate!');
   //          // } else { 
               
   //          //    if(pontosUsuario > pontosComputador){
   //          //       console.log('O usuário ganhou!'); 
   //          //    } else {
   //          //       console.log('O computador ganhou!')
   //          //    }

   //          // }

   //       } else {
   //       console.log('O jogo acabou!');
   //    }

   

   
  