import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";



const First = (props) => {

    const [count, setCount] = useState(0);
    const countUp = () => setCount(count + 1);

    useEffect(() => {
        console.log("useEffect!!",count)
    },[count])

    return(
        <>
            <h1>First Page</h1>
            <ul>
                <Link to='/'><li>Main</li></Link>
            </ul>
            <p>{count}번 클릭!</p>
            <button onClick={countUp}>Click me</button>
        </>
    );
};

export default First;