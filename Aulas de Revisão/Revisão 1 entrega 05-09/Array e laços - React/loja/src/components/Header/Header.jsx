import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderContainer } from './styled'
import { goToMain, goToPrivate } from '../../routes/coordinator'



const Header = () => {

    const history = useHistory()
    const [nameButton, setNameButton] = useState(true)
    const [pageButton, setPageButton] = useState('')

    const onClickButton = () => {

        if(history.location.pathname != '/private') {
            setPageButton(goToPrivate(history))
            setNameButton(false)
        } else {
            setPageButton(goToMain(history))
            setNameButton(true)
        }
    }

    return (
        <HeaderContainer>
            <p onClick={() => goToMain(history)}>Loja Labenu</p>            
            <button onClick={() => onClickButton()}>{nameButton ? 'Restrito' : 'Início'}</button>   
        
        </HeaderContainer>
    )
}
 
export default Header