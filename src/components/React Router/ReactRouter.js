import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import NavbarLink from "./NavbarLink";
import OrderSummary from "./OrderSummary";
import NoMatch from "./NoMatch";
import Products, { FeaturedProducts, NewProducts } from "./Products";

const ReactRouter = () => {
  return (
    <div>
      ReactRouter
      {/* <Navbar /> */}
      <NavbarLink />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />}>
          <Route path="feature" element={<FeaturedProducts />} />
          {/* if you want to render a component in the parent level, make use of "index" attribute instead of "path" */}
          <Route index element={<NewProducts />} />
        </Route>
        <Route path="order-summary" element={<OrderSummary />} />
        {/* the * symbolyzes that it will render only if no match is found  */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default ReactRouter;
