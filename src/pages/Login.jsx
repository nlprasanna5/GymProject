

import React, { useState } from 'react'
import loginStyle from '../styles/Register.module.css';
import { getUsers } from '../Utils/localStorage';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  

  const navigate = useNavigate();
  const users = getUsers();

  function handleSubmit(e) {
    e.preventDefault();
    const details = users.find((user) => user.email === email && user.userName === userName)
    if (details) {
      navigate('/');

    }
  }

  return (
    <div className={loginStyle.container} >
      <form onSubmit={handleSubmit} className={loginStyle.form}>
        <h1 className={loginStyle.h1} >Login</h1>
        <div className={loginStyle.formInput}>
          <label>UserName</label>
          <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)}  />
        </div>
        <div className={loginStyle.formInput}>
          <label>Email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}  />
        </div>
        <div>
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