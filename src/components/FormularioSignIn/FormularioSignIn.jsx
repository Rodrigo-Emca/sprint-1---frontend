import {useRef} from 'react'
import './formularioSignIn.css'
import axios from 'axios'

import Swal from 'sweetalert2'
import imgGoogle from '../../images/Google.png'
import emailIcon from '../../images/@.png'
import passwordIcon from '../../images/lock1.png'

export default function FormularioSignIn() {

    let email = useRef()
    let password = useRef()

async function handleSubmit(event) {
        event.preventDefault()

        let data = {
            [email.current.name]: email.current.value,
            [password.current.name]: password.current.value
        }
        console.log(data)
        let url = 'http://localhost:8000/auth/signin'
        try {
            await axios.post(url, data)
            Swal.fire({
                icon: 'success',
                title: 'GENIAL',
                text: '¡Usuario online!'
            })
        } catch(error) {
            let err = error.response.data.message
            alert(err)
            console.log('Ocurrió un error')
            Swal.fire({
                icon: 'error',
                title: '¡Lo sentimos!',
                text: 'Hubo un problema.'
            })
        }
    }

    return (
    <form className='FormularioRegistro' onSubmit={handleSubmit}>
        <fieldset className='innerFormulario'>
            <legend>Email</legend>
                <input ref={email} type="email" className='inputs' name='email' required/>
                <img src={emailIcon} alt="emailIcon" className='icon'/>
        </fieldset>
            
        <fieldset className='innerFormulario'>
            <legend>Password</legend>
                <input ref={password} type="password" className='inputs' name='password' required/>
                <img src={passwordIcon} alt="passwordIcon" className='icon'/>
        </fieldset>

        <input type="submit" value="Sign in" className='SignUpButton'/>
        <button type='button' className='buttonSignGoogle'>
            <img src={imgGoogle} alt="" />
            <p className='pGoogle'>Sign with Google</p>
        </button>
    </form>
)
}