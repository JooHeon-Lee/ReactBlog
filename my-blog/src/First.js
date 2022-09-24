import React from "react";
import { Link } from "react-router-dom";


const First = (props) => {
    return(
        <>
            <h1>First Page</h1>
            <ul>
                <Link to='/'><li>Main</li></Link>
            </ul>
        </>
    );
};

export default First;