import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import { useAuth } from './authContext';
import Profile from './components/user/Profile';

function App() {
  const { currentUser } = useAuth();

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={currentUser ? <Dashboard /> : <Navigate to="/login" />} 
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;