import React from 'react';
import './App.css';
import Main from './Main';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import First from './First';


const App = () => {
  return(
    <div className ='App'>
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
