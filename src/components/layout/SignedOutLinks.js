import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
	return (
	<ul className="right">
		<li><NavLink to='/signup' className="text-dark">Sign Up</NavLink></li>
		<li><NavLink to='/signin' className="text-dark">Log In</NavLink></li>
	</ul>
	)
}

export default SignedOutLinks
