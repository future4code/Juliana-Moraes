import React from 'react'

const diretoAposentadoria = (anoNascimento, anoIngresso) => {
    const idade = 2021 - anoNascimento
    const tempoContribuicao = 2021 - anoIngresso
    return idade >= 65 || tempoContribuicao >= 30 || (idade > 60 && tempoContribuicao > 25)
}

export default diretoAposentadoria