import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        const savedAnimationMode = localStorage.getItem('animationMode') === 'true';
        setIsDarkMode(savedDarkMode);
        setIsAnimated(savedAnimationMode);
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', isDarkMode);
        localStorage.setItem('animationMode', isAnimated);
    }, [isDarkMode, isAnimated]);

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
    };

    const toggleAnimationMode = () => {
        setIsAnimated(prev => !prev);
    };

    const modeClass = isDarkMode ? 'dark-mode' : 'light-mode';
    const animationClass = isAnimated ? 'animated' : 'static';

    return (
        <div className={`app ${modeClass} ${animationClass}`}>
            <header className="app-header">
                <h1>Modo Claro/Oscuro</h1>

                <button onClick={toggleDarkMode}>
                    {isDarkMode ? <FaSun size={30} /> : <FaMoon size={30} />}
                </button>

                <button onClick={toggleAnimationMode}>
                    Cambiar a :{isAnimated ? 'Tema Estático' : 'Tema Animado'}
                </button>
            </header>
        </div>
    );
}

export default App;
