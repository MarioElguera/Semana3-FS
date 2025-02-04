import React, { useState } from 'react';

const ShowAlert = () => {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };

    if (showAlert) {
        alert('¡Has hecho clic en el botón!');
        setShowAlert(false);
    }

    return (
        <div>
            <h1>Ejercicio 10</h1>
            <button onClick={handleClick}>Haz clic aquí</button>
        </div>
    );
};

export default ShowAlert;
