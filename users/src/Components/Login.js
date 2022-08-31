import React from 'react'
import { useState } from 'react';
import './style.css'

function Login() {
    const [ Username, setUsername ] = useState('');
    const [ showProfile, setShowProfile ] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsername(event.target.value);
    }

    const updateProfile = () => {
        setShowProfile(true);
    }

  return (
    <form className='login'>
        <h3>Login</h3>
        <input
         type="text"
          placeholder='Username...'
          onChange={ handleSubmit }
        />
        <input type="password" placeholder='Password...'/><br />
        <button onClick={ updateProfile }
        >
        LOGIN
        </button><br />
        { showProfile === true ? (<p>{ Username }</p>) : null }
    </form>
  )
}

export default Login