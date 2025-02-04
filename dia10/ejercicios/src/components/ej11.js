import React, { useState } from 'react';

const TextInput = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <h1>Campo de texto</h1>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Escribe algo..."
                style={{ color: 'black' }}
            />
            <p>Texto ingresado: {text}</p>
        </div>
    );
};

export default TextInput;
