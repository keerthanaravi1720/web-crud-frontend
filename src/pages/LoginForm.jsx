

// import React, { useState } from 'react';
// import axios from 'axios';
// import './style.css';
// import Navbar from '../components/Navbar';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:9000/login', {
//         email,
//         password,
//       });

//       console.log(response.data); // Access the response data or perform any necessary actions

//       // Navigate to another page after successful login
//       navigate('/PostPage'); // Replace '/userdetails' with the desired route path
//     } catch (error) {
//       console.error(error); // Handle any errors that occur during the request
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className='cover'>
//         <form onSubmit={handleSubmit} className='f'>
//           <h2>Login</h2>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               placeholder="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               placeholder="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9000/login', {
        email,
        password,
      });

      const { token } = response.data;

      localStorage.setItem('token', token); // Store the token in localStorage

      // Navigate to another page after successful login
      navigate('/PostPage'); // Replace '/userdetails' with the desired route path
    } catch (error) {
      console.error(error); // Handle any errors that occur during the request
    }
  };

  return (
    <>
      <Navbar />
      <div className='cover'>
      
        <form onSubmit={handleSubmit} className='f'>
          <h2>Login</h2>
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          <img src="https://static.wixstatic.com/media/c837a6_0253876c52cc473e888d7842bc048c43~mv2.png/v1/fill/w_344,h_369,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1768049210.png" alt=""
          fetchpriority="high" className='i'></img>
        </form>
      
      </div>
    </>
  );
};

export default LoginForm;
