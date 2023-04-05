import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLink = () => {
  const navStyle = {
    backgroundColor: "#f1f1fe",
    padding: "10px 50px",
  };

  const styleNavLink = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <nav style={navStyle}>
      <small>
        if you want to have an "Active" class b default, use NavLink component
        instead of Link.
      </small>
      <br />
      <br />
      <NavLink style={styleNavLink} to="/">
        Home
      </NavLink>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <NavLink style={styleNavLink} to="/about">
        About
      </NavLink>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <NavLink style={styleNavLink} to="/products">
        Products
      </NavLink>
    </nav>
  );
};

export default NavbarLink;
