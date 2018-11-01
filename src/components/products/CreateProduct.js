import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createProduct } from '../../store/actions/productActions'

class CreateProduct extends Component {
	state = {
		title: '',
		content: '',
	}
	
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		// console.log(this.state);
		this.props.createProduct(this.state)
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Create Product</h5>
					<div className="input-field">
						<label htmlFor="title">Title</label>
						<input type="text" id="title" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="content">Product Content</label>
						<input type="text" className="materialize textarea" id="content" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Create Product</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createProduct: (product) => dispatch(createProduct(product))
	}
}

export default connect(null, mapDispatchToProps)(CreateProduct)