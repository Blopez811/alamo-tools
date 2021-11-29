import React from "react";
import backgroundImage from '../images/default-image-background.jpeg';
import Cart from "../components/Cart";
import ToolList from '../components/ToolsList';

const CategoryDetails = () => {
  //This is where the query logic for the items in the database will go

    return (
        <div style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="container">
          <ToolList/>
          <Cart />
        </div>
        </div>
      );
};

export default CategoryDetails;