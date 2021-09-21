import React from "react";

const Item = ({ data }) => {
  return (
    <div>
      <div className="view zoom overlay z-depth-2 rounded">
        <img
          className="img-fluid w-50"
          src={data.img}
          alt={data.titulo}
        ></img>
      </div>

      <div className="text-center pt-4 border-bottom1">
        <h5 className="card-title">{data.titulo}</h5>
        <h6 className="mb-4 price-text">Precio: ${data.precio}</h6>
      </div>
    </div>
  );
};

export default Item;
