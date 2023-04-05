import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>Products</div>
      <input type="search" placeholder="iPhone" />
      <br />
      <br />
      <nav>
        <Link to="feature">Feature</Link>&nbsp; &nbsp;
        <Link to="new">New</Link>
        {/* Outlet component is used to help Products component render other nested routes  */}
      </nav>
      <br />
      <Outlet />
    </>
  );
};

const FeaturedProducts = () => {
  return <div>This is a FeaturedProducts page.</div>;
};

const NewProducts = () => {
  return <div>This is a NewProducts page.</div>;
};

export default Products;
export { FeaturedProducts, NewProducts };
