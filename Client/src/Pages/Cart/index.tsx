
interface IProps {
    cart: any
    setCart: any
}

const Cart = ({cart, setCart}: IProps) => {

    const handleRemove = ({id}: any) => {
        const copyProduct = [...cart]
    
        const items: any = copyProduct.find(product => product.id === id)
    
        if(items.qtd > 1) {
            items.qtd -= 1;
            setCart(copyProduct)
        }else{
          const arrayFiltered = copyProduct.filter(product => product.id !== id)
          setCart(arrayFiltered)
        }

        console.log(items.qtd)
      }

      const  handleClick = ( {id, name, price, img}: any) =>{
        const copyProduct = [...cart]
  
        const items = copyProduct.find((product) => product.id === id)
     
        if(!items) {
          copyProduct.push({id, name, price, img, qtd: 1})
        }else{
          items.qtd += 1
        }
  
        setCart(copyProduct)
    }

    const RemoverTudo = (id: number) => {
        const HandleCart = cart.filter((item: any) => item.id !== id)
        setCart(HandleCart)
    }

    const ClearCart = () => {
        setCart(cart.filter((item: any) => item.id === cart.id))
    }

    //Como o nome sugere, o reduce busca reduzir um array. Ele iterará por cada elemento dessa lista com o objetivo de ao final gerar um único valor (de qualquer tipo), como por exemplo a soma de todos os elementos desse array.

    const TotalPrice = cart.reduce((price: any, item: any) => price + item.qtd * item.price, 0)
    
    return(
        <div>
            {cart.map((item: any, index: any) => (
                <div key={index + item.id}>
                    <p>{item.name}</p>
                    <span>{item.qtd} * ${item.price}</span>
                    <button onClick={() => handleClick(item)}>+</button>
                    <button onClick={() => handleRemove(item)}>-</button>
                    <button onClick={() => RemoverTudo(item.id)}>X</button>
                </div>
            ))}
            <button onClick={() =>  ClearCart()}>Clear</button>
            <div>
                Total price
                <div>
                    {TotalPrice}
                </div>
            </div>
        </div>
    )
}

export default Cart