import { useState, useEffect } from 'react';

const App7 = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [fontSize, setFontSize] = useState(16);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const increaseFontSize = () => {
        setFontSize(fontSize + 2);
    };

    const decreaseFontSize = () => {
        setFontSize(fontSize - 2);
    };

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode) {
            setDarkMode(JSON.parse(savedMode));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setDarkMode((prevMode) => !prevMode);
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, []);

    const appStyle = {
        backgroundColor: darkMode ? '#333' : '#fff',
        color: darkMode ? '#fff' : '#333',
        fontSize: `${fontSize}px`,
        transition: 'background-color 0.3s, color 0.3s, font-size 0.3s',
        padding: '20px',
        minHeight: '100vh',
    };

    const buttonStyle = {
        padding: '10px 20px',
        margin: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s, color 0.3s',
    };

    const darkModeButtonStyle = {
        ...buttonStyle,
        backgroundColor: darkMode ? '#444' : '#ddd',
        color: darkMode ? '#fff' : '#333',
    };

    const sizeButtonStyle = {
        ...buttonStyle,
        backgroundColor: darkMode ? '#555' : '#bbb',
        color: darkMode ? '#fff' : '#333',
    };

    return (
        <div style={appStyle}>
            <div>
                <button style={darkModeButtonStyle} onClick={toggleDarkMode}>
                    {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
                </button>

                <button style={sizeButtonStyle} onClick={increaseFontSize}>Aumentar tamaño</button>
                <button style={sizeButtonStyle} onClick={decreaseFontSize}>Disminuir tamaño</button>
            </div>

            <p>
                Texto que cambia el tamaño de la fuente y el modo claro/oscuro.
            </p>
        </div>
    );
};

export default App7;
