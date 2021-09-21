import React from "react";

//import de componentes
import ItemListContainer from "../../components/itemListContainer/ItemListContainer";

const Home = () => {
  return (
    <div>
      <ItemListContainer greeting="Hola soy un item!" />
    </div>
  );
};

export default Home;
