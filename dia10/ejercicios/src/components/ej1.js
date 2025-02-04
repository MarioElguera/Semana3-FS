// Contador.js
'use client';
import React, { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);

    const aumentarContador = () => {
        setContador(contador + 1);
    };

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={aumentarContador}>Aumentar contador</button>
        </div>
    );
};

export default Contador;
