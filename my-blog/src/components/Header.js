import React, { Component } from "react";
import {  
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Outlet
} from "react-router-dom";

const Header = () => {
    return (
      <div className='header_grid'>
      <div className='acenter'>

        <Link className='link_tit' to='/'> <h3> JHLee's Blog </h3> </Link>
        <Link className='link_tit' to='/main'> <h3> Main </h3> </Link>
        <Link className='link_tit' to='/Write'> <h3> Write </h3> </Link>

      </div>

      <div className='acenter'> 
          <h5> 관리자 로그인 </h5>
      </div>
      <Outlet/>
  </div>
    )
}


export default Header;