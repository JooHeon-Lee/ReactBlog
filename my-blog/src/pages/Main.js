import React,{Component} from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return(
    <div>
    <div>
      <h2> This is Main </h2>
      <Link to='/'>go root</Link>
    </div>
  </div>
  )
}

export default Main;
