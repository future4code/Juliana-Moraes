import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { goToRecipeList } from "../routes/coordinator"

const useUnprotectedPage = () => {

    const history = useHistory()
    useLayoutEffect( () => {
        const token = localStorage.getItem('token')
        if (token) {
            goToRecipeList(history)
        }
    }, [history])

}

export default useUnprotectedPage