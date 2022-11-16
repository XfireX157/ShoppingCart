import {useState, useEffect} from 'react'
import Nav from "../../Components/Nav"
import Button from '../../Components/ButtonAddCart'
import Products from "../../Components/Products"
import Modal from '../../Components/Modal'
import {AiOutlineInbox} from 'react-icons/ai'
import { MdAddCircle } from "react-icons/md"
import {BsPencilSquare} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './style.scss'
import ModalEdit from '../../Components/ModalEdit'

const Home = ({cart, setCart, favorite, setFavorite, setList, list, active, setActive, time}: any) => {
    const navitegate = useNavigate()

    const [activeProduct, setActiveProduct] = useState({
        activeButton: true,
        activeModal: false
    })

    const EditProduct = () => {
        setActiveProduct({...activeProduct, activeButton: !activeProduct.activeButton})
    }

    const ArrayModal = [
        {
            id: 1,
            icon: <AiOutlineInbox/>,
            name: 'Criar Produtos', 
            onClick: () =>  navitegate('/Form')
        },
        {
            id: 2,
            icon: <BsPencilSquare/>,
            name: 'Editar Produtos', 
            onClick: () =>  EditProduct()
        }
    ]       
    const [IsModal, setIsModal] = useState(false)
    const filteredSalles = active ? list.filter((item: any) => item.category === active) : []
    const token = sessionStorage.getItem('token')

    useEffect(() => {
        axios.get('http://localhost:8080/getCards').then((respons) => {
            setList(respons.data)
        })
    }, [])

    return (
        <div className="Conteudo">
            <div className="NavigationCategory">
                <Nav time={time} active={active} setActive={setActive}/>
            </div>
            <div className="CardsProducts">
                {time.map((item: any) => 
                <Products 
                    cart={cart} 
                    setCart={setCart} 
                    favorite={favorite} 
                    setFavorite={setFavorite}
                    activeProduct={activeProduct}
                    setActiveProduct={setActiveProduct}
                    list={filteredSalles.filter((time: any) => time.category === item.name)}
                    setList={setList}
                />)}

                {IsModal && <Modal className='Modal' modal={ArrayModal}/>} 
                      
                {token === "undefined" || token === null ?  <></> :  <Button 
                    onClick={() => setIsModal(!IsModal)}
                    children={<MdAddCircle />} 
                    className='Button' 
                />}

                <ModalEdit
                    activeProduct={activeProduct} 
                    setActiveProduct={setActiveProduct} 
                />
            </div>
        </div>
    )
} 

export default Home