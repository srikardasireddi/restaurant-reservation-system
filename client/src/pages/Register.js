import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'customer' });
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://restaurant-reservation-api-xbb2.onrender.com/api/auth/register', formData);
      alert('Registration Successful! Please Login.');
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <div className="page-container">
      <h2>Create Account</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Name" onChange={e => setFormData({...formData, name: e.target.value})} required />
        <input type="email" placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} required />
        <input type="password" placeholder="Password" onChange={e => setFormData({...formData, password: e.target.value})} required />
        <select onChange={e => setFormData({...formData, role: e.target.value})}>
          <option value="customer">Customer</option>
          <option value="admin">Administrator</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;