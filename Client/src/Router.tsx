import { useState } from "react";
import {BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import Favorite from "./Pages/Favorite";
import Home from "./Pages/Home";
import Default from "./Pages/Default";
import NewProduct from "./Pages/NewProduct";
import Form from "./Pages/Form";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import { Flavors } from "./Mock/flavors";

const RouterDOM = () => {

    const [cart, setCart] = useState([])
    const [favorite, setFavorite] = useState<boolean[]>([])
    const [listando, setListando] = useState([])
    const [active, setActive] = useState<string | number | boolean | null>(false)
    const [list, setList] = useState([])
    const [time, setTime] = useState(Flavors)

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Default  cart={cart} setCart={setCart} list={list} setList={setList} />}>

                    <Route index element={<Home cart={cart} setCart={setCart} favorite={favorite} setFavorite={setFavorite} list={list}  setList={setList} 
                    active={active} setActive={setActive} time={time} setTime={setTime}  />} />

                    <Route path="/Cart" element={<Cart cart={cart} setCart={setCart}/>} />

                    <Route path="/Favorite" element={<Favorite favorite={favorite} setFavorite={setFavorite} />} />

                    <Route path="/sing" element={<Form/>} />

                    <Route path="/Form" element={<NewProduct listand={listando} setListando={setListando} list={list} setList={setList} time={time} setTime={setTime} />} />
                </Route>

                <Route path="/sing/Login" element={<Login />} />
                <Route path="/sing/Register" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default RouterDOM