import React, { Component } from 'react';
import './App.css';

import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/visibleTodoList';


class App extends Component {
    render() {
        return (
            <div>

                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        );
    }
}

export default App;
