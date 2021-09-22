import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { CartProvider } from './components/cartcontext/Cartcontext'

import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import Navbar from './components/navbar/Navbar'

import Home from './views/home/Home'
import Cart from './views/cart/Cart'
import Pagar from './views/pagar/Pagar'

function App() {
  return (
  <CartProvider>
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/products" component={ItemListContainer}></Route>
          <Route
            path="/category/:id"
            component={ItemListContainer}
          ></Route>
          <Route path="/item/:id" component={ItemDetailContainer}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/pagar" component={Pagar}></Route>
        </Switch>
      </div>
    </Router>
  </CartProvider>
  );
}

export default App;
