import React, { useEffect } from "react";
import { GridWeekContainer, GridWeekLittle, Semana1, Semana2, Semana3, Semana4, Semana5, Semana6, Semana7, Tarefa, Week } from './styled'


const GridWeek = (props) => {
    
    
    useEffect(() => {
        props.atualizarGridWeek()
    }, [])

        
    return (
        <GridWeekContainer>
            <GridWeekLittle>
                <Semana1>
                    <Week>SEGUNDA</Week>
                    <Tarefa> 
                        {props.tarefas.map((tarefas) => tarefas.day === 'segunda' ? <p><input type='radio' name='tarefa' onClick={() => props.tarefaId(tarefas.id)}/>{tarefas.text}</p>:<></>)}
                    </Tarefa>
                </Semana1>
                <Semana2>
                    <Week>TERÇA</Week>
                    <Tarefa> 
                        {props.tarefas.map((tarefas) => tarefas.day === 'terca' ? <p><input type='radio' name='tarefa' onClick={() => props.tarefaId(tarefas.id)}/>{tarefas.text}</p>:<></>)}
                    </Tarefa>
                </Semana2>
                <Semana3>
                    <Week>QUARTA</Week>
                    <Tarefa> 
                        {props.tarefas.map((tarefas) => tarefas.day === 'quarta' ? <p><input type='radio' name='tarefa' onClick={() => props.tarefaId(tarefas.id)}/>{tarefas.text}</p>:<></>)}
                    </Tarefa>
                </Semana3>
                <Semana4>
                    <Week>QUINTA</Week>
                    <Tarefa> 
                        {props.tarefas.map((tarefas) => tarefas.day === 'quinta' ? <p><input type='radio' name='tarefa' onClick={() => props.tarefaId(tarefas.id)}/>{tarefas.text}</p>:<></>)}
                    </Tarefa>
                </Semana4>
                <Semana5>
                    <Week>SEXTA</Week>
                    <Tarefa> 
                        {props.tarefas.map((tarefas) => tarefas.day === 'sexta' ? <p><input type='radio' name='tarefa' onClick={() => props.tarefaId(tarefas.id)}/>{tarefas.text}</p>:<></>)}
                    </Tarefa>
                </Semana5>
                <Semana6>
                    <Week>SÁBADO</Week>
                    <Tarefa> 
                        {props.tarefas.map((tarefas) => tarefas.day === 'sabado' ? <p><input type='radio' name='tarefa' onClick={() => props.tarefaId(tarefas.id)}/>{tarefas.text}</p>:<></>)}
                    </Tarefa>
                </Semana6>
                <Semana7>
                    <Week>DOMINGO</Week>
                    <Tarefa> 
                        {props.tarefas.map((tarefas) => tarefas.day === 'domingo' ? <p><input type='radio' name='tarefa' onClick={() => props.tarefaId(tarefas.id)}/>{tarefas.text}</p>:<></>)}
                    </Tarefa>
                </Semana7>
            </GridWeekLittle>
        </GridWeekContainer>
    )
}

export default GridWeek