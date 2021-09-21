import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

//import components
import CartItem from "../../components/cartItem/Cartitem";
import { CartContext } from "../../components/cartcontext/Cartcontext";

const Cart = () => {
  const { cart, clear, totalItemsCart, totalPrice } = useContext(CartContext);

  return (
    <div className="cart-section-container mt-5">
      <section className="main-cart-section">
        <div className="container">
        <div className="cart-items">
          <div className="table-responsive container-cart-item pt-3">
             <h1>Tu carrito</h1>
            <table className="table ">
              <thead>
                <tr>
                  <th className="col-3">Imagen</th>
                  <th className="col-2">Articulo</th>
                  <th className="col-1 text-center">Precio</th>
                  <th className="col-2 text-center">Cantidad</th>
                  <th className="col-1 text-center">Total</th>
                  <th className="col-1 text-center">Borrar</th>
                </tr>
              </thead>

              {cart.map((item) => {
                return <CartItem dataItem={item} key={item.id} />;
              })}
            </table>
            <div className="container mt-5">
                {totalItemsCart !== 0 ? (
                  <p>Tienes {totalItemsCart} items en el Carrito</p>
                ) : (
                  <p>Tu carrito está vacío</p>
                )}
              <p className="total-cart">El total es: ${totalPrice} </p>
              <NavLink to="/" className="btn btn-dark">
                Seguir comprando
              </NavLink>

              <button onClick={clear} className="btn btn-warning button-clear">
                Limpiar
              </button>

            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
