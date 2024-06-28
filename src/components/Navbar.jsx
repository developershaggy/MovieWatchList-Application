import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div id="navbackground">
      <div className="navbar">
      <h1>Watchlist App</h1>
      <div className="header">
        <Link to={"/"}>Home</Link>
        <Link to={"/addmovie"}>Add Movie</Link>
      </div>
    </div>

    </div>
  );
};

export default Navbar;
