import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goToList } from '../../routes/coordinator'
import { MainBodyContainer, CentralMainContainer, ContainerProduto } from './styled'



const MainBody = () => {

    const history = useHistory()

    const onClickTipoProdutos = (tipoProduto) => {

        if (tipoProduto === "brinquedos"){
            const produto = 'brinquedos'
            goToList(history, produto)

        } else if (tipoProduto === "alimentos"){
            const produto = 'alimentos'
            goToList(history, produto)
        } 
    } 

    return (
        <MainBodyContainer>
            <CentralMainContainer>
                <ContainerProduto onClick={() => onClickTipoProdutos("brinquedos")}>BRINQUEDOS</ContainerProduto>
                <ContainerProduto onClick={() => onClickTipoProdutos("alimentos")}>ALIMENTOS</ContainerProduto>
            </CentralMainContainer>
        </MainBodyContainer>
    )
}

export default MainBody