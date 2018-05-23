import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Create extends React.Component {

    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
		e.preventDefault(); // prevent enter key
    
        var newTodo = {
            description: ReactDOM.findDOMNode(this.refs['description']).value.trim(),
            endDate: ReactDOM.findDOMNode(this.refs['endDate']).value.trim(),
            isCompleted: ReactDOM.findDOMNode(this.refs['isCompleted']).value.trim(),
        };
    
        axios.post('/api/todos', newTodo).then((result) => {
            this.props.history.push("/");
        });	
    }
    
    render() {
		return (
            <div>
                <h4><Link to="/">Todo List</Link></h4>
                <div>
                    <h4>Create new Todo</h4>
                    <form onSubmit={this.handleSubmit}>
                        <p>
                            <input type="text" placeholder='description' ref='description' />
                        </p>
                        <p>
                            <input type="text" placeholder='endDate' ref='endDate' />
                        </p>
                        <p>
                            <input type="text" placeholder='isCompleted' ref='isCompleted' />
                        </p>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>      
		)
    }
}