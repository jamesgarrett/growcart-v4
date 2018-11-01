import React, { Component } from 'react'
import Notifications from './Notifications'
import ProductList from '../products/ProductList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component{
	render(){
		const { products } = this.props;
		return(
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
						<ProductList products={products} />
					</div>
					<div className="col s12 m5 offset-m1">
						<Notifications />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.firestore.ordered.products
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'products' }
	])
)(Dashboard)