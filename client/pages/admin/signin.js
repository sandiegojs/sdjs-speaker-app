import React, { useState } from 'react';
import Router from 'next/router';

import { setToken } from '../../lib/auth';

const AdminSignin = () => {

  const [data, setData] = useState({
    identifier: '',
    password: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await fetch(`${process.env.API_BASE_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifier: data.identifier,
        password: data.password
      })
    });
    const responseData = await response.json();
    setToken(responseData);
  }

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  };


  return (
    <div id='admin-top-div'>
      <div className='signUp-container'>
        <div className='form-container login'>
          <form onSubmit={handleSubmit}>
            <h3>SDJS Admin Login</h3>
            <div className="container">
              <label htmlFor="username"><b>Username</b></label>
              <input type="text" placeholder="Username" id='identifier' name="identifier" onChange={handleChange}
              required />
              <label htmlFor="password"><b>Password</b></label>
              <input type="password" placeholder="Password" id='password' onChange={handleChange} name="password" required />
              <button type="submit" id='submit' className='btn'>Login</button>
              <label id='remember'>
                <input type="checkbox" name="remember" /> Remember me
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


export default AdminSignin;
