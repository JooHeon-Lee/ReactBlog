import React from 'react';
import './App.css';
import Main from './Main';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import First from './First';
import Header from './components/Header';


const App = () => {
  return(
    <div className ='App'>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/First" element={<First />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};



export default App;
