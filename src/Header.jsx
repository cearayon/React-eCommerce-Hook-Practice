import React from "react";
import { Link, NavLink } from "react-router-dom";

const activeStyle = {
  color: "purple",
};

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink activeStyle={activeStyle} to="/"> 
            <img alt="Carved Rock Fitness" src="/images/logo.png" />
            </NavLink>
            <li>
              <NavLink activeStyle={activeStyle} to="/shoes">Shoes</NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} to="/cart">Cart</NavLink>
            </li>
          </li>
        </ul>
      </nav>
    </header>
  );
}
