import React from "react";

import {Routes,Route} from "react-router-dom"

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import Classes from "./pages/Classes";
import Header from "./components/header/Header";
 
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
   <div>
    <Routes>
      <Route  path="/"  element={<Home/>}/>
      <Route  path="/classes"  element={<Classes/>}/>
      <Route  path="/login"  element={<Login/>}/>
      <Route  path="/register"  element={<Register/>}/>
      <Route  path="/aboutus"  element={<AboutUs/>}/>
      <Route  path="/blogs"  element={<Blogs/>}/>
    </Routes>
    </div>
    </div>
  );
}

export default App;
