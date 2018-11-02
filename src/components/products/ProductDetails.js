import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProductDetails = (props) => {
	const { product, auth } = props;
	if(!auth.uid) return <Redirect to='/signin' />

	if (product) {
		return (
			<div className="container section product-details">
				<div className="card z-depth-0">
					<div className="card-content">
						<span className="card-title">{product.title}</span>
						<p>{ product.content }</p>
					</div>
					<div className="card-action card-action grey lighten-4 grey-text">
						<div>{ product.authorFirstName } { product.authorLastName}</div>
						<div>{moment(product.createdAt.toDate()).calendar()}</div>
					</div>
				</div>
			</div>
		)
	} else{
		return (
			<div className="container center">
				<p>Loading project..</p>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	// console.log(state);
	const id = ownProps.match.params.id;
	const products = state.firestore.data.products;
	const product = products ? products[id] : null
	return {
		product: product,
		auth: state.firebase.auth	
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'products' }
	])
)(ProductDetails)