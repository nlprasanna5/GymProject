import React from "react";

import {Routes,Route} from "react-router-dom"

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import Classes from "./pages/Classes";
import Header from "./components/header/Header";
import LoginMessage from "./components/SuccessMessage/LoginSuccess";
 import RegisterMessage from "./components/SuccessMessage/RegisterSuccess";


import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer";
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
      <Route path='/login-success' element={<LoginMessage/>}/>
      <Route path='/register-success' element={<RegisterMessage/>}/>
    </Routes>
    </div>
    <div>
    <Footer/>
    </div>
    </div>
  );
}

export default App;
