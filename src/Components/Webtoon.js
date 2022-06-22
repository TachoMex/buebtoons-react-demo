import classes from './Webtoon.module.css'
import AddToCartForm from './Cart/AddToCartForm'

const WebToon = props => {

    const submitHandler = (count) => {
        props.onAdd({...props, count: count})
    }

    return (<li className={classes.webtoon}>
        <span>
            <h3 className={classes.title}>{props.name}</h3>
            <p className={classes.summary}> {props.summary} </p>
            <p className={classes.status}> {props.status} </p>
        </span>
        <span>
            <AddToCartForm onAdd={submitHandler}/>
        </span>

    </li>)
}
export default WebToon