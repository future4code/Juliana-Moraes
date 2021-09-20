import React, { useState } from "react";
import { PlannerContainer } from './styled'
import HeaderContainer from '../components/Header/Header'
import GridWeek from '../components/GridWeek/GridWeek'
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const PlannerPage = (props, initialState) => {

    const [texto, setTexto] = useState('')
    const [semana, setSemana] = useState(initialState)
    const [idTarefa, setIdTarefas] = useState()
    const [tarefas, setTarefas] = useState([])

    const onChangeTexto = (event) => {
        setTexto(event.target.value)
    }

    const onChangeSemana = (event) => {
        setSemana(event.target.value)
    }

    const atualizarGridWeek = () => {
        axios.get(`${BASE_URL}/planner-turma-julianahmoraes`)
            .then((resp) => {
                setTarefas(resp.data)
            })
            .catch((err) => {
                alert('Erro ao atualizar')

            })
    }

    const criarTarefa = (event) => {
        event.preventDefault()
        const body = {
            text: texto,
            day: semana
        }

        axios.post(`${BASE_URL}/planner-turma-julianahmoraes`, body)
            .then((resp) => {
                alert('Tarefa Criada com sucesso! Aguarde')
                clear()
                atualizarGridWeek()
            })
            .catch((err) => {
                alert('Erro ao Criar Tarefa')
            })
    }

    const tarefaId = (id) => {
        setIdTarefas(id)
    }

    const clear = () => {
        setTexto('')
        setSemana(initialState)
    }

    const removeTarefa = (event) => {

        event.preventDefault()
        let resultado = window.confirm('Deseja excluir essa tarefa?');

        if (resultado == true) {
            axios.delete(`${BASE_URL}/planner-turma-julianahmoraes/${idTarefa}`)
                .then((resp) => {
                    atualizarGridWeek()
                })
                .catch((err) => {
                    alert('Erro ao remover a tarefa')
                })
        } else {
            alert('A tarefa não será excluida!')
        }


    }

    return (
        <PlannerContainer>
            <HeaderContainer onChangeTexto={onChangeTexto} onChangeSemana={onChangeSemana} criarTarefa={criarTarefa} removeTarefa={removeTarefa} texto={texto} semana={semana}>
            </HeaderContainer>

            <GridWeek setTexto={setTexto} tarefaId={tarefaId} atualizarGridWeek={atualizarGridWeek} setTarefas={setTarefas} tarefas={tarefas}></GridWeek>
        </PlannerContainer>

    )
}

export default PlannerPage