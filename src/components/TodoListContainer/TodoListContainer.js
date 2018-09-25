import React from 'react';
import './TodoListContainer.css';
import TodoListTile from '../TodoListTile/TodoListTile';

class TodoListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="TodoListContainer">
                <TodoListTile />
                <TodoListTile />
                <TodoListTile />
            </div>
        )
    }
}

export default TodoListContainer;