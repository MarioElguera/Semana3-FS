'use client';
import React, { useState, useEffect } from 'react';

const CambiarColorFondo = () => {
    const [colorFondo, setColorFondo] = useState('#ffffff');

    const generarColorAleatorio = () => {
        const letras = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letras[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    useEffect(() => {
        const intervalo = setInterval(() => {
            const nuevoColor = generarColorAleatorio();
            setColorFondo(nuevoColor);
        }, 3000);

        return () => {
            clearInterval(intervalo);
        };
    }, []);

    return (
        <div>
            <h1>Color de fondo: {colorFondo}</h1>
            <p>El color de fondo cambiará cada 3 segundos.</p>

            <div className='cuadro' style={{ height: '100px', width: '100px', backgroundColor: colorFondo }} >
                Color aleatorio
            </div>
        </div>
    );
};

export default CambiarColorFondo;
