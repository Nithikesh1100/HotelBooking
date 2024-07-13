// src/components/Success.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../assets/success-animation.json';
import '../styles/Success.css';

const Success = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="success-container">
            <Lottie options={defaultOptions} height={200} width={200} />
            <h1>Payment Successful!</h1>
            <p>Thank you for your purchase. You will be redirected to the home page shortly.</p>
        </div>
    );
};

export default Success;
