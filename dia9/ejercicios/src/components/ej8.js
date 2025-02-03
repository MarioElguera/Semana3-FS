// components/Tarea.js
'use client';

import React from 'react';

const Tarea = ({ texto, completada }) => {
    return (
        <p style={{ textDecoration: completada ? 'line-through' : 'none' }}>
            {texto}
        </p>
    );
};

export default Tarea;
