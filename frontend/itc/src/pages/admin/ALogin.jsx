import React, { useState } from 'react';
import api from '../../config/axios.js'; // adjust path as per your project
import { useNavigate } from 'react-router-dom';

const ALogin = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/admin-login/', {
        adminId,
        password,
      });

      if (response.data.success) {
        sessionStorage.setItem('adminToken', response.data.token);
        navigate('/admindashboard'); 
      } else {
        setError(response.data.error || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      setError('Server error');
    }
    console.log({ adminId, password });
  };

  return (
    <div style={{ padding: '50px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Admin ID:</label>
          <input
            type="text"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={{ marginTop: '20px' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default ALogin;
