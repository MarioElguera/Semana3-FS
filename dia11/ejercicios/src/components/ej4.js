import React, { useState } from 'react';

const List = () => {
    const items = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4"];
    const [activeItems, setActiveItems] = useState({});

    const toggleItem = (index) => {
        setActiveItems((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <div className={'listContainer'}>
            <h1 className="listTitle">Lista de Elementos</h1>
            <ul>
                {items.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => toggleItem(index)}
                        className={`listItem ${activeItems[index] ? 'active' : 'inactive'}`}
                    >
                        {item} {activeItems[index] ? '(Activado)' : '(Desactivado)'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
