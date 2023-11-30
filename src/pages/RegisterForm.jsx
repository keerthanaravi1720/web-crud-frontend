import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import Navbar from '../components/Navbar';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post('http://localhost:8000/users'
      const response = await axios.post('http://localhost:9000/users', {

        name,
        email,
        password,
      });

      console.log(response.data); // Access the response data or perform any necessary actions
    } catch (error) {
      console.error(error); // Handle any errors that occur during the request
    }
  };
  const register=() =>{
    alert('Success');
  }

  return (
    <>
    <Navbar/>
    <div className="cover">
   
      <form onSubmit={handleSubmit}>
      
        <h2>Register</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password" placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={register}>Register</button>
        <img src="https://static.wixstatic.com/media/c837a6_28e8e9cabb13444a8a1840cbf7c4fa07~mv2.png/v1/fill/w_411,h_450,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1580821522.png" alt="" 
        fetchpriority="high" className='i2'></img>
      </form>
    </div>
    </>
  );
};

export default RegisterForm;

