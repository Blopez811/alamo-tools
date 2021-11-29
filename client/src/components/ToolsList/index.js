//this is where the lists of tools for a single category goes
import React from 'react';
import Tool from '../Tool/index';
import { Link } from "react-router-dom";

const ToolsList = () => {
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