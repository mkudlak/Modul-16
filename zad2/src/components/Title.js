import React from 'react';
import uuid from 'uuid';
import style from './Title.css';

const Title = props => {
    return (
        <div className={style.TodoApp}>
            Tutaj pojawia się mój super czaderski tytuł
        </div>
    );
}

export default Title;