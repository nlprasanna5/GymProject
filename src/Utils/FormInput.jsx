import React from "react";
// import './registerStyle.css';
// import {registerStyle} from '../../styles/Register.module.css';
import registerStyle from '../styles/Register.module.css'

function FormInput({ label, id, name, value,placeholder, onChange, inputRef, type,errorMessage}) {
  return (
    <div className={registerStyle.formInput}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        ref={inputRef} className={registerStyle.content}
     
      />
      <span className={registerStyle.errMessage}>{errorMessage}</span>
    </div>
  );
}

export default FormInput;
