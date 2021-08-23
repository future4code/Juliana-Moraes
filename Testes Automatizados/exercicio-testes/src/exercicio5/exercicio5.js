import React from 'react'

const idadeVotacao = (anoNasc, anoAtual) => {
    const idade = anoAtual - anoNasc;
    return idade >= 16
}

export default idadeVotacao