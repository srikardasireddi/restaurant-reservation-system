import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', formData);
            
            // Save token and role to use later
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('role', res.data.role);
            
            alert("Login Successful!");
            navigate('/dashboard'); // Go to the main page
        } catch (err) {
            alert(err.response?.data?.msg || "Login failed");
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <input type="email" placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} required /><br/>
                <input type="password" placeholder="Password" onChange={e => setFormData({...formData, password: e.target.value})} required /><br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;