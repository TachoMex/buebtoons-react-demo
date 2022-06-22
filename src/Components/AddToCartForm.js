import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createRef, useState } from 'react';
import classes from './AddToCartForm.module.css'

const AddToCartForm = props => {
    const [itemCount, setItemCount] = useState(1)
 
    const addCountHandler = () => { 
        setItemCount((prevState) => { return prevState + 1 })
    }  

    const substractCountHandler = () => { 
        setItemCount((prevState) => { return Math.max(1, prevState - 1) })
    }  

    const inputHandler = (event) => {
        event.preventDefault()
        const val = +event.target.value
        if (Number.isInteger(val) && val > 0) {
            setItemCount(val)
        }
    }

    const submitHandler = (event) => {
        event.preventDefault()
        setItemCount(1)
        props.onAdd(itemCount)
    }

    return (
        <form>
            <span className={classes['btn-group']}>
                <button type="button" className={classes['button']} onClick={substractCountHandler}>-</button>
                <input className={classes['input']} value={itemCount} onChange={inputHandler} />
                <button type="button" className={classes['button']} onClick={addCountHandler}>+</button>
            </span>
            <div>
                <button type="submit" className={classes.submit} onClick={submitHandler}>
                    <span>Add to cart</span>
                    <span className={classes.icon}>
                        <FontAwesomeIcon icon="shopping-cart" />
                    </span>
                </button>
            </div>
        </form>
    );
}
export default AddToCartForm