import React, { useState } from 'react'
import { FilterContainer, ContainerBuscar } from './styled'
import { filtrarLista } from '../../pages/ListPage/ListPage'



const Filter = (props) => {


    return (
        <FilterContainer>
            <ContainerBuscar>
                <label>Filtro</label>
                <input
                    type='text'
                    value={props.value}
                    onChange={props.onChange}
                />
                <button onClick={props.filtrar}>Filtar</button>
            </ContainerBuscar>
            <button onClick={props.ordenar}>Ordenar</button>
        </FilterContainer>
    )
}

export default Filter