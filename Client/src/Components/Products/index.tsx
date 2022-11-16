import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import Stars from "./Stars"
import './styles.scss'
import { MdAddCircle } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { FiEdit } from 'react-icons/fi'
import ModalEdit from '../ModalEdit'

interface IProps {
    cart: any
    setCart: any
    favorite: boolean[]
    setFavorite: React.Dispatch<React.SetStateAction<boolean[]>>
    list: any
    setList?: any
    activeProduct: {
        activeButton: boolean;
        activeModal: boolean
    }
    setActiveProduct: React.Dispatch<React.SetStateAction<{
        activeButton: boolean;
        activeModal: boolean;
    }>>
}

const Products = ({cart, setCart, favorite, setFavorite, list, activeProduct, setActiveProduct}: IProps) => {

    const navigate = useNavigate()
    const token = sessionStorage.getItem('token')

    const handleClick = ( {id, name, price, img}: any) =>{

        if(token) {
            const copyProduct = [...cart]
  
            const items = copyProduct.find((product) => product.id === id)
         
            if(!items) {
              copyProduct.push({id, name, price, img, qtd: 1})
            }else{
              items.qtd += 1
            } 
            setCart(copyProduct)
        }else {
            navigate('/sing')
        }
    }

    const addFav = (props: any) => {
        setFavorite([...favorite, props])
    }

    const removerFavorito = (index: any) => {
       setFavorite(favorite.filter((lists: any) => lists.id !== index.id))
    }

    const editProduct = () => {
        setActiveProduct({...activeProduct, activeModal: !activeProduct.activeModal})
    }


    return (
            <div className="Box">
                <div className="CardsBox">
                {list.map((item: any) => (
                    <div className="Card" key={item.id}>
                            <div className="BoxInfo">
                                <div className="BoxImg">
                                    <img src={item.img} alt={item.name} />
                                    <span>{!favorite.find((keys:any) => keys.category_id === item.category_id) ? (
                                    <AiOutlineHeart onClick={() => addFav(item)}/> 
                                    ) : (
                                        <AiFillHeart onClick={() => removerFavorito(item)}/>
                                    )}</span>
                                </div>
                            </div>
                        <div className="BoxInfo">
                            <div className='Info'>
                            <p>{item.name}</p>
                            <Stars/>
                            <h3><span>R$</span>{item.price}</h3>
                        </div>
                            <div  className="AddProduct">
                                {activeProduct.activeButton ?  <MdAddCircle onClick={() => handleClick({...item})}/> : <FiEdit onClick={editProduct}/>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products