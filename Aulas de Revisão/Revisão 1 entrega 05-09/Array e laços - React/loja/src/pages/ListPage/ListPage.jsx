import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Filter from '../../components/Filter/Filter'
import Header from '../../components/Header/Header'
import { ContainerList, ContainerProdutos } from './styled'
import { brinquedosList, alimentosList } from '../../constants/dadosProdutos'

const ListPage = (props) => {

    const { produto } = useParams()
    const [tipoProduto, setTipoProduto] = useState([])
    const [listaFiltrada, setListaFiltrada] = useState(false)
    const [busca, setBusca] = useState()
    const [buscaFiltrada, setBuscaFiltrada] = useState('')
    const [ordenado, setOrdenado] = useState('')
    const [ordenarLista, setOrdenarLista] = useState(false)

    const filtrarLista = () => {
        setListaFiltrada(true)
        const filtrada = tipoProduto.filter((tipoProduto) => tipoProduto.toLowerCase().includes(busca.toLowerCase()));
        setBuscaFiltrada(filtrada)
    }

    const ordenar = () => {
        console.log('ordenar foi')
        setOrdenarLista(true)
        const tipoProdutoOrdenado = tipoProduto.sort()
        setOrdenado(tipoProdutoOrdenado)
    }

    useEffect(() => {
        if (produto === 'brinquedos') {
            setTipoProduto(brinquedosList);
        } else if (produto === 'alimentos') {
            setTipoProduto(alimentosList);
        } else {
            alert('Erro no produto!')
        }
    }, [produto])


    return (
        <div>
            <Header></Header>
            <Filter filtrar={filtrarLista} value={busca} onChange={(event) => setBusca(event.target.value)} ordenar={ordenar}></Filter>
            <ContainerList>
                {listaFiltrada ?
                    <ContainerProdutos>
                        {buscaFiltrada.map((tipoProduto) => <p key={tipoProduto}>{tipoProduto}</p>)}
                    </ContainerProdutos> : ordenarLista ?
                    <ContainerProdutos>
                        {ordenado.map((ordenado) => <p key={ordenado}>{ordenado}</p>)}
                    </ContainerProdutos> :
                    <ContainerProdutos>
                        {tipoProduto.map((tipoProduto) => <p key={tipoProduto}>{tipoProduto}</p>)}
                    </ContainerProdutos>
                }
            </ContainerList>


        </div>
    )
}

export default ListPage