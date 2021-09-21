import React, {useContext} from 'react'
import './cartwidget.css'
import { CartContext } from '../cartcontext/Cartcontext'
import carrito from './img/cart.svg'

const CartWidget = () => {
  const { totalItemsCart } = useContext(CartContext);

  return (
    <div className="cartwidget">
      <div className="carrito">
        <img className="iconCarrito" src={carrito}/>
      </div>
      <div className="total">{ totalItemsCart }</div>
    </div>
  )
}

export default CartWidget
