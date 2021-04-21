

let arrayInfoUser = []

function infoUser() {

    const filme = {}
   
    filme.titulo = document.getElementById('titulo-post').value
    filme.autor = document.getElementById('autor-post').value
    filme.conteudo = document.getElementById('conteudo-post').value
    filme.imagem = document.getElementById('img-post').value

    //
    arrayInfoUser.push(filme)
    //console.log(arrayInfoUser)

    document.getElementById('titulo-post').value = ''
    document.getElementById('autor-post').value = ''
    document.getElementById('conteudo-post').value = ''
    document.getElementById('img-post').value = ''

    exibePost(filme)

    

}

//Essa função exibe as informações no HTML
function exibePost(inforPostObjet){

    postHtml.innerHTML += `<h2>Titulo</h2> <p>${inforPostObjet.titulo}</p> <h2>Autor</h2> <p>${inforPostObjet.autor}</p> <h2>Conteudo</h2> <p>${inforPostObjet.conteudo}</p> <img src="${inforPostObjet.imagem}" alt="">`

}












