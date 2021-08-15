import React from 'react'

const calculaIdadeEmDias = (dias, meses, anos) => {
    return 365 * anos + 30 * meses + dias 
}

export default calculaIdadeEmDias