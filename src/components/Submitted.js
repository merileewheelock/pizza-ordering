import React, { Component } from 'react';

class Submitted extends Component{
	render(){
		return(
			<div>
				<h1 className="submitted-header text-center">Your order is on its way!</h1>
				<div className="text-center"><img src="/images/delivery-man.png" alt="deliver-man" /></div>
			</div>
		)
	}
}

export default Submitted;