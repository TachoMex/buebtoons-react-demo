import { useState } from "react"
import CartContext from "./CartContext"

const defaultCartContext = () => {
    return {
        items: {},
        totalAmount: 0
    }
}

const CartController = (props) => {
    const [cartState, setCartState] = useState(defaultCartContext())

    const addItem = (item) => {
        setCartState((prevState) => { 
            const items = { ...prevState.items }
            if (items[item.id]) {
                return {items: {...items, [item.id]: {...item, count: item.count + items[item.id].count}}, totalAmount: prevState.totalAmount + item.count }
            } else {
                return {items: {...items, [item.id]: {...item}}, totalAmount: prevState.totalAmount + item.count }
            }
        })
    }
    
    const removeItem = (id, count) => {
        setCartState((prevState) => { 
            const items = { ...prevState.items }
            
            if (items[id].count <= count) {
                const {[id]: _, ...resultItems} = items
                return {
                    items: resultItems, totalAmount: prevState.totalAmount - items[id].count 
                }
            } else {
                return {items: {...items, [id]: {...items[id], count: items[id].count - count}}, totalAmount: prevState.totalAmount - count }
            }
        })        
    } 

    const clearItem = (id) => {
        removeItem(id, cartState.items[id].count)
    }

    const clearCart = () => {
        setCartState(defaultCartContext())
    }

    const cartContext = {
        collection: cartState,         
        addItem: addItem,
        removeItem: removeItem,
        clearItem: clearItem,
        clearCart: clearCart 
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartController