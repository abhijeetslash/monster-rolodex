import React from 'react';
import './cardList.css';

import Card from '../card/card';

const cardList = (props) => {

    const {monsters} = props;

    return (
        <div className="card-list">
            {
          monsters.map((monster) => {

            return <Card key={monster.id} id={monster.id} name={monster.name} email={monster.email}/>

          })
          }
        </div>
    )
}

export default cardList;