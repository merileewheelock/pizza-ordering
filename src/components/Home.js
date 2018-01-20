import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
	render(){

		return(
			<div className="homepage">
				<div className="header-div">
					<h1 className="site-title text-center">pizza</h1>
					<div className="home-button text-center">
						<Link to="/order" className="btn btn-default">get ordering</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;