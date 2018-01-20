import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Order from './components/Order';
import Submitted from './components/Submitted';
import Login from './containers/Login';
import Admin from './components/Admin';
import Edit from './components/Edit';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App container-fluid">
					<Navbar />
					<div>
						<Route exact path="/" component={Home} />
						<Route exact path="/order" component={Order} />
						<Route exact path="/submitted" component={Submitted} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/admin" component={Admin} />
						<Route exact path="/edit/:optionId" component={Edit} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
