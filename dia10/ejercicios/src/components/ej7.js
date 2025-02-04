'use client';
import React, { useState } from 'react';

const ListaConElementos = () => {
    const [lista, setLista] = useState([]);
    const [nuevoElemento, setNuevoElemento] = useState('');

    const manejarCambio = (e) => {
        setNuevoElemento(e.target.value);
    };

    const agregarElemento = () => {
        if (nuevoElemento.trim() !== '') {
            setLista([...lista, nuevoElemento]);
            setNuevoElemento('');
        }
    };

    return (
        <div>
            <h1>Lista de Elementos</h1>
            <input
                type="text"
                value={nuevoElemento}
                onChange={manejarCambio}
                placeholder="Escribe un elemento"
                style={{ color: 'black' }}
            />
            <button onClick={agregarElemento}>Agregar Elemento</button>
            <ul>
                {lista.map((elemento, index) => (
                    <li key={index}>{elemento}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListaConElementos;
