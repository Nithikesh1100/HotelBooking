// src/components/Signin.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SignIn.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin } from '../Reducers/authSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignin = async (e) => {
        e.preventDefault();

        if (identifier === '' || password === '') {
            setMessage('Enter both the credentials');
            toast.error('Enter both the credentials');
            return;
        }

        try {
            const res = await axios.post('http://localhost:3000/api/auth/signin', {identifier, password });
            dispatch(signin(res.data.token));
            localStorage.setItem('username', res.data.username);
            setMessage('Signin successful');
            
            toast.success('Signin successful');
            navigate('/');
        } catch (err) {
            setMessage(err.response.data.message);
            toast.error(err.response.data.message);
        }
    };

    return (
        <div className="signin-container">
            <h2 className="signin-title">Signin</h2>
            <form onSubmit={handleSignin} className="signin-form">
                <input
                    type="email"
                    placeholder="Username or Email"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
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

