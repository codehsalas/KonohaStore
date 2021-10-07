import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './itemListContainer.css'
import catalogo from '../../assets/img/catalogo.jpg'

// import firebase
import db from "../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

//import components
import ItemList from "../../components/itemList/ItemList";
import Spinner from "../../components/spinner/Spinner";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const obtenerData = async () => {
      const data = await getDocs(collection(db, "fbseries"));
      //setProducts(data.docs);

      const dataItems = data.docs;
      console.log(dataItems);
      //setProducts(dataItems);

      categoryId
        ? setProducts(dataItems.filter((e) => e.data().category.id === categoryId))
        : setProducts(dataItems);
    };
    obtenerData();

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [categoryId]);

  return (
    <div className="item-list-container container">
      <div className="row">
        <h1 className="title-products text-center col-12"><img class="header-catalogo" src={catalogo}/></h1>

        {categoryId ? (
          <h2 className="text-center col-12">Categoría: {categoryId}</h2>
        ) : null}

        <div className="col-12 p-4">
          {isLoading ? (
            <Spinner />
          ) : (
            <ItemList className="col-12" products={products} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
