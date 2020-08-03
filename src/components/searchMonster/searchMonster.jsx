import React from 'react';

const searchMonster = props => {

    const {searchText} = props;

    return <input type="text" onChange={searchText}/>
}

export default searchMonster;