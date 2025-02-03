'use client';
import React from 'react';

const NameAge = ({ info }) => {
    return (
        <div>
            <h1>Nombre: {info.name}</h1>
            <h3>Edad: {info.age}</h3>
        </div>
    );
};

const App = () => {
    const userData = { name: "Mario", age: 36 };
    return <NameAge info={userData} />
}

export default App;