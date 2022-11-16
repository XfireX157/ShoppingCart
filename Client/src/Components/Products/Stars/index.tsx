import { AiFillStar  } from "react-icons/ai"
import { useState } from "react"
import './styles.scss'

const Stars = () => {
    const [rating, setRating] = useState<any>(null)

    return (
    <div className="avaliacao">
        {[...Array(5)].map((__, i) => {
        const ratingValue = i + 1 
        
            return(
                <label key={i}>
                    <input 
                        type="radio" 
                        name="ratingValue" 
                        placeholder="Star" 
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        />
                    <AiFillStar 
                        className={`stars ${ratingValue <= rating ? "stars Active" : "stars"}`}
                        size={12}/>
                </label>
            )
        })}
    </div>
    )
}

export default Stars