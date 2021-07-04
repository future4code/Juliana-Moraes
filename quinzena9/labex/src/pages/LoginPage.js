//import { Login } from '../css/GlobalStyled.js'
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';


export const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangeSenha = (event) => {
        setSenha(event.target.value);
    };

    const irParaAdmList = () => {
        return history.push('/admin/trips/list')
    }

    const submitLogin = () => {
        console.log(email, senha);
        const body = {
            email: email,
            password: senha
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/juliana-moraes/login', body)

            .then((response) => {
                console.log('correto', response.data.token)
                localStorage.setItem('token', response.data.token);
                irParaAdmList();
            })

            .catch((erro) => {
                console.log(erro.response)
            })
    }

    return (
        <div>

            <input
                name={'email'}
                value={email}
                onChange={onChangeEmail}
                placeholder='E-mail'
                required
                type={'email'}
            />

            <input
                name={'senha'}
                value={senha}
                onChange={onChangeSenha}
                placeholder='Senha'
                required
                type={'password'}

            />

            <button>Voltar</button>
            <button onClick={submitLogin}>Entrar</button>


        </div>
    )
}




















































// export const LoginPage = () => {

//     const { form, onChange, cleanFields } = useForm({
//         email: '',
//         senha: '',
//     });

//     const submitLogin = (event) => {
//         event.prevenDefault();
//         console.log("Formulário enviado!", form);
//         cleanFields();

//     };


//     return (
//         <Login onSubmit={submitLogin}>

//                 <input
//                     name={'email'}
//                     value={form.email}
//                     onChange={onChange}
//                     placeholder='E-mail'
//                     required
//                     type={'email'}
//                 />

//                 <input
//                     name={'senha'}
//                     value={form.senha}
//                     onChange={onChange}
//                     placeholder='Senha'
//                     required
//                     type={'password'}

//                 />

//                     <button>Voltar</button>
//                     <button>Entrar</button>




//         </Login>
//     );

// };