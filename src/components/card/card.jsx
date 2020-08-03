import React from 'react';

import './card.css';

const card = props => {

    const {name, email, id} = props;

    return (
        <div className="card-container">
            <img src={`https://robohash.org/${id}?set=set2`} alt=""/>
            <h1>{name}</h1>
            <h2>{email}</h2>
        </div>
    )
}

export default card;