import React from 'react';
import logoBranca from '../img/logoBranca.svg'
import {Cabecalho, LogoPreta, FotoUsuario} from './styled.js'



function Topo() {
    return (
        <Cabecalho>

            <LogoPreta src={logoBranca} alt={''}></LogoPreta>   
            <FotoUsuario src={'https://picsum.photos/50/49'} />    

        </Cabecalho>

        
        
    )

}


export default Topo;