import React, { useState } from 'react';
import styled from './Form.module.css';
import validation from './Validation';

const Form = ({login}) => {

  const [userData,setUserData] = useState({
    email:'',
    password:''
  })

  const [errors,setErrors] = useState({
    email:'',
    password:''
  })

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({
      ...userData,
      [property]:value
    })
    validation({
      ...userData,
      [property]:value
    },errors,setErrors,property)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  }

  return (
    <form onSubmit={handleSubmit} className={styled.containerForm} >
      <div className={styled.containerUser} >
        <label htmlFor="">Email:</label>
        <input type="text" name='email' value={userData.email} onChange={handleChange} />
      </div>
        <p>{errors.email}</p>
      <div className={styled.containerPassword} >
        <label htmlFor="">Contraseña:</label>
        <input type="text" name='password' value={userData.password} onChange={handleChange} />
      </div>
        <p>{errors.password}</p>
      <button className={styled.buttonForm}>Login</button>
    </form>
  );
}

export default Form;
