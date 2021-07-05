import axios from 'axios'
import { useHistory } from 'react-router'
import useForm from '../hooks/useForm'


export const LoginPage = () => {

    const history = useHistory();

    const { form, onChange, cleanFields } = useForm({ email: '', password: '' })


    const fazerLogin = (event) => {
        event.preventDefault() 
        

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/juliana-moraes/login', form)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                history.push('/admin/trips/list')
            }).catch((erro) => {
                alert('E-mail e senha incorretos!')
            })


        cleanFields();
    }


    return (
        <div>
            <form onSubmit={fazerLogin}>
                <input
                    name='email'
                    value={form.email}
                    placeholder={'email'}
                    onChange={onChange}
                    required
                    type='email'
                />
                <input
                    name='password'
                    value={form.password}
                    placeholder={'senha'}
                    onChange={onChange}
                    type='password'
                    required
                />

                <button>login</button>
            </form>


        </div>
    )
}