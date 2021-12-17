import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <NavLink to="/" activeClassName="active" exact>
        <span>{}icon</span> Home
      </NavLink>
      <NavLink to="/movies" activeClassName="active">
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
