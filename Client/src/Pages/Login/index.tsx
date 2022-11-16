
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.scss'

export default function Login() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    senha: '',
  })

  const [error, setError] = useState({
    errorVazio: false,
    errorCaracter: false,
  })

  const onChanges = (e: any) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const HandleClick = (e: any) => {
    e.preventDefault()

    if(form.email.length === 0 || form.senha.length === 0){
        setError({...error, errorVazio: true})
    } 

    else {
        const usuarios = {
            email: form.email,
            senha: form.senha
        }

        axios.post('http://localhost:8080/login', usuarios)
        .then((respos) => {
            alert(respos?.data?.msg)
            sessionStorage.setItem('token', respos.data.token)
            if(respos.data.token){
                setError({...error, errorVazio: false})
                setForm({...form , email: '', senha: ''})
                navigate('/')
                window.location.reload()
            }  
        }).catch((err) => {
            alert(err.data.msg)
        })
    }
}

  return (
    <form className='formLogin' onSubmit={HandleClick}>
            <legend>Login</legend>
            <div className='formLogin_inputs'>
                <label>E-mail:</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Seu Email..." 
                    value={form.email}
                    onChange={onChanges}
                    />
                    {error.errorVazio && <p>Não deixe o campo vazio</p>}
            </div>
            <div className='formLogin_inputs'>
                <label>Senha:</label>
                <input 
                    type="password" 
                    name="senha"  
                    placeholder="Sua Senha..." 
                    value={form.senha}
                    onChange={onChanges}
                    />
                    {error.errorCaracter ? <p>Não possui 8 caracteres</p>: <></>}
                    {error.errorVazio && <p>Não deixe o campo vazio</p>}
            </div>
            <input type="submit" value="Login" />
        </form>
  )
}
