import styles from './HeaderCartButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CartContext from './Controllers/CartContext'
import { useContext } from 'react'
const HeaderCartButton = (props) => {
    const cartContext = useContext(CartContext)
    console.log(cartContext)
    return (
        <button className={styles.button} onClick={props.onShow}>
            <span className={styles.icon}>
                <FontAwesomeIcon icon="shopping-cart" />
            </span>
            <span> Your buebtuns</span>
            <span className={styles.badge}> { cartContext.collection.totalAmount } </span>
        </button>
    )
}
export default HeaderCartButton