//this is where the lists of tools for a single category goes
import React from 'react';
import Tool from '../Tool/index';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_TOOLS_BY_CATEGORY } from '../../utils/queries';


const ToolsList = () => {
  const [state, dispatch] = useStoreContext();

  // const { currentCategory } = state;
  let category = "61a57a32ec2d3775db3263dc";
  // button function needs to give category id as prop
  const { loading, error, data } = useQuery(QUERY_TOOLS_BY_CATEGORY, {variables:{category}});

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  

  if(!loading) {
    console.log("this is the start of query")
    console.log(data)
    console.log('this is the end')
  }


    return(
        <div>
        <div className="container my-1">
      <Link to="/">
        ← GO TO HOME
      </Link>
      </div>
            <Tool/>
        </div>
    )
}

export default ToolsList;