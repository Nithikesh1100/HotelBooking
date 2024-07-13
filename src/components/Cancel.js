// src/components/Cancel.js
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import cancelAnimation from '../assets/cancel-animation.json';
import '../styles/Cancel.css';

const Cancel = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/hotels');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="cancel-container">
            <Lottie options={{ animationData: cancelAnimation }} height={200} width={200} />
            <h1>Payment Cancelled</h1>
            <p>Your payment was not completed.</p>
            <Link to="/" className="home-link">Go to Home</Link>
        </div>
    );
};

export default Cancel;
