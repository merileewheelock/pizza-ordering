import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class Admin extends Component {
	constructor(props){
		super(props);
		this.state = {
			options: []
		}
	}

	componentDidMount(){
        $.getJSON('http://localhost:3000/order', (options)=>{
            this.setState({
                options: options
            })
        });
    }

	render(){

		var optionsArray = [];
		this.state.options.map((option, index)=>{
			optionsArray.push(
				<tr key={index} className="option">
					<td>{option.name}</td>
					<td className="edit-link">
						<Link to={`/option/edit/${option.id}`}>${option.price.toFixed(2)}</Link>
					</td>
				</tr>
			)
		});

		return(
			<div className="admin-edit-page container col-sm-6 col-sm-offset-3">
				<div className="row">
					<h1 className="admin-edit-header text-center">edit prices</h1>
				</div>
				<table className="table">
					<thead>
						<tr>
							<th className="text-center">Item</th>
							<th className="text-center">Price</th>
						</tr>
					</thead>
					<tbody className="text-center">
						{optionsArray}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Admin;