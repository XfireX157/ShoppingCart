import axios from 'axios'
import { useState } from 'react'
import {v4 as uuid} from 'uuid'
import './style.scss'

const NewProduct = ({time, setTime}: any) => {

    const [form, setForm] = useState({name: '', price: '', img: '', amount: '', newCategory: ''})
    const formOnChange = (e: any) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const addProduct = (e: any) => {
        e.preventDefault()     
        axios.post('http://localhost:8080/produtos', {
            name: form.name,
            price: form.price,
            category: form.amount
        }).then((respons) => {
            console.log(respons)
        }).catch((err) => {
            console.log(err)
        })
    }

    const singInCategory = (e: any) => {
        e.preventDefault()
        setTime([...time, {id: uuid() ,name: form.newCategory}])
    }


    return(
        <>
        <form onSubmit={addProduct}>
            <div>
                <label htmlFor=""></label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder='Nome do produto' 
                    value={form.name}
                    onChange={formOnChange}
                    />
            </div>
            <div>
                <label htmlFor=""></label>
                <input 
                    type="number" 
                    name="price" 
                    placeholder='Preço do produto'
                    value={form.price}
                    onChange={formOnChange}
                    />
            </div>
            <div>
                <select title='Amount' name="amount" onChange={formOnChange}>
                    <option value=""></option>
                    {time.map((item: any) => (
                        <option key={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor=""></label>
                <input 
                    type="text" 
                    name="img" 
                    placeholder='imagem do produto'
                    value={form.img}
                    onChange={formOnChange}
                    />
            </div>
            <input type="submit"  />
        </form>

        <form onSubmit={singInCategory}>
            <div>
                <label htmlFor=""></label>
                <input 
                    type="text" 
                    name="newCategory" 
                    placeholder='Nova categoria' 
                    value={form.newCategory}
                    onChange={formOnChange}
                    />
            </div>
            <input type="submit" value="save" />
        </form>
        </>
    )
}

export default NewProduct