import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    backgroundColor: "#f1f1fe",
    padding: "10px 50px",
  };
  return (
    <nav style={navStyle}>
      <Link to="/">Home</Link>&nbsp; &nbsp; &nbsp; &nbsp;
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;
