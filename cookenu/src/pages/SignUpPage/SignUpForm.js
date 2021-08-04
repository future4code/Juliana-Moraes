import React, { useState } from "react"
import { InputsContainer } from "./styled"
import useForm from "../../hooks/useForm"
import { Button, CircularProgress, TextField } from "@material-ui/core"
import { signUp } from "../../services/user"
import { useHistory } from "react-router-dom"

const SignUpForm = ({setRightButtonText}) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
        signUp(form, clear, history, setRightButtonText, setIsLoading)

    }
    return (
        <form onSubmit={onSubmitForm}>
            <InputsContainer>
                <TextField
                    name={"name"}
                    label={"Nome"}
                    value={form.name}
                    onChange={onChange}
                    variant={"outlined"}
                    margin={"normal"}
                    fullWidth
                    required
                    autoFocus
                />

                <TextField
                    type={"email"}
                    name={"email"}
                    label={"E-mail"}
                    value={form.email}
                    onChange={onChange}
                    variant={"outlined"}
                    margin={"normal"}
                    fullWidth
                    required
                />

                <TextField
                    type={"password"}
                    name={"password"}
                    label={"Senha"}
                    value={form.password}
                    onChange={onChange}
                    variant={"outlined"}
                    margin={"normal"}
                    fullWidth
                    required
                />

                <Button
                    variant={"contained"}
                    color={"primary"}
                    type={"submit"}
                    fullWidth
                >
                    {isLoading ? <CircularProgress color={'inherit'} size={24} /> : <>Fazer Cadastro</>}
                </Button>

            </InputsContainer>
        </form>
    )
}

export default SignUpForm;