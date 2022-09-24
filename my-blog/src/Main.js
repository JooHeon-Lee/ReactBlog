import React from "react";
import { Link } from "react-router-dom";


const Main = (props) => {
    return(
        <>
            <h1>Main Page</h1>
            <ul>
                <Link to='/First'><li>First</li></Link>
            </ul>
        </>
    );
};

export default Main;