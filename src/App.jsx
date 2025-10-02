// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Home from './components/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
