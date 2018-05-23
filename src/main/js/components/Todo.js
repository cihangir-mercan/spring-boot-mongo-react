import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

// tag::todo[]
class Todo extends React.Component{
	
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}
	
	handleDelete() {
		this.props.onDelete(this.props.todo);
	}
	
	render() {
		return (
			<tr>
				<td>{this.props.todo.description}</td>
				<td>{this.props.todo.endDate}</td>
				<td>{this.props.todo.isCompleted}</td>
				<td>
					<button>
						<Link className="update-button" to={`/update/${this.props.todo.hexId}`}>Update</Link>
					</button>		
				</td>
				<td>
					<button onClick={this.handleDelete}>Delete</button>
				</td>
			</tr>		
		)
	}
}
// end::todo[]

export default Todo;