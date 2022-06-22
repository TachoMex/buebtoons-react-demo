import { useContext } from 'react'
import CartContext from './Controllers/CartContext'
import Modal from './UI/Modal'
import CartEntry from './CartEntry'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './CartModal.module.css'

const CartModal = (props) => {
    const cartContext = useContext(CartContext)
    const cartElements = Object.values(cartContext.collection.items).map((cartObject) => {
        return (<CartEntry {...cartObject} key={`carEntry${cartObject.id}`} />)
    }) 

    const clearCart = () => {
        if(window.confirm('Are you sure?')) {
            cartContext.clearCart()
        }
    }
    return (
        <Modal onClose={props.onClose} className={classes.modal}>
            <ul className={classes.ul}>
                { cartElements }
            </ul>
            <button className={classes.button} onClick={clearCart}> 
                Clear Cart
                <span>
                    <FontAwesomeIcon icon="trash" />
                </span>
            </button>
        </Modal>
    )
}
export default CartModal