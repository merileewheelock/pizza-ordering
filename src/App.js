import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Order from './containers/Order';
import Login from './containers/Login';
import Admin from './components/Admin';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App container-fluid">
					<Navbar />
					<div>
						<Route exact path="/" component={Home} />
						<Route exact path="/order" component={Order} />
						<Route exact path="/admin-login" component={Login} />
						<Route exact path="/edit" component={Admin} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
