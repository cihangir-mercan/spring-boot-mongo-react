import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Create from './components/Create';
import Update from './components/Update';

render(
	<Router>
		<div>
			<Route exact path='/' component={App} />
			<Route path='/create' component={Create} />
			<Route path='/update/:id' component={Update} />
		</div>
	</Router>,
	document.getElementById('react')
)