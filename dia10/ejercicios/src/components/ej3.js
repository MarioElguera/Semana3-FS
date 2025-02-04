// AlternarEstado.js
'use client';
import React, { useState } from 'react';

const AlternarEstado = () => {
    const [estado, setEstado] = useState(false);
    const alternarEstado = () => {
        setEstado(!estado);
    };

    return (
        <div>
            <h2>Estado del botón: {estado}</h2>
            <button onClick={alternarEstado}>
                {estado ? 'Encender' : 'Apagar'}
            </button>
        </div>
    );
};

export default AlternarEstado;
