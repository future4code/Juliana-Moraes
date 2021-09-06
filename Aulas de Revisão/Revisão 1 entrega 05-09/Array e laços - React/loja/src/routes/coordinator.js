
export const goToMain = (history) => {
    history.push('/')
}


export const goToList = (history, produto) => {
    history.push(`/list/${produto}`)
}

export const goToPrivate = (history) => {
    history.push('/private')
}

export const goToCarrinho = (history) => {
    history.push('/carrinho')
}