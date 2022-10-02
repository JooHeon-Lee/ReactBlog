import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";



const First = (props) => {
    const [myName, setMyName] = useState("LJH")
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
            <p>안녕하세요 {myName}입니다.</p>
            <button onClick={countUp}>Click me</button>
            <button 
                onClick={() => {
                    setMyName(myName === "LJH" ? "JooHeon" : "jh");
                }}
            >Change</button>
        </>
    );
};

export default First;