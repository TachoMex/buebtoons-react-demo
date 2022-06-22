import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import Header from './Components/Header'
import Menu from './Components/Menu'
import CartController from './Components/Controllers/CartController';
import CartModal from './Components/CartModal';

function App() {
  const [showCart, setShowCart] = useState(false)

  const hideCartModalHandler = () => {
    setShowCart(false)
  }

  const showCartModalHandler = () => {
    setShowCart(true)
  }

  return (<CartController>
    {showCart && <CartModal onClose={hideCartModalHandler}/> }
    <Header onShow={showCartModalHandler}/>
    <main>
      <Menu/>
    </main>
  </CartController>
  )
}

export default App;
