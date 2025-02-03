// components/BotonPersonalizado.js
'use client';
import React from 'react';

const BotonPersonalizado = ({ children, onClick }) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
};

const Ej12 = () => {
    const manejarClick = () => {
        alert('¡Botón presionado!');
    };

    return (
        <div>
            <h1>Bienvenido</h1>
            <BotonPersonalizado onClick={manejarClick}>Haz clic aquí, ej12</BotonPersonalizado>
        </div>
    );
};

export default Ej12;
