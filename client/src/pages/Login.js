import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://restaurant-reservation-api-xbb2.onrender.com/api/auth/login', formData);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('role', res.data.role);
            alert("Login Successful!");
            navigate('/dashboard');
        } catch (err) {
            alert(err.response?.data?.msg || "Login failed");
        }
    };

    return (
        <div className="page-container">
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <input type="email" placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} required />
                <input type="password" placeholder="Password" onChange={e => setFormData({...formData, password: e.target.value})} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;