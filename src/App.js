import React, { Component } from 'react';
import './App.css';

import Title from './components/Title';

import AddSession from './components/AddSession';
import SearchSession from './components/SearchSession';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Title />
                <AddSession />
                <SearchSession />
            </div>
        );
    }
}

export default App;
