import React, { createContext, useState } from "react";

//Se crea CartContext
export const CartContext = createContext();

//Se crea un Proveedor y con su parametro children
export const CartProvider = ({ children }) => {

  //Creamos un estado para almacenar los productos de nuestro carrito
  const [cart, setCart] = useState([]);

  // some() por defecto devuelve false, pero es true si algún elemento del array cumple con la condición
  const isInCart = (id) => cart.some((dato) => dato.id === id);

  //Funcion añadir producto al carro, pasandole como parametros data y cantidad
  const addItemCart = (data, cantidad) => {
    //comparamos el id del store con el id del producto
    if (isInCart(data.id)) {
      //
      const newCart = cart.map((cartElement) => {
        console.log(newCart);
        if (cartElement.id === data.id) {
          return {
            ...cartElement,
            cantidad: cartElement.cantidad + cantidad,
          };
        } else return cartElement;
      });
      console.log('Este es el nuevo cart:', newCart)
      return setCart(newCart);

    } else {
      setCart((e) => [...e, { ...data, cantidad }]);
    }
  };

  // Se elimina el item que corresponde al id que estoy pasando.
  const removeItem = (itemId) => {
    console.log("removeiteminside:", itemId);
    setCart(cart.filter((item) => item.id !== itemId));
  };
//Limpiar el carrito
  const clear = () => setCart([]);

//Total del carrito
  const totalItemsPrice = (dataPrice, dataQuantity) => {
    return dataPrice * dataQuantity;
  };

  const totalItemsCart = cart.reduce((acum, item) => {
    return acum + item.cantidad;
  }, 0);

  const totalPrice = cart.reduce((acum, item) => {
    let itemPrice = item.precio * item.cantidad;
    return acum + itemPrice;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        clear,
        addItemCart,
        removeItem,
        totalItemsPrice,
        totalItemsCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
