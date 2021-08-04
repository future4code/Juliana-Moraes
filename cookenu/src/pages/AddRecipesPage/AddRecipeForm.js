import React, { useState } from "react"
import { InputsContainer } from "./styled"
import { CircularProgress, TextField } from "@material-ui/core"
import { Button } from "@material-ui/core"
import useForm from "../../hooks/useForm"
import { createRecipe } from "../../services/recipe"


const AddRecipeForm = ({ setRightButtonText }) => {

    const [form, onChange, clear] = useForm({ title: "", description: "", image: "" })

    const [isLoading, setIsLoading] = useState(false)


    const onSubmitForm = (event) => {
        event.preventDefault()
        createRecipe(form, clear, setIsLoading)
    }


    return (
        <form onSubmit={onSubmitForm}>
            <InputsContainer>
                <TextField
                    type={"title"}
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    label={"Título"}
                    variant={"outlined"}
                    fullWidth
                    autoFocus
                    margin={"normal"}
                    required
                />
                <TextField
                    type={"description"}
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    label={"Descrição"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                />

                <TextField
                    name={"image"}
                    value={form.image}
                    onChange={onChange}
                    label={"Foto"}
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
                    {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Adicionar Receita</> }
                </Button>
            </InputsContainer>
        </form>

    )
}

export default AddRecipeForm;