import React from "react"
import { ErrorPageContainer, ErroImage } from "./styled"
import ImagemErro from "../../assets/banana.png"
import { Typography } from "@material-ui/core"

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErroImage src={ImagemErro} />
            <Typography
                color={"primary"}
                variant={"h5"}
                align={"center"}
            >
                Erro 404 - Página Não Encontrada
            </Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage;