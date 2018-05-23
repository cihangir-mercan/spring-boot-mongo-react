import React from 'react';

import Todo from './Todo';

// tag::todo-list[]
export default class TodoList extends React.Component{
	
	constructor(props) {
		super(props);
	}

	// tag::todo-list-render[]
	render() {
		
		var todos = this.props.todos.map(todo =>
			<Todo key={todo.id.timestamp + todo.id.machineIdentifier + todo.id.processIdentifier}
				todo={todo} onDelete={this.props.onDelete} />
		);
			
		return (
			<table>
				<tbody>
					<tr>
						<th>Description</th>
						<th>End Date</th>
						<th>Is Completed?</th>
					</tr>
					{todos}
				</tbody>
			</table>
		)
	}
}