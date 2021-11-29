import React from "react";
import backgroundImage from '../images/default-image-background.jpeg';
import Cart from "../components/Cart";
import SingleCategory from '../components/SingleCategory';

const CategoryDetails = () => {
  //This is where the query logic for the items in the database will go

    return (
        <div style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="container">
          <SingleCategory/>
          <Cart />
        </div>
        </div>
      );
};

export default CategoryDetails;