import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({ click }) {
  return (
    <nav className="navbar">
      {/* Log */}
      <div className="navbar__logo">
        <h2>Mern Shopping Cart</h2>
      </div>
      {/* Links    */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}
