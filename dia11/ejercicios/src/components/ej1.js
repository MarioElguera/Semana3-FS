import React, { useState } from 'react';

const ChangeColorButton = () => {
    const [color, setColor] = useState(false);

    const changeColor = () => {
        setColor(!color);
    };

    return (
        <div>
            <h1>Ejercicio 1</h1>
            <br></br>
            <button onClick={changeColor} className={color ? 'oscuro' : 'claro'}>Cambiar Color</button>
        </div>
    );
};

export default ChangeColorButton;
