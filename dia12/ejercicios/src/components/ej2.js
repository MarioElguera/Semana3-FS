import React from 'react';

const App2 = () => {
    const styles = {
        title: {
            color: 'red',
        },
        button: {
            backgroundColor: 'green',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
    };

    return (
        <div>
            <h1 style={styles.title}>¡Hola, este es un título rojo!</h1>
            <button style={styles.button}>Botón Verde</button>
        </div>
    );
};

export default App2;
