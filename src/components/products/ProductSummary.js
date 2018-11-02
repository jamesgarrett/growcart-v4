import React from 'react'
import moment from 'moment'

const ProductSummary = ({product}) =>{
	return (
		<div className="card z-depth-0 product-summary">
			<div className="card-content grey-text text-darken-3">
				<span className="card-title">{product.title}</span>
				<p>Posted By {product.authorFirstName} {product.authorLastName}</p>
				<p className="grey-text">{moment(product.createdAt.toDate()).calendar()}</p>
			</div>
		</div>
	)
}

export default ProductSummary