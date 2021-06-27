import React from 'react';
import { useHistory } from 'react-router';

export const HomePage = () => {

    const history = useHistory()

    const irParaLogin = () => {
        history.push('/login')
    }

    const irParaListaViagens = () => {
        history.push('/trips/list')
    }


    return (
        <div>
            <p>HOME</p>
            <button onClick={irParaListaViagens}>Viagens</button>
            <button onClick={irParaLogin}>Entrar</button>
        </div>
    )

}