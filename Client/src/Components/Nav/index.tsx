import './style.scss'

interface INavigation {
    active?: string | boolean | null
    setActive?: any,
    time: any
}

const Nav = ({active, setActive, time}: INavigation) => {

    const filtered = (index: any) => {
        if(active !== index.name){
            setActive(index.name)
            return
        }else{
            setActive(null)
            return
        }
    }

    return(
        <div className="Container">
            <div className='Logo'>
                <img src="https://png.pngtree.com/png-clipart/20220911/original/pngtree-chef-restaurant-logo-png-image_8538757.png" alt="Logo do restaurante" />
            </div>
            <ul className='Nav'>
                {time.map((item: any) => (
                     <li 
                     key={item.id}
                     className={`list ${active === item.name ? "active" : ""}`} 
                     onClick={() => filtered(item)}>
                        <span>{item.name}</span>
                     </li>
                ))}
            </ul>
        </div>
    )
}

export default Nav