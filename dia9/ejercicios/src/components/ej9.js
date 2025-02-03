// components/Avatar.js
'use client';

import React from 'react';

const Avatar = ({ url }) => {
    return (
        <img
            src={url}
            alt="Avatar"
            style={{ width: '100px', height: '100px', borderRadius: '10%' }}
        />
    );
};

export default Avatar;
