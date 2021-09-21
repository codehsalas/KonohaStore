import React, {useContext} from 'react';
import './navbar.css';
import { NavLink } from "react-router-dom";
import logo from "./img/logokonoha.png";
import CartWidget from '../cartWidget/CartWidget';
import { CartContext } from '../cartcontext/Cartcontext';

const Navbar = () => {
  const { totalItemsCart } = useContext(CartContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand  text-white" href="#"><img src={logo} alt="KonohaStore"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                 <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                 <NavLink to="/products" className="nav-link">
                  Productos
                </NavLink>
              </li>
               <li className="nav-item dropdown">
                <p
                  to="/products"
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Series
                </p>
                <div
                  className="dropdown-menu text-center style-dropdown"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavLink to="/category/naruto" className="dropdown-item">
                    Naruto
                  </NavLink>
                  <NavLink to="/category/demonslayer" className="dropdown-item">
                    Demon Slayer
                  </NavLink>
                  <NavLink to="/category/dragonball" className="dropdown-item">
                    Dragon Ball Super
                  </NavLink>
                </div>
              </li>

              <form className="d-flex">
                <input className="form-control me-2" type="search" aria-label="Search"/>
                <button className="btn btn-secondary" type="submit">Buscar</button>
              </form>
            </ul>
            {totalItemsCart !== 0 ? (
              <NavLink to="/cart" className="cart-icon-md-sm text-decoration-none">
                <CartWidget />
              </NavLink>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
