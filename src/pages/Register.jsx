import React, { useState, useEffect, useRef } from "react";
import FormInput from "../Utils/FormInput";
import { getUsers } from "../Utils/localStorage";
import registerStyle from '../styles/Register.module.css';
import { useNavigate } from "react-router-dom";


function Register() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [duplicate, setDuplicate] = useState('');
  const firstNameRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  const validateUserName = () => {
    const regex = /^[a-zA-Z0-9_]{3,16}$/;
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

  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password!');
      return false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords don\'t match!');
      return false;
    } else {
      setConfirmPasswordError('');
      return true;
    }
  }


  function handleSubmit(e) {
    e.preventDefault();
    const isUserNameValid = validateUserName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isUserNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      const users = getUsers();
      const checkDuplicateRegister = users.find((item) => {
        return item.email === email && item.userName === userName;

      });

      if (checkDuplicateRegister) {
        setDuplicate('User already exists')
      } else {
        setDuplicate('');
        users.push({
          userName,
          email,
          password,
          confirmPassword,
        });

        localStorage.setItem('users', JSON.stringify(users));
        alert('Successfully registered');
        navigate("/login");
      }


    }

    setEmail('');
    setUserName('');
    setPassword('');
    setConfirmPassword('');

  }

  return (
    <>

      <div className={registerStyle.container}>
        <form
          className={registerStyle.form}
          onSubmit={handleSubmit}

        >
          <h1 className={registerStyle.h1}>Register</h1>
          <FormInput
            label="User Name:"
            id="usertName"
            name="userName"
            type='text'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            inputRef={firstNameRef}
            placeholder='Username'
            errorMessage={userNameError}
          />

          <FormInput
            label="Email:"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder='Email'
            errorMessage={emailError}
          />
          <FormInput
            label="Password:"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder='Password'
            errorMessage={passwordError}
          />
          <FormInput
            label="Confirm Password:"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder='Confirm password'
            errorMessage={confirmPasswordError}
          />


          <button type="submit" className={registerStyle.button} >
            submit
          </button>
          <div className={registerStyle.duplicate}>
            <small style={{ color: 'red' }}>{duplicate}</small>
            <small>Already have an account? <span onClick={() => navigate('/login')} className={registerStyle.account}>Login</span></small>
          </div>

        </form>
      </div>
    </>
  );
}

export default Register;
