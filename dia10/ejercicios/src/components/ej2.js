// ObtenerDatosAPI.js
'use client';
import React, { useState, useEffect } from 'react';

const ObtenerDatosAPI = () => {
    const [datosAPI, setDatosAPI] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/charmander')
            .then((response) => response.json())
            .then((data) => setDatosAPI(data.abilities))
            .catch((error) => console.error('Error al obtener los datos:', error));
    }, []);

    return (
        <div>
            <h3>Datos de la API:</h3>
            {datosAPI ? (
                <pre>
                    <code>{JSON.stringify(datosAPI, null, 2)}</code></pre>
            ) : (
                <p>Cargando datos...</p>
            )}
        </div>
    );
};

export default ObtenerDatosAPI;
