import React, { Component } from 'react';
import $ from 'jquery';

class Edit extends Component{
	constructor(props){
		super(props);
		this.state = {
			option: {},
			value: ''
		}
		// this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){
		var optionId = this.props.match.params.optionId
		// console.log(this.props.match.params.optionId)
        $.getJSON(`http://localhost:3000/admin/${optionId}`, (option)=>{
            this.setState({
                option: option
            })
        });
    }

    handleSubmit(event){
    	// console.log("submitted")
    	event.preventDefault();
    	var optionId = this.state.option.id;
		var optionName = this.state.option.name;
		var optionPriceToEdit = $('#edit-price').val();
		// console.log(optionId)
		// console.log(optionName)
		// console.log(optionPriceToEdit)
		$.ajax({
			method: 'POST',
			url: 'http://localhost:3000/edit',
			data: {optionId: optionId, optionName: optionName, optionPriceToEdit: optionPriceToEdit}
		}).done((optionArray)=>{
			this.props.history.push('/admin')
		})
    }

	render(){

		// console.log(this.state.option)
		
		return(
			<div className="edit-page container col-sm-6 col-sm-offset-3">
				<h1 className="edit-header text-center">edit price for {this.state.option.name}</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group text-center">
						Price: $<input type="text" id="edit-price" placeholder={this.state.option.price} />
					</div>
					<div className="text-center">
						<button className="save-btn btn btn-default" type="submit" value="Submit">Save</button>
					</div>
				</form>
			</div>
		)
	}
}

export default Edit;