import React from 'react'
import { useState } from 'react';
import './style.css'
import { LoginContext } from '../Contexts/LoginContext';
function Login() {
    const handleformChange = (event) => {
        setUsername(event.target.value);
    }

    const showProfile = () => {
        setShowProfile(true);
    }
  return (
    <form className='login'>
        <h3>Login</h3>
        <input
         type="text"
          placeholder='Username...'
          onChange={ handleformChange }
        />
        <input type="password" placeholder='Password...'/><br />
        <button onClick={ showProfile }>LOGIN</button><br />
    </form>
  )
}

export default Login