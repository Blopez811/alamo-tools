import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import CategoryList from '../components/CategoryList';

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <CategoryList />
      <Cart />
    </div>
  );
};

export default Home;
