import React from "react";
import { Link } from "react-router-dom";
// Importe de elementos
import Item from "../item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="col-12">
      <div className="row row-propiedades">
        {products.map((product) => {
          const item = product.data();
          return (
            <div
              key={item.id}
              className="col-sm-12 col-md-6 col-lg-4 mb-4"
            >
              <Link to={`/item/${item.id}`}>
                <Item data={item} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
