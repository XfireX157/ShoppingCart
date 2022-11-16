import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header'


const Default = ({cart, setCart, list, setList}: any) => {
    return(
        <div>
            <div>
                <Header cart={cart} setCart={setCart} list={list} setList={setList}  />
            </div>
                <Outlet />
        </div>
    )
}

export default Default