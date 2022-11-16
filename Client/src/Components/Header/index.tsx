import { useState,useEffect } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {AiFillHeart, AiOutlineSearch} from 'react-icons/ai'
import {RiShoppingBasket2Line} from 'react-icons/ri'
import {BiHomeAlt, BiExit} from 'react-icons/bi'
import {FiUser} from 'react-icons/fi'
import {BsGearFill} from 'react-icons/bs'
import'./style.scss'
import Modal from '../Modal'
import axios from 'axios'

const Header = ({cart, setList ,list}: any) => {
    
    useEffect(() => {
        axios.get('http://localhost:8080/getCards').then((respons) => {
            setList(respons.data)
            console.log(respons.data)
        })
    }, [])

    const navigate = useNavigate()

    const logout = () => {
        sessionStorage.removeItem('token')
        navigate('/sing')
        window.location.reload()
    }

    const ArrayModal = [
        
        {
            id: 1,
            icon: <BiExit/>,
            name: 'Dark Mode', 
            onClick: () => {}
        },
        {
            id: 2,
            icon: <BiExit/>,
            name: 'Configurar Perfil', 
            onClick: () => {}
        },
        {
            id: 3,
            icon: <BiExit/>,
            name: 'Sair da Conta', 
            onClick: () => logout()
        }
    ]

    const token = sessionStorage.getItem('token')
    const location = useLocation()
    const [change, setChange] = useState('')
    const [active, setActive] = useState({
        token: token == null,
        isModal: false
    }) 

    const Filter = () => {
        if(!change) return []
        return list.filter((item: any) => item.name
        .toLocaleLowerCase()
        .normalize("NFD")
        .replace(/[^a-zA-Zs]/g, "")
        .includes(change))
    }

    const TotalProducts = cart.reduce((qtd: any, item: any) => qtd + item.qtd, 0)

    return(
        <header className={`${location.pathname === '/' ? 'Header' : ' HeaderDefault'}`}>
           <div className='nav'>
                <input type="text" placeholder='Pesquisar' onChange={(e) => setChange(e.target.value)}/>
                <AiOutlineSearch/>
            </div>
           
            <ul className="navigation">
                <li>
                    <Link to="/"><BiHomeAlt/></Link>
                </li>
                {active.token ? (
                    <>
                        <li>  
                            <Link to="/sing"><FiUser/></Link>
                        </li>
                    </>
                ): (
                <>
                    <li>
                        <Link to="/cart">
                            <RiShoppingBasket2Line/> 
                            <span>{TotalProducts}</span> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/Favorite">
                            <AiFillHeart/>
                        </Link>
                    </li>
                    <li>
                        <BsGearFill onClick={() => setActive({...active, isModal: !active.isModal})}/>
                        <div className='BoxLogout'>
                            {active.isModal && <Modal className='ModalHeader' modal={ArrayModal}  /> }
                        </div>
                    </li>
                </>
                )}
            </ul>

            {change && (
                <div className='filter'>
                    {Filter().map((item: any) => (
                        <div>
                            {item.name}
                        </div>
                    ))}
                </div>
            )}
        </header>
    )
}

export default Header