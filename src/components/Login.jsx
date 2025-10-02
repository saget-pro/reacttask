// src/pages/Login.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Login component mounted');
  }, []);

  const handleLogin = () => {
    if (username.trim()) {
      navigate('/home', { state: { username } }); // Pass data via navigate
    } else {
      alert('Please enter a username');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
