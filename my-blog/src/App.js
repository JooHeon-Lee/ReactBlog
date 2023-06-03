import React, { Component } from 'react';
import './App.css';
import {  
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom";

import {Home,Main,Write} from './pages/index.js';
import {default as Header} from './components/Header';

/**
 * 
 * React Router
 * 1.index.js BrowserRouter 로 감싸기.
 * 2. App.js 공통 컴포넌트 삽입 및 라우터 정의
 * 
 */

const App = () =>
{
    return (
      <>
      <Header/>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/main' element = {<Main/>}></Route>
      <Route path='/write' element = {<Write/>}></Route>
    </Routes>
    </>
)
}

export default App;
