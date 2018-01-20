import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
	render(){
		return(
			<div className="text-right">
				<div className="nav-links"><Link to="/">Home</Link></div>
				<div className="nav-links"><Link to="/order">Order</Link></div>
				<div className="nav-links"><Link to="/login">Admin</Link></div>
			</div>
		)
	}
}

export default Navbar;