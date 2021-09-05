// - Assistir aula Variáveis - ok
// - Criar arrays contendo os itens da loja ok
// - Criar perguntas que serão usadas no projeto com prompt e armazenar em variáveis ok
// - Assistir aula Condicionais
// - Criar condicionais que decidirão o próximo passo em caso de ok
// - Assistir aula Laços
// - Criar laço para que sempre após realizar uma ação pedida, seja possível pedir outra. ok
// - Criar condição de saída para caso o usuário digite `sair`, o laço deve ser interrompido. (falta iterromper após achar)


const brinquedos = ['bola', 'domino', 'boneca', 'quebra-cabeca', 'peteca', 'ioio', 'bambole', 'autorama', 'pense-bem', 'baralho']
const alimentos = ['banana', 'tomate', 'cebola', 'alho', 'peito-de-frango', 'carre', 'feijao', 'arroz', 'macarrao', 'queijo']

const tipoProduto = 'Qual tipo de produto deseja ver? Digite Alimentos ou Brinquedos. Para finalizar digite sair'

const qualItem = 'Qual produto deseja comprar?'

const sair = false;

function escolherLista() {

    let escolha = prompt(tipoProduto)

    switch (escolha.toLowerCase()) {

        case 'alimentos'.toLowerCase():
            console.log('Alimentos', alimentos)
            let itemAlimentos = prompt(qualItem)

            for (let i = 0; i < alimentos.length; i++) {

                if (alimentos[i] == itemAlimentos) {
                    console.log('Achei', alimentos[i])
                    alimentos.splice(alimentos.indexOf(alimentos[i]), 1)
                    console.log(alimentos)
                }
            }
            break;

        case 'brinquedos'.toLocaleLowerCase():
            console.log('Brinquedos', brinquedos)
            let itemBrinquedos = prompt(qualItem)

            for (let i = 0; i < brinquedos.length; i++) {

                if (brinquedos[i] == itemBrinquedos) {
                    console.log('Achei', brinquedos[i])
                    brinquedos.splice(brinquedos.indexOf(brinquedos[i]), 1)
                    console.log(brinquedos)
                }
            }

            break;

        case 'sair'.toLowerCase():
            console.log('finalizado')
            break;

        default:
            console.log('Escolha entre Alimentos ou Brinquedos')
    }

}


escolherLista()


