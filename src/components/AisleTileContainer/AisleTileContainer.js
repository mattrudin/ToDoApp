import React from 'react';
import './AisleTileContainer.css';
import AisleTile from '../AisleTile/AisleTile';

class AisleTileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aisle: ['Vegetables', 'Fruits', 'Beverages', 'Backery', 'Meat', 'Candy', 'Alcohol', 'Toilet articles', 'Cans', 'Pasta and Rice', 'Dairy products']
        }
    }

    render() {

        const aisleTiles = this.state.aisle.map( item => <AisleTile name={item} />)

        return(
            <div className="AisleTileContainer">
                {aisleTiles}
            </div>
        )
    }
}

export default AisleTileContainer;