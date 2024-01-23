import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import AddProduct from "../components/AddProduct";
import EditProducts from "../components/EditProducts";
import TodoDetails from "../components/TodoDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProducts />} />
      <Route path="/details/:id" element={<TodoDetails />} />
    </Routes>
  );
};

export default MainRoutes;
