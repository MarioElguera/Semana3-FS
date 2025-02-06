import React, { useState } from 'react';

const App3 = () => {
    const [color, setColor] = useState('red');

    const toggleColor = () => {
        setColor(color === 'red' ? 'blue' : 'red');
    };

    return (
        <div>
            <button
                onClick={toggleColor}
                style={{ backgroundColor: color, color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
                Cambiar Color
            </button>
        </div>
    );
};

export default App3;
