

import React, { useState } from 'react'
import loginStyle from '../styles/Register.module.css';
import { getUsers } from '../Utils/localStorage';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const [isLogin, setIsLogin] = useState(false);

  const [userNameError, setUserNameError] = useState('');
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

  const validateUserName = () => {
   
    const regex=/^[a-zA-Z0-9_]{3,16}$/;
    if (!userName) {
      setUserNameError('Username is required!');
      return false;
    } else if (!regex.test(userName)) {
      setUserNameError('Username should be 3-16 characters and shouldn\'t include any special character!');
      return false;
    } else {
      setUserNameError('');
      return true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const emailValue=validateEmail();
    const userValue=validateUserName();
    const details = users.find((user) => user.email === email && user.userName === userName)

    
    if (details && emailValue && userValue) {
      alert("You can subscribe in pricing section!")
      const newUser = users.filter( (item) => {
        if(item.email === email) {
          item.isLogin = true
        }
        return item;
      })
      localStorage.setItem('users', JSON.stringify(newUser))
      // console.log(users)
      navigate("/pricing");
      // navigate('/login-success');

    } else {
        setMatch('user not found')
        
    }
  }

  return (
    <div className={loginStyle.container} >
      <form onSubmit={handleSubmit} className={loginStyle.form}>
        <h1 className={loginStyle.h1} >Login</h1>
        <div className={loginStyle.formInput}>
          <label>UserName</label>
          <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Username' />
          <span>{userNameError}</span>
        </div>
        <div className={loginStyle.formInput}>
          <label>Email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'  />
          <span>{emailError}</span>
        </div>
        <div>
            <span>{match}</span>
          <button type="submit" className={loginStyle.button} >
            submit
          </button>
          <p style={{margin: '2rem 0rem'}}>Don't have any account? <small onClick={()=>navigate('/register')} style={{color:'blue',cursor:'pointer'}}>Register</small></p>
        </div>

      </form>

    </div>
  )
}

export default Login;