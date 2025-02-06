import React, { useState } from 'react';

const App4 = () => {
    const [buttonColor, setButtonColor] = useState('green');

    const handleMouseEnter = () => {
        setButtonColor('orange');
    };

    const handleMouseLeave = () => {
        setButtonColor('green');
    };

    return (
        <div>
            <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    backgroundColor: buttonColor,
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Pasa el mouse sobre mí
            </button>
        </div>
    );
};

export default App4;
