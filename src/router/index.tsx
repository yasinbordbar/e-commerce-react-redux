import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../views/Products";
import EachProduct from "../views/EachProduct";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Products />} />
      <Route path={"/category/:categoryTitle"} element={<Products />} />
      <Route path={`/product/:productId`} element={<EachProduct />} />
    </Routes>
  );
};

export default AllRoutes;
