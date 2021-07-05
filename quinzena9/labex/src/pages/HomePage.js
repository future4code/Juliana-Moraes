import React from 'react';
import { Home } from '../css/GlobalStyled.js'
import { useHistory } from 'react-router';

export const HomePage = () => {

    const history = useHistory();

    const irParaLogin = () => {
        history.push('/login')
    }

    const irParaListaViagens = () => {
        history.push('/trips/list')
    }


    return (

        <Home>

            <button onClick={irParaListaViagens}>VIAJE</button>
            <button onClick={irParaLogin}>ÁREA RESTRITA</button>

        </Home>

    )

}