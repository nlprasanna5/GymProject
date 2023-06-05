

import React, { useState } from 'react'
import loginStyle from '../styles/Register.module.css';
import { getUsers } from '../Utils/localStorage';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password,setPassword]=useState('');
  const [email, setEmail] = useState('');
  const [passwordError,setPasswordError]=useState('');
  const [emailError, setEmailError] = useState('');
  const [match,setMatch]=useState('');
  

  const navigate = useNavigate();
  const users = getUsers();

  const validateEmail = () => {
    const regex = /^\S+@\S+\.\S+$/;
    if (!email) {
      setEmailError('Email is required!');
      return false;
    } else if (!regex.test(email)) {
      setEmailError('It should be a valid email address!');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  }

  const validatePassword = () => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
    if (!password) {
      setPasswordError('Password is required!');
      return false;
    } else if (!regex.test(password)) {
      setPasswordError('Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const emailValue=validateEmail();
    const userPassword=validatePassword();
    const details = users.find((user) => user.email === email && user.password === password);

    let loginIndex = users.findIndex((user) => user.email === email && user.password === password);
    
    let loginDetails;
    if(loginIndex+1){
      loginDetails=users[loginIndex];
      console.log(loginDetails);
      localStorage.setItem('loginDetails',JSON.stringify(loginDetails))
     
    }
    console.log("outside")

    
    if (details && emailValue && userPassword) {
      alert("If you haven't subscribed,you can subscribe in pricing section!")
      localStorage.setItem('login',JSON.stringify(true))
      navigate("/pricing");

    } else {
        setMatch('user not found')
        
    }
  }

  return (
    <div className={loginStyle.container} >
      <form onSubmit={handleSubmit} className={loginStyle.form}>
        <h1 className={loginStyle.h1} >Login</h1>
        
        <div className={loginStyle.formInput}>
          <label>Email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'  />
          <span>{emailError}</span>
        </div>
        <div className={loginStyle.formInput}>
          <label>Password</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
          <span>{passwordError}</span>
        </div>
        <div >
            <span>{match}</span>
            <div className={loginStyle.loginButton}>
          <button type="submit" className={loginStyle.buttons} >
            submit
          </button>
          </div>
          <p style={{margin: '2rem 0rem'}}>Don't have any account? <small onClick={()=>navigate('/register')} style={{color:'blue',cursor:'pointer'}}>Register</small></p>
        </div>

      </form>

    </div>
  )
}

export default Login;