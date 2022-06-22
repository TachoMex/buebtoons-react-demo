import { useContext } from 'react'
import CartContext from '../Controllers/CartContext'
import Modal from '../UI/Modal'
import Button from '../UI/Button'
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
            <Button onClick={clearCart}> 
                Clear Cart
                <span>
                    <FontAwesomeIcon icon="trash" />
                </span>
            </Button>
        </Modal>
    )
}
export default CartModal