// components/Avatar.js
'use client';
import React from 'react';

const Caja = ({ children }) => {
    return (
        <div style={{ borderRadius: '20%', backgroundColor: 'red', width: '50%' }} >
            {children}
        </div >
    );
};

const App10 = () => {
    return (
        <Caja>
            Hola , Ejercicio 10 | div y borde
        </Caja>
    )
}

export default App10;
