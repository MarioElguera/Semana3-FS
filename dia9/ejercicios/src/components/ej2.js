'use client';
import React from 'react';

const Product = ({ props }) => {
    return (
        <div>
            <h1>Nombre: {props.name}</h1>
            <h3>Precio: {props.price}</h3>
        </div>
    );
}

export default Product;