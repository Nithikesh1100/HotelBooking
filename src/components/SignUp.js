
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SignUp.css';  // Import the CSS file
import { toast } from 'react-toastify';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        if (email === '' || password === '' || username === '') {
            setMessage('Enter all the credentials');
            toast.error('Enter all the credentials');
            return;
        }

        try {
            const res = await axios.post('http://localhost:3000/api/auth/signup', { username, email, password });
            
            setMessage(res.data.message);
            toast.success(res.data.message);
        } catch (err) {
            setMessage(err.response.data.message);
            toast.error(err.response.data.message);
        }
    };

    return (
        <div className="signup-container">
            <h2 className="signup-title">Signup</h2>
            <form onSubmit={handleSignup} className="signup-form">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="signup-input"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="signup-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="signup-input"
                />
                <button type="submit" className="signup-button">Signup</button>
            </form>
            {message && <p className="signup-message">{message}</p>}
        </div>
    );
};

export default Signup;
