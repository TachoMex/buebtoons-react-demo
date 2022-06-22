import { useContext } from 'react'
import Card from './UI/Card'
import WebToon from './Webtoon.js'
import classes from './WebtoonList.module.css'
import CartContext from './Controllers/CartContext'

const BUEBTUNS = [
    {name: 'Noblesse', status: 'Complete', summary: 'Rai has awakened from his slumber, the world seems to be very different from what he recall', id: 'noblesse'},
    {name: 'Eleceed', status: 'On going', summary: 'Kayden has become a cat and must help his human friend to awaken his true powers, but that will carry problems.', id: 'eleceed'}
]

const WebtoonList = props => {
    const cartContext = useContext(CartContext)
    const addHandler = (toon) => {
        cartContext.addItem(toon)
    }

    const buebtunsList = BUEBTUNS.map(tun => { return <WebToon key={tun.id} onAdd={addHandler} {...tun}/> } )
    return (
        <section className={classes.webtoons}>
            <Card>
                 <ul> {buebtunsList} </ul>
            </Card>
        </section>
    )
}

export default WebtoonList