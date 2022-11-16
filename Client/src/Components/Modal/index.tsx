import {IModal, IModalArray} from '../../Types/IModal'

const Modal = ({modal, className}: IModalArray) => {
    return(
        <div className={className}>
            {modal?.map((item: IModal) => (
                <div key={item.id} onClick={item.onClick}>
                    <div> 
                        <span>{item.icon}</span>
                        <p>{item.name}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Modal