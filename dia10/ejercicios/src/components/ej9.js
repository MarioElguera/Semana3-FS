'use client';
import React, { useState, useEffect } from 'react';

const RandomCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIncrease = Math.floor(Math.random() * 10) + 1;
            setCounter(prevCounter => prevCounter + randomIncrease);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <h1>Contador Aleatorio: {counter}</h1>
        </div>
    );
};

export default RandomCounter;
