import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import classes from './CartEntry.module.css'
import CartContext from '../Controllers/CartContext'
import NumericInputWithIncrement from '../UI/NumericInputWithIncrement'
import Button from '../UI/Button'
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
            <div>
                {props.name}
            </div>

            <NumericInputWithIncrement onSubstract={removeItemHandler} onAdd={addItemHandler} value={props.count}/>

            <Button onClick={clearItemHandler}>
                Remove
                <span>
                    <FontAwesomeIcon icon="trash" />
                </span>
            </Button>
        </li>
    )
}
export default CartEntry