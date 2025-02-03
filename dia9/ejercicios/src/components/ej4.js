'use client';
import React from 'react';

const Tarjeta = ({ children }) => {
    return <div className="contenedor">{children}</div>
}
const App4 = () => {
    return (
        <Tarjeta>
            <h1>Hola, Mario</h1>
        </Tarjeta>
    );
}

export default App4;