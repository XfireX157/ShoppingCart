import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.scss'

export default function Register() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
      emailCadastro: '',
      senhaCadastro: '',
      senhaCadastroConfirm: ''
  })

  const [error, setError] = useState({
      errorVazioCadastro: false,
      errorCaracterCadastro: false,
      errorSenhaConfirm: false
  })

  const onChanges = (e: any) => {
      setForm({...form, [e.target.name]: e.target.value})
  }

  const HandleClickCadastro = (e: any) => {
      e.preventDefault()

      if(form.emailCadastro.length === 0 || form.senhaCadastro.length === 0  && form.senhaCadastro.length < 8){
          setError({...error, errorVazioCadastro: true, errorCaracterCadastro: true})
      }else if(form.senhaCadastro.length != form.senhaCadastroConfirm.length) {
          setError({...error, errorVazioCadastro: false, errorCaracterCadastro: false, errorSenhaConfirm: true})
      }
      else{
          const usuarios = {
              emailCadastro: form.emailCadastro,
              senhaCadastro: form.senhaCadastro
          }
          

          axios.post('http://localhost:8080/register', usuarios)
          .then((respos) => {
              if(respos.data.msg){
                    alert(respos.data.msg)

                    setForm({...form , emailCadastro: '', senhaCadastro: '', senhaCadastroConfirm: ''})
                    setError({...error, errorVazioCadastro: false, errorCaracterCadastro: false, errorSenhaConfirm: false})

                    setTimeout(() => {
                        navigate('/Login')
                    }, 2000)
                }
          }).catch((err) => {
              if(err){
                  alert(err.data.msg)
              }
          })
      }
  }

  return (
    <form className='formRegister' onSubmit={HandleClickCadastro}>
        <legend>Cadastro</legend>
        <div className='formRegister_inputs'>
            <label>E-mail:</label>
            <input 
                type="email" 
                name="emailCadastro" 
                placeholder="Seu Email..." 
                value={form.emailCadastro}
                onChange={onChanges}
                />
                {error.errorVazioCadastro && <p>Não deixe o campo vazio</p>}
        </div>
        <div className='formRegister_inputs'>
            <label>Senha:</label>
            <input 
                type="password" 
                name="senhaCadastro"  
                placeholder="Sua Senha..." 
                value={form.senhaCadastro}
                onChange={onChanges}
                />
                {error.errorVazioCadastro && <p>Não deixe o campo vazio</p>}
                {error.errorCaracterCadastro ? <p>Não possui 8 caracteres</p>: <></>}
                
        </div>
        <div className='formRegister_inputs'>
            <label>Repita senha:</label>
            <input 
                type="password" 
                name="senhaCadastroConfirm"  
                placeholder="Repita sua senha" 
                value={form.senhaCadastroConfirm}
                onChange={onChanges}
                />
                {error.errorSenhaConfirm && <p>Sua senha não é igual a anterior</p>}                
        </div>
        <input type="submit" value="Cadastrar" />
    </form>
  )
}
