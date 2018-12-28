
import React from 'react';

import './AddSession.css';

export default class AddSession extends React.Component {

    constructor(props){

        super(props);

        this.state = {value : ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd    = this.handleAdd.bind(this);
    }

    handleChange(event){

        this.setState({
            value : event.target.value
        });
    }

    handleAdd(){

        this.setState({
            value : ''
        })
    }

    render(){

        return(

            <div className="addSession">
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.handleAdd} className="addStyle"> 添加 </button>
            </div>
        )
    }
}