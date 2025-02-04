'use client';
import React, { useState, useEffect } from 'react';

const DetectarCualquierTecla = () => {
    const [teclaPresionada, setTeclaPresionada] = useState(null);

    useEffect(() => {
        const manejarTecla = (event) => {
            setTeclaPresionada(event.key);
            console.log(`Se presionó la tecla: ${event.key}`);
        };
        window.addEventListener('keydown', manejarTecla);
        return () => {
            window.removeEventListener('keydown', manejarTecla);
        };
    }, []);

    return (
        <div>
            <h1>Presiona cualquier tecla</h1>
            {teclaPresionada ? (
                <p>La última tecla presionada fue: {teclaPresionada}</p>
            ) : (
                <p>Presiona cualquier tecla para ver cuál fue detectada.</p>
            )}
        </div>
    );
};

export default DetectarCualquierTecla;
