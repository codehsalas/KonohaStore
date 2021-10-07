import React, { useState } from "react";
import './itemCount.css';

const ItemCount = ({ stock, initial, addItem }) => {
  const [counter, setCounter] = useState(initial);

  const addItems = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("No hay más stock");
    }
  };

  const restItems = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const addProductToCart = () => {
    if (counter > 0) {
      addItem(counter);
    } else {
      console.log("No puedes agregar cero items");
    }
  };

  return (
    <div>
      <p>Stock disponible: {stock} unidades</p>

      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="myButton" onClick={restItems}>
          -
        </button>

        <p className="counter-item">{counter}</p>

        <button type="button" className="myButton" onClick={addItems}>
          +
        </button>
        <div className="myButton-AddCart" onClick={addProductToCart}>
          Añadir al carrito
        </div>
      </div>

    </div>
  );
};

export default ItemCount;
