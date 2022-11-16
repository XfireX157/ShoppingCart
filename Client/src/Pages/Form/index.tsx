import {Outlet, useNavigate} from 'react-router-dom'
import './Users.scss'

const Form = () => {
    const navigate = useNavigate()
   
    return(
        <section className='Cords'>
            <div className='Cords_Card'>
                <div className='Imgs'>
                    <h2>Login</h2>
                    <img src="https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454" alt="" />
                </div>
                <button type='button' onClick={() => navigate('/sing/Login')}>Login</button>
            </div>
            <div className='Cords_Card'>
                <div className='Imgs'>
                    <h2>Registrar</h2>
                    <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="" />
                </div>
                <button type='button' onClick={() => navigate('/sing/Register')}>Registrar</button>
            </div>
        </section>
       
    )
}

export default Form