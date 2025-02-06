import React, { useEffect, useState } from 'react';

const App6 = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const updateSizeWindow = () => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateSizeWindow);
        return () => {
            window.removeEventListener('resize', updateSizeWindow);
        }
    });

    return (
        <div>
            <div style={{ color: width > 600 ? 'red' : 'yellow' }}>
                <p >Width : {width}px</p>
                <p>Height : {height}px</p>
            </div>
        </div>
    );
};

export default App6;
