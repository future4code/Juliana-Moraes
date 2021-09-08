import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import { ContainerPrivate, ContainerTitulo } from './styled'
import { brinquedosList, alimentosList } from '../../constants/dadosProdutos'

const PrivatePage = () => {

    const [option, setOption] = useState()
    const [produto, setProduto] = useState()

    const adicionarItem = () => {

        if (option === 'brinquedo') {
            brinquedosList.push(produto)
            alert('Brinquedo Adicionado')
        } else if (option === 'alimento'){
            alimentosList.push(produto)
            alert('Alimento Adicionado')
        } else {
            alert('Escolha entre Brinquedo ou Alimento')
        }
            
    }

    const removerItem = () => {
        if (option === 'brinquedo') {
            brinquedosList.splice(brinquedosList.indexOf(produto.toLowerCase()), 1)
            alert('Brinquedo removido')
        } else if (option === 'alimento'){
            alimentosList.splice(alimentosList.indexOf(produto.toLowerCase()), 1)
            alert('Alimento removido')
        } else {
            alert('Escolha entre Brinquedo ou Alimento')
        }
    }

    return (
        <div>
            <Header></Header>
            <ContainerTitulo>
                <p>Manutenção de itens</p>
            </ContainerTitulo>

            <ContainerPrivate>

                <select onChange={event => setOption(event.target.value)}>
                    <option></option>
                    <option value='brinquedo'>Brinquedos</option>
                    <option value='alimento'>Alimentos</option>
                </select>

                <input placeholder='Qual produto?' onChange={(event) => setProduto(event.target.value)}></input>
                <button onClick={() => adicionarItem()} >Adicionar</button>
                <button onClick={() => removerItem()}>Remover</button>

            </ContainerPrivate>


        </div>
    )
}

export default PrivatePage