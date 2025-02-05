import React, { useState } from 'react';

const ChangeColorDiv = () => {
    const [color, setColor] = useState('');

    const onDoubleClickHandler = () => {
        setColor('red');
    };

    const onClickHandler = () => {
        console.log("Mario")
        setColor('blue');
    };

    return (
        <div>
            <h1>Ejercicio 2</h1>
            <br></br>
            <button onClick={onClickHandler} onDoubleClick={onDoubleClickHandler}> boton</button>
            <div style={{ backgroundColor: color, height: '100px', width: '100px' }}></div>
        </div>
    );
};

export default ChangeColorDiv;
