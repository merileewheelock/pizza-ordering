import React, {Component} from 'react';
import $ from 'jquery';

class Order extends Component{
	constructor(props){
		super(props);
		this.state = {
			options: [],
			totalPrice: 0
		}
		this.handleTopping = this.handleTopping.bind(this);
		this.handleSize = this.handleSize.bind(this);
	}

	componentDidMount(){
        $.getJSON('http://localhost:3000/order', (options)=>{
            this.setState({
                options: options
            })
        });
    }

    handleTopping(value){
    	$(this).addClass("selected");
    	this.setState({
    		totalPrice: this.state.totalPrice + value
    	})
    }

    handleSize(value){
    	this.setState({
    		totalPrice: this.state.totalPrice + value
    	})
    }

	render(){

		var toppingsArray = [];
		this.state.options.map((option, index)=>{
			if (option.topping === 1){
				toppingsArray.push(
					<tr key={index} className="topping" onClick={()=>this.handleTopping(option.price)}>
						<td>{option.name}</td>
						<td>${option.price.toFixed(2)}</td>
					</tr>
				)
			}
		});

		var sizeArray = [];
		this.state.options.map((option, index)=>{
			if (option.size === 1){
				sizeArray.push(
					<tr key={index} className="size" onClick={()=>this.handleSize(option.price)}>
						<td>{option.name}</td>
						<td>${option.price.toFixed(2)}</td>
					</tr>
				)
			}
		});

		return(
			<div className="order-page container col-sm-6 col-sm-offset-3">
				<div className="row">
					<h1 className="order-header text-center">my pizza</h1>
				</div>

				<div className="row">

					<div className="pizza-size col-sm-6">
						<table className="table">
							<thead>
								<tr>
									<th className="text-center">Size</th>
									<th className="text-center">Price</th>
								</tr>
							</thead>
							<tbody className="text-center">
								{sizeArray}
							</tbody>
						</table>

						<div className="total-price row text-center">
							Price: ${this.state.totalPrice.toFixed(2)}
						</div>
					</div>

					<div className="col-sm-6">
						<table className="table">
							<thead>
								<tr>
									<th className="text-center">Topping</th>
									<th className="text-center">Price</th>
								</tr>
							</thead>
							<tbody className="text-center">
								{toppingsArray}
							</tbody>
						</table>
					</div>

				</div>

			</div>
		)
	}
}

export default Order;