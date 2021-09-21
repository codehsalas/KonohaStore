import React, { useContext } from "react";
import { CartContext } from "../../components/cartcontext/Cartcontext";

const Cartitem = ({ dataItem }) => {
  const { removeItem, totalItemsPrice } = useContext(CartContext);

console.log(dataItem.id);

  return (
    <tbody>
      <tr>
        <td>
          <img
            className="img-fluid w-10 text-center img-cart-item"
            src={dataItem.img}
            alt={dataItem.titulo}
          ></img>
        </td>
        <td>{dataItem.titulo}</td>
        <td className="text-center">{dataItem.precio}</td>
        <td className="text-center">{dataItem.cantidad}</td>
        <td className="text-center">
          {totalItemsPrice(dataItem.precio, dataItem.cantidad)}
        </td>
        <td className="text-center">
          <button
            className="btn fas fa-trash-alt text-center"
            onClick={() => removeItem(dataItem.id)}
          ></button>
        </td>
      </tr>
    </tbody>
  );
};


export default Cartitem
