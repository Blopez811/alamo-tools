import React from "react";
import Cart from "../components/Cart";
import ToolList from '../components/ToolsList';

const CategoryDetails = () => {
  //This is where the query logic for the items in the database will go

    return (
        <div className="container">
          <ToolList/>
          <Cart />
        </div>
      );
};

export default CategoryDetails;