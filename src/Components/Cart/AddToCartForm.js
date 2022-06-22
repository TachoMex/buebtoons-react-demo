import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createRef, useState } from 'react';
import classes from './AddToCartForm.module.css'
import Button from '../UI/Button'
import NumericInputWithIncrement from '../UI/NumericInputWithIncrement'

const AddToCartForm = props => {
    const [itemCount, setItemCount] = useState(1)
 
    const addCountHandler = () => { 
        setItemCount((prevState) => { return prevState + 1 })
    }  

    const substractCountHandler = () => { 
        setItemCount((prevState) => { return Math.max(1, prevState - 1) })
    }  

    const inputHandler = (event) => {
        const val = +event.target.value
        if (Number.isInteger(val) && val > 0) {
            setItemCount(val)
        }
    }

    const submitHandler = (event) => {
        setItemCount(1)
        props.onAdd(itemCount)
    }

    return (
        <form>
            <NumericInputWithIncrement onSubstract={substractCountHandler} onAdd={addCountHandler} onChange={inputHandler} value={itemCount}/>
            <div>
                <Button type="submit" className={classes.submit} onClick={submitHandler}>
                    <span>Add to cart</span>
                    <span className={classes.icon}>
                        <FontAwesomeIcon icon="shopping-cart" />
                    </span>
                </Button>
            </div>
        </form>
    );
}
export default AddToCartForm