import classes from './NumericInputWithIncrement.module.css'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NumericInputWithIncrement = props => {
    return (
        <span className={classes['btn-group']}>
            <Button className={classes.button} onClick={props.onSubstract}>
                <span>
                    <FontAwesomeIcon icon="minus" />
                </span>
            </Button>
            <input className={classes.input} value={props.value || 0} onChange={props.onChange} />
            <Button className={classes.button} onClick={props.onAdd}>
                <span>
                    <FontAwesomeIcon icon="plus" />
                </span>
            </Button>
        </span>
    )
}
export default NumericInputWithIncrement