import React from "react";
import './item.css'
import comprar from '../../assets/img/comprar.svg'

const Item = ({ data }) => {
  return (
    <div className="conten-card">
      <div className="card-item">
        <img
          className="img-fluid w-10"
          src={data.img}
          alt={data.titulo}
        ></img>


      <div className="detail-card">
        <div>
          <h5 className="card-title">{data.titulo}</h5>

        <div>
          <h4>${data.precio}</h4>
        </div>

        </div>
        <div>
          <button><img className="btn-comprar" src={comprar}/></button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Item;
