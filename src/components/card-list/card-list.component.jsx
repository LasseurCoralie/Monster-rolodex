import React from 'react';

import { Card } from '../card/card.component.jsx';

import './card-list.style.css';

export const CardList = ({ monsters }) => (
    <div className='card-list'>
        {monsters.map(monster => (
           <Card monster={monster} key={monster.id} /> 
        ))}
    </div>
);
