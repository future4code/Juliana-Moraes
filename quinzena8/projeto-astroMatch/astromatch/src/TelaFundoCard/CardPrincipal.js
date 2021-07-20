import { FundoCard, Cabecalho, Rodape, CardFotos } from '../TelaFundoCard/StyledCardPrincipal.js'
import IconeRejeitar from '../img/rejeitar.png'
import IconeCoracao from '../img/heart.png'
import User from '../img/user.png'
import axios from 'axios'
import { useEffect, useState } from 'react';

export default function CardPrincipal() {

    const [profile, setProfile] = useState({})
    const [arrayLike, setArrayLike] = useState([])

    useEffect(() => {
        pegarPerfil()
    }, [])

    // ----------Opções de perfil na tela----------
    const pegarPerfil = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/juliana-moraes/person')
            .then((response) => {
                setProfile(response.data.profile)
                console.log('pegar perfil', response)
            })
    }

    // ----------Ao Clicar no Like----------


    const onClickLike = () => {
        const body = {
            id: profile.id,
            choice: 'true'
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/juliana-moraes/choose-person', body)
            .then((response) => {
                setArrayLike(response.data.profile)
                console.log('arraylike', arrayLike)
                pegarPerfil()
            })
    }

    
    const onClickRejeitar = () => {
        const body = {
            id: profile.id,
            choice: 'false'
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/juliana-moraes/choose-person', body)
            .then((response) => {
                pegarPerfil()
            })
    }

    // ---------Limpar Matches -------

    const limparMatches = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/juliana-moraes/clear')
        .then((response) => {
            console.log('limpou', response)
        })
    }

    const paginaListaMatche = () => {
        
    }


    return (
        <FundoCard>
            <Cabecalho>
                <p><span>astro</span>match</p>
                <button onClick={paginaListaMatche}><img src={User}/></button>
            </Cabecalho>
            <CardFotos key={profile.id}>
                <img src={profile.photo} />
                <div>
                    <p>{profile.name},{profile.age}</p>
                    <p>{profile.bio}</p>
                </div>
            </CardFotos>
            <Rodape>
                <button onClick={onClickRejeitar} key={profile.id}> <img src={IconeRejeitar} /></button>
                <button onClick={onClickLike} key={profile.id}> <img src={IconeCoracao} /> </button>
            </Rodape>
        </FundoCard>

    );
}