import React, { useState } from 'react';

const HoverDiv = () => {
    const [color, setColor] = useState('lightblue');

    const handleMouseEnter = () => {
        setColor('lightgreen');
    };

    const handleMouseLeave = () => {
        setColor('lightblue');
    };

    return (
        <div
            style={{
                width: '200px',
                height: '200px',
                backgroundColor: color,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <p>Pasa el mouse sobre mí</p>
        </div>
    );
};

export default HoverDiv;
