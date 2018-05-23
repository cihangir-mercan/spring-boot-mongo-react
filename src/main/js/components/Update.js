import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Edit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: {
                'description': '',
                'endDate': '',
                'isCompleted': ''
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        axios.get('/api/todos/' + this.props.match.params.id).then(res => {
            this.setState({
				todo: res.data
			});
        });
    }
    
    handleSubmit(e) {
		e.preventDefault(); // prevent enter key
    
        var newTodo = {
            description: ReactDOM.findDOMNode(this.refs['description']).value.trim(),
            endDate: ReactDOM.findDOMNode(this.refs['endDate']).value.trim(),
            isCompleted: ReactDOM.findDOMNode(this.refs['isCompleted']).value.trim(),
        };
        
        axios.put('/api/todos/' + this.state.todo.hexId, newTodo).then((result) => {
            this.props.history.push("/");
        });	 
    }
    
    onChange(e) {
        var temp = this.state.todo;
        temp[e.target.name] = e.target.value;
        this.setState({
            todo: temp
        });
    }
    
    render() {
		return (
            <div>
                <h4><Link to="/">Todo List</Link></h4>
                <div>
                    <h4>Update Todo</h4>
                    <form onSubmit={this.handleSubmit}>
                        <p>
                            <input type="text" placeholder='description'
                                   ref='description' name="description"
                                   value={this.state.todo.description}
                                   onChange={(value) => this.onChange(value)} />
                        </p>
                        <p>
                            <input type="text" placeholder='endDate'
                                   ref='endDate' name="endDate"
                                   value={this.state.todo.endDate}
                                   onChange={(value) => this.onChange(value)} />
                        </p>
                        <p>
                            <input type="text" placeholder='isCompleted'
                                   ref='isCompleted' name="isCompleted"
                                   value={this.state.todo.isCompleted}
                                   onChange={(value) => this.onChange(value)} />
                        </p>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>      
		)
    }
}