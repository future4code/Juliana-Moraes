import React from 'react'
import { useHistory } from 'react-router';

export const AdminHomePage = () => {

    const history = useHistory();

    const irParaTripDetalis = () => {
        return history.push('/admin/trips/:id')
    }

    return(
        <div>
           Página para administradores
           <button onClick={irParaTripDetalis}>Ir para detalhe da viagem</button>
        </div>
    )
   
}