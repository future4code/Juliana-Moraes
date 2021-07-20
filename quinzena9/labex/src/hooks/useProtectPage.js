import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

export const useProtectPage = () => {
    const history = useHistory()

    useEffect(() => {

        const token = localStorage.getItem('token');

        if(token === null) {
            console.log('Não autorizado, faça o login!') 
            history.push('/login')
        } 

    }, []);

}
