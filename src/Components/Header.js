import { Fragment } from 'react'
import styles from './Header.module.css'
import bannerImage from '../img/kitten-banner.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = function(props) {
    return (
        <Fragment>
            <header className={styles.header} >
                <h1>Menu de buebtuns chidos</h1>
                <HeaderCartButton onShow={props.onShow}/>
            </header>
            <div className={styles['main-image']}>
                <img src={bannerImage} alt="Best buebtuns"/>
            </div>

        </Fragment>
    );
}

export default Header