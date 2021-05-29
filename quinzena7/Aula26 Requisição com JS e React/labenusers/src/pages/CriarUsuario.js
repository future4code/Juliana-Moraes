import React from "react";


export default class Lista extends React.Component {
    render() {
        return (
            <div>
                <h2>Criar Usuário</h2>
                <input type='text' placeholder='Nome'></input>
                <input type='email' placeholder='Email'></input>
                <button>Criar</button>
            </div>
        )
    }
}


