import React from 'react';
import './AisleTileContainer.css';
import AisleTile from '../AisleTile/AisleTile';

class AisleTileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <AisleTile />
        )
    }
}

export default AisleTileContainer;