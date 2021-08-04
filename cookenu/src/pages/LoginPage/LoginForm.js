import React, { useState } from "react"
import { InputsContainer } from "./styled"
import { CircularProgress, TextField } from "@material-ui/core"
import { Button } from "@material-ui/core"
import useForm from "../../hooks/useForm"
import { login } from "../../services/user"
import { useHistory } from "react-router-dom"


const LoginForm = ({setRightButtonText}) => {

    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText, setIsLoading)

    }

    

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                />
                <TextField
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                />
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    {isLoading ? <CircularProgress color={'inherit'} size={24} /> : <>Fazer Login</>}
                </Button>
            </form>
        </InputsContainer>

    )
}

export default LoginForm;