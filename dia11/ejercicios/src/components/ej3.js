import React, { useEffect, useState } from 'react';

const ModoOscuro = () => {
    const [modoOscuro, setModoOscuro] = useState(false);

    const onClickHandler = () => {
        setModoOscuro(!modoOscuro);
    };

    useEffect(() => {
        document.querySelector('body').style.backgroundColor = modoOscuro ? 'black' : 'white';
        document.querySelector('body').style.color = !modoOscuro ? 'black' : 'white';
    }, [modoOscuro]);

    return (
        <div>
            <h1>Ejercicio 3</h1>
            <br></br>
            <button
                style={{ backgroundColor: modoOscuro ? 'black' : 'white', height: '50px', width: '100px', border: '1px red solid' }}
                onClick={onClickHandler}> {!modoOscuro ? 'Modo oscuro' : 'Modo Claro'}
            </button>
        </div >
    );
};

export default ModoOscuro;
