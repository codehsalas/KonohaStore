import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
import { CartContext } from "../cartcontext/Cartcontext";
import './itemDetail.css';

const ItemDetail = ({ data }) => {
  const [addQuantity, setAddQuantity] = useState(null);

  const { addItemCart } = useContext(CartContext);
  //console.log(addItemCart);

  const onAdd = (cantidad) => {
    //console.log(`Compré ${cantidad} items`);
    if (cantidad > 0) {
      setAddQuantity(cantidad);
      addItemCart(data, cantidad);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <img
            src={data.img}
            alt={data.titulo}
            className="picture-detail"
          ></img>
        </div>

        <div className="col-sm-12 col-md-6 text-left">
          <h2>{data.titulo}</h2>
          <h5>{data.serie}</h5>
          <h3 className="pt-2">${data.precio}</h3>
          <p className="pt-2">
            <span className="font-weight-bold">Descripción del producto: </span>
            <br />
            {data.descripcion}
          </p>
          <br></br>
          <div className="row botones-compra">
            <div className="col-8">
              {/* Se agregó el contador vs botón  */}
              {addQuantity === null ? (
                <ItemCount stock={10} initial={1} addItem={onAdd} />
              ) : (
                <NavLink to="/cart">
                  <button type="button" className="myButton-AddCart">
                    Ir al carrito
                  </button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
