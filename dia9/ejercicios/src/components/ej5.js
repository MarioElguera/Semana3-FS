'use client';
import React from 'react';

const Contenedor = ({ children }) => {
    return <section className="section">{children}</section>
}
const App5 = () => {
    return (
        <Contenedor>
            <h1>Hola, children dentro de un section!</h1>
        </Contenedor>
    );
}

export default App5;