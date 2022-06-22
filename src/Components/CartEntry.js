import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import classes from './CartEntry.module.css'
import CartContext from './Controllers/CartContext'
const CartEntry = props => {
    const cartContext = useContext(CartContext);

    const addItemHandler = () => {
        const obj = {...props, count: 1, onAdd: null}
        cartContext.addItem(obj)
    }

    const removeItemHandler = () => {
        cartContext.removeItem(props.id, 1)
    }

    const clearItemHandler = () => {
        cartContext.clearItem(props.id)
    }

    return (
        <li className={classes.li}>
            <span>
                {props.name}
            </span>

            <button className={classes.button} onClick={removeItemHandler}>
                <span>
                    <FontAwesomeIcon icon="minus" />
                </span>
            </button>

            <span>{props.count}</span>

            <button className={classes.button} onClick={addItemHandler}>
                <span>
                    <FontAwesomeIcon icon="plus" />
                </span>
            </button>

            <button className={classes.button} onClick={clearItemHandler}>
                Remove
                <span>
                    <FontAwesomeIcon icon="trash" />
                </span>
            </button>
        </li>
    )
}
export default CartEntry