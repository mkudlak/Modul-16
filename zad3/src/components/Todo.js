import React from 'react';
import style from './Todo.css'; 

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className={style.Todo}>
                {this.props.todo} 
                <button onClick={event => this.buttonClick()}>Remove</button>
            </li>
        )
    }

    buttonClick(event) {
        this.props.remove(this.props.id);
    }
}

export default Todo;