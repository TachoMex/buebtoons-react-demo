import classes from './Button.module.css'
const Button = props => {
    const clickHandler = event => {
        event.preventDefault()
        props.onClick(event)
    }

    return (
        <button className={props.className || classes.button} type={props.type || 'button'} onClick={clickHandler}>
            {props.children}
        </button>
    )
}
export default Button