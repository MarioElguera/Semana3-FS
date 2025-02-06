import React from 'react';

const App5 = () => {
    const baseStyle = {
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const buttonStyle1 = {
        ...baseStyle,
        backgroundColor: 'green',
    };

    const buttonStyle2 = {
        ...baseStyle,
        backgroundColor: 'blue',
    };

    return (
        <div>
            <a>Ejercicio 5</a>
            <button style={buttonStyle1}>Botón Verde</button>
            <button style={buttonStyle2}>Botón Azul</button>
        </div>
    );
};

export default App5;
