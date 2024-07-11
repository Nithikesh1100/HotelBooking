import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SignIn.css';  // Import the CSS file
import {useNavigate} from 'react-router-dom'

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [token, setToken] = useState('');

    const navigate = useNavigate();

    const handleSignin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/api/auth/signin', { email, password });
            setToken(res.data.token);
            setMessage('Signin successful');
            navigate('/hotels');  // Redirect to the dashboard page after successful signin
            localStorage.setItem('token', res.data.token);
        } catch (err) {
            setMessage(err.response.data.message);
        }
    };

    return (
        <div className="signin-container">
            <h2 className="signin-title">Signin</h2>
            <form onSubmit={handleSignin} className="signin-form">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="signin-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="signin-input"
                />
                <button type="submit" className="signin-button">Signin</button>
            </form>
            {message && <p className="signin-message">{message}</p>}
        </div>
    );
};

export default Signin;
