import React from "react"
import { ScreenContainer, LogoImage, SingUpButtonContainer } from "./styled"
import logo from "../../assets/logo.svg"
import { Button } from "@material-ui/core"
import LoginForm from "./LoginForm"
import { useHistory } from "react-router-dom"
import { goToSignUp } from "../../routes/coordinator"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const LoginPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    const history = useHistory()

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <LoginForm setRightButtonText={setRightButtonText} />
            <SingUpButtonContainer>
                <Button
                    onClick={() => goToSignUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}

                >
                    Não Possui conta? Cadastre-se
                </Button>
            </SingUpButtonContainer>

        </ScreenContainer>
    )
}

export default LoginPage;