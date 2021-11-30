//this is where the lists of tools for a single category goes
import React from 'react';
import Tool from '../Tool/index';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_TOOLS_BY_CATEGORY } from '../../utils/queries';


const ToolsList = () => {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_TOOLS_BY_CATEGORY);

  if(!loading) {
    console.log(data)
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