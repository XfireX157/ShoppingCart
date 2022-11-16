import { AiFillHeart } from 'react-icons/ai'
import Stars from '../../Components/Products/Stars'

interface IProps {
    favorite: any
    setFavorite: any
}

const Favorite = ({favorite, setFavorite} : IProps) => {

    const handleRemove = (id: number) => {
        setFavorite(favorite.filter((item: any) => item.id !== id))
    }

    return (
        <div>
            {favorite.map((item: any) => (
                <div key={item.id}>
                    <div>
                        <div>
                            <img 
                            src={item.img} 
                            alt={item.name} />
                        </div>
                        <div onClick={() => handleRemove(item.id)}>
                            <AiFillHeart/>
                        </div>
                    </div>
                        <div>
                            <h3>{item.name}</h3>
                        </div>
                    <div>${item.price}</div>
                    <div>
                        <Stars/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Favorite