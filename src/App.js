

import { useState } from 'react';
import './App.css';
import { Cart } from './Components/Cart';
import Employee from './Components/Employee';
import { NavBar } from './Components/NavBar';
import { Products } from './Components/Products';
import { Project } from './Components/Project';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddProductForm } from './Components/AddProductForm';

function App() {
  const [cartArray,setCartArray]=useState([]);
  return ( 
    <div className="">
         {/* <Employee/>
         <Project/> */} 
        <NavBar cartArray={cartArray}/>
      <Routes>
          <Route element={<Products setCartArray={setCartArray}/>} path='/'/>
          <Route element={<Cart cartArray={cartArray} setCartArray={setCartArray}/>} path='/cart'/>
      </Routes>

    </div>
  );
}

export default App;
