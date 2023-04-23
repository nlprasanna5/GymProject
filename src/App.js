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
import Trainers from "./pages/trainers/Trainers";
import GymPricing from "./components/Pricing/Pricing";
import BasicPriceActivity from "./pages/BasicPriceActivity";
import PremiumPriceActivity from "./pages/PremiumPriceActivity";
import ElitePriceActivity from "./pages/ElitePriceActivity";

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
      <Route path='/trainers' element={<Trainers/>}/>
      <Route path='/pricing' element={<GymPricing/>} />
      <Route path='/basic' element={<BasicPriceActivity/>} />
      <Route path='/premium' element={<PremiumPriceActivity/>} />
      <Route path='/elite' element={<ElitePriceActivity/>}  />
    </Routes>
    </div>
    <div>
    <Footer/>
    </div>
    </div>
  );
}

export default App;
