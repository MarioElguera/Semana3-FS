'use client';
import React from 'react';

const Button = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>
};

const showAlert = () => {
    alert("Boton presionado");
}

const App3 = () => {
    return <Button onClick={showAlert} text="Hola212123, haz click aqui" />
}

export default App3;