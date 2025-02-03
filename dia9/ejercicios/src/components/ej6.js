'use client';
import React from 'react';

const Alerta = ({ children }) => {
    return (
        <div className="contenedor">
            {children}
        </div>
    )
};

const App6 = () => {
    return (
        <Alerta>
            <h1>Hola, Mario</h1>
        </Alerta>
    );
}

export default App6;