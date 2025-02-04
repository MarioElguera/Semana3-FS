// Formulario.js
'use client';
import React, { useState } from 'react';

const Formulario = () => {
    const [valor, setValor] = useState('');
    const [mostrarValor, setMostrarValor] = useState('');

    const manejarCambio = (e) => {
        setValor(e.target.value);
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        setMostrarValor(valor);
    };

    return (
        <div>
            <form onSubmit={manejarEnvio}>
                <label>
                    Ingresa un valor:
                    <input
                        type="text"
                        value={valor}
                        onChange={manejarCambio}
                        placeholder="Escribe algo..."
                        style={{ color: 'black' }}
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>

            {mostrarValor && (
                <div>
                    <h2>Valor ingresado: {mostrarValor}</h2>
                </div>
            )}
        </div>
    );
};

export default Formulario;
