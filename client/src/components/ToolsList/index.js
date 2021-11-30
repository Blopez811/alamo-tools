//this is where the lists of tools for a single category goes
import React, { useEffect } from 'react';
import Tool from '../Tool/index';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_ALL_TOOLS } from '../../utils/queries';


const ToolsList = () => {
  // Category Lawn and Garden = 61a57a32ec2d3775db3263dc
  // Air Tools = 61a57a32ec2d3775db3263dd
  // Concrete Tools = 61a57a32ec2d3775db3263de


  const [state, dispatch] = useStoreContext();

  const { currentCategoryId } = state;

  const { loading, error, data } = useQuery(QUERY_ALL_TOOLS);


  // useEffect(() => {
  //   if (data) {
  //     dispatch({
  //       type: UPDATE_PRODUCTS,
  //       products: data.products
  //     });
  //   }
  // }, [data, loading, dispatch]);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;



  function filterTools() {
    console.log(data)
    let filterArr = data.tools.filter(tool => tool.category._id == "61a57a32ec2d3775db3263dd");
    console.log('filterArrbelow');
    console.log(filterArr)
    return filterArr
  }

  return (
    <div>
      <div className="container my-1">
        <Link to="/">
          ← GO TO HOME
        </Link>
      </div>
      <div className="flex-row">
        {filterTools().map(tool => (
          <Tool
            image= {tool.image}
            name= {tool.name}
           _id= {tool._id}
            price={tool.price}
            quantity={tool.quantity}
          />

      ))}

      </div>
    </div>
  )
}

export default ToolsList;