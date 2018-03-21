import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {   id: 1,
                    text: 'Clean the room'
                    }, {
                    id: 2,
                    text: 'Wash the dishes'
                    }, {
                    id: 3,
                    text: 'Feed my cat'
                    }, {
                    id: 4,
                    text: 'Wyzdrowiec'
                    }, {
                    id: 5,
                    text: 'Spakowac manatki'
                }
            ]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title={`To do list: (${this.state.data.length})`} />
                <TodoList
                    todos={this.state.data}
                    removeTodo={this.removeTodo.bind(this)}
                />
                <TodoForm
                    addTodo={this.addTodo.bind(this)}
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        );
    }
}

export default App;
