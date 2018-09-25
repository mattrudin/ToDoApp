import React from 'react';
import './AisleTile.css';

const AisleTile = (props) => {
    return(
        <div className="AisleTile" >
            <h1>{props.name}</h1>
            <p>Open todos</p>
            <p>Total todos</p>
        </div>
    )
}

export default AisleTile;