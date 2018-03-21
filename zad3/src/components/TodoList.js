
import React from 'react';
import style from './TodoList.css'; 
import Todo from './Todo'; 

const TodoList = props => {

    const listItems = props.data.map(item => <Todo key={item.id} id={item.id} todo={item.text} remove={props.remove}/>)
    return (
        <ul className={style.TodoList}>{listItems}</ul>
    )
}

export default TodoList;

/*export default class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [], text: '' };
    }

    addTodo(e) {
        e.preventDefault();
        this.setState({ todos: [ this.state.text, ...this.state.todos ] });
        this.setState({ text: ''});
    }

    updateValue(e) {
        this.setState({ text: [e.target.value]})
    }

    render() {
        return(
            <div>
                <form onSubmit = {(e) => this.addTodo(e)}>
                    <input
                        placeholder="Add Todo"
                        value={this.state.text}
                        onChange={(e) => {this.updateValue(e)}}
                    />
                    <button type="submit">Add Todo</button>
                </form>
                <TodoList todos={this.state.todos}/>
            </div>
        );
    }
}

https://stackoverflow.com/questions/44831916/how-to-delete-a-todo-item-onclick-in-react

export default class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [], text: '' };
    }

    addTodo(e) {
        e.preventDefault();
        this.setState({ todos: [ this.state.text, ...this.state.todos ] });
        this.setState({ text: ''});
    }

    updateValue(e) {
        this.setState({ text: [e.target.value]})
    }

    removeItem = index => {
        //either use filter
        const { todos } = this.state;
        const newTodos = todos.filter((todo, i) => i !== index);
        this.setState({ todos: newTodos});

        //or use slice
        const slicedNewTodos = todos.slice(0, index).concat(todos.slice(index + 1));
        this.setState({ todos: slicedNewTodos});
    }

    render() {
        return(
            <div>
                <form onSubmit = {(e) => this.addTodo(e)}>
                    <input
                        placeholder="Add Todo"
                        value={this.state.text}
                        onChange={(e) => {this.updateValue(e)}}
                    />
                    <button type="submit">Add Todo</button>
                </form>
                <TodoList removeItem={this.removeItem} todos={this.state.todos}/>
            </div>
        );
    }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
    render() {
        return(
            <ul>
                { this.props.todos.map((todo, index) => {
                    return <li onClick={() => this.props.removeItem(index)} key={todo}>{ todo }</li>
                })}
            </ul>
        );
    }
}
*/