// src/pages/Home.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const username = location.state?.username;

  const handleLogout = () => {
    navigate('/');
  };

  if (!username) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>No username found. Please log in.</h2>
        <button onClick={() => navigate('/')}>Back to Login</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome, {username}!</h1>
      <p>You are now on the Home page.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
