import React from "react";
import Cart from "../components/Cart";
import CategoryList from '../components/CategoryList';
import backgroundImage from '../images/default-image-background.jpeg';
import ContactUs from '../components/ContactUs'

const Home = () => {
  return (
    <div style={{backgroundImage: `url(${backgroundImage})`}}>
    <div className="container">
      <CategoryList />
      <Cart />
    </div>
    </div>
  );
};

export default Home;
