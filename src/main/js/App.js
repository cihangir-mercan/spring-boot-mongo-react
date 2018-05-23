import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

import TodoList from './components/TodoList';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {todos: []};
		
		this.onDelete = this.onDelete.bind(this);
	}
	
	componentDidMount() {
        axios.get('/api/todos').then(res => {
            this.setState({
				todos: res.data
			});
        });
    }
	
	onDelete(todo) {
		axios.delete('/api/todos/' + todo.hexId).then(res => {
            var array = [...this.state.todos]; // make a separate copy of the array
			var index = array.indexOf(todo)
			array.splice(index, 1);
			this.setState({todos: array}); // state elemenets other than todos will not be affected
        });
	}
	
	render() {
		return (
			<div>
				<h4>
					<Link to="/create">Add Todo</Link>
				</h4>
				<TodoList todos={this.state.todos}
						  onDelete={this.onDelete}/>
				<h4>
					<a href="https://github.com/cihangir-mercan/spring-boot-mongo-react">
						https://github.com/cihangir-mercan/spring-boot-mongo-react	
					</a>
				</h4>
			</div>
		)	
	}
}
