import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Contact Book</h1>
      <NavLink to={"/"}>HOME</NavLink>
      <NavLink to={"/add"}>ADD</NavLink>
      <NavLink to={"/edit"}>EDIT</NavLink>
    </div>
  );
};

export default Navbar;
