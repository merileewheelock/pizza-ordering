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
		this.handleButton = this.handleButton.bind(this);
	}

	componentDidMount(){
        $.getJSON('http://localhost:3000/order', (options)=>{
            this.setState({
                options: options
            })
        });
    }

    handleTopping(value, index){
    	console.log($('.topping'))
    	var clickedTopping = $('.topping')

    	if ($(clickedTopping[index]).hasClass('selected')){
    		// topping is already added, don't add again
    		return;
    	}

    	$(clickedTopping[index]).addClass('selected');

    	this.setState({
    		totalPrice: this.state.totalPrice + value
    	})
    }

    handleSize(value, index){

    	var clickedSize = $('.pizza-size');
    	var pizzaArrayIndex = index - 12;

    	if ($(clickedSize[pizzaArrayIndex]).hasClass('selected')){
    		// pizza size already selected, no more choosing a size
    		return;
    	}

    	if (pizzaArrayIndex === 0){
    		$(clickedSize[1]).addClass('off');
    		$(clickedSize[2]).addClass('off');
    	}else if (pizzaArrayIndex === 1){
    		$(clickedSize[0]).addClass('off');
    		$(clickedSize[2]).addClass('off');
    	}else if (pizzaArrayIndex === 2){
    		$(clickedSize[0]).addClass('off');
    		$(clickedSize[1]).addClass('off');
    	}
    	if ($(clickedSize[pizzaArrayIndex]).hasClass('off')){
    		// pizza size already selected, no more choosing a size
    		return;
    	}

    	$(clickedSize[pizzaArrayIndex]).addClass('selected');

    	this.setState({
    		totalPrice: this.state.totalPrice + value
    	})
    }

    handleButton(){
    	this.props.history.push('/submitted');
    }

	render(){

		var toppingsArray = [];
		this.state.options.map((option, index)=>{
			if (option.topping === 1){
				toppingsArray.push(
					<tr key={index} className="topping" onClick={()=>this.handleTopping(option.price, index)}>
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
					<tr key={index} className="pizza-size" onClick={()=>this.handleSize(option.price, index)}>
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

					<div className="pizza-size-section col-sm-6">
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
							order total: ${this.state.totalPrice.toFixed(2)}
						</div>
						<div className="row text-center">
							<img src="/images/dishes.png" alt="plate" />
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

				<div className="row">
					<div className="text-center">
						<button className="order-btn btn btn-default" onClick={this.handleButton}>Order</button>
					</div>
				</div>

			</div>
		)
	}
}

export default Order;