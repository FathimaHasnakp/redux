import React from 'react'
import { Provider } from "react-redux";
import store from '../store/store';
import AddTodo from './AddTodo';
import Todolist from './TodoList';

function ReduxTodo() {
    return (
        <div className='App'>
            <Provider store={store}>
                <h1>To-Do list</h1>
                <AddTodo />
                <Todolist />
            </Provider>

        </div>
    );
}

export default ReduxTodo