import './style.scss'
import {IButton} from '@/Types/IButton'

const Button = ({children, className, ...rest}: IButton) => {
    return (
        <button className={className}
            {...rest}
        > {children}</button>
    )
}

export default Button