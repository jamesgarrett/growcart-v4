import React, { Component } from 'react'
import { Container, Col, Card, Button, CardImg, CardTitle, CardText, CardDeck, CardBody, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class Landing extends Component{
	render(){
		return(
			<div>
				<header id="landing">
				<Container>
					<div className="h-100 pt-5">
						<Col md={{ size:6 }} className="pt-5 mt-5 text-white">
							<h1 className="mt-5">Super Charge Your Sales.</h1>
							<p className="detail mt-2">Sign up today for a free trial to see how Amazon can work for you, and not the other way around.</p>
							<Button color="teal" className="mt-5"><NavLink to='/signup' className="text-white">Start Your Free Trial</NavLink></Button>
						</Col>
						<img src="/img/separator_1.svg" className="separator" alt="separator_1"></img>
						<img src="/img/cart.svg" className="cart" alt="cart"></img>
					</div>
				</Container>
				</header>
				<div className="pt-5 pb-5 container-fluid" id="features">
					<Col xl={{ size:8, offset:2 }} lg={{ size:10, offset:1 }} sm={{ size:12 }} className="text-center pt-5 container">
						<h1 className="text-white mb-5">Features</h1>
						<CardDeck>
					      <Card>
					        <CardImg top width="100%" src="/icons/dashboard.svg" alt="Card image cap" />
					        <CardBody>
					          <CardTitle className="text-center">Centralized Dashboard</CardTitle>
					          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
					        </CardBody>
					      </Card>
					      <Card>
					        <CardImg top width="100%" src="/icons/reports.svg" alt="Card image cap" />
					        <CardBody>
					          <CardTitle className="text-center">Realtime Reporting</CardTitle>
					          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
					        </CardBody>
					      </Card>
					      <Card>
					        <CardImg top width="100%" src="/icons/alerts.svg" alt="Card image cap" />
					        <CardBody>
					          <CardTitle className="text-center">Review Alerts</CardTitle>
					          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
					        </CardBody>
					      </Card>
					    </CardDeck>
					    <Button color="teal" className="mt-5"><NavLink to='/signup' className="text-white">Start Your Free Trial</NavLink></Button>
					</Col>
			    </div>
			    <div className="container-fluid" id="cta">
				    <img src="/img/separator_2.svg" className="separator separator-two" alt="separator_2"></img>
					<Col md={{ size:6, offset:3 }} sm={{ size:8, offset:2 }} xs={{ size:10, offset:1 }} className="text-center pt-5 mt-5 mb-5 pb-5">
						<h1 className="text-center mt-5">Your sales, accelerated.</h1>
						<p className="text-center detail mt-5">Growcart makes managing your brand across sales channels a breeze. Whether its managing negative reviews, keeping your descriptions up to date, or making sure everyone uses the right SKU's for your products, you're in good hands.</p>
						<h4 className="mb-5 mt-5"><b>Try Growcart Free Today</b></h4>
						<Button color="teal" className="mt-5 mr-2"><NavLink to='/signup' className="text-white">Sign Up</NavLink></Button>
						<Button color="secondary" className="mt-5"><NavLink to='/signin' className="text-white">Sign In</NavLink></Button>
					</Col>
				</div>
				<footer className="pt-5 white">
					<Container>
						<Row>
							<Col md={{ size:4 }} className="pb-5">
								<img width="150" height="24" src="../img/growcart-logo-dark.svg" alt="Logo" /><br />
							</Col>
							<Col md={{ size:2 }} className="text-left pt-2">
								<ul>
									<h6><b>PRODUCTS</b></h6>
									<li><NavLink to="{{  }}">Pricing</NavLink></li>
									<li><NavLink to="#">Baseline</NavLink></li>
									<li><NavLink to="#">Super</NavLink></li>
									<li><NavLink to="#">Whiteglove</NavLink></li>
								</ul>
							</Col>
							<Col md={{ size:2 }} className="text-left pt-2">
								<ul>
									<h6><b>DASHBOARD</b></h6>
									<li><NavLink to="#">Marketing</NavLink></li>
									<li><NavLink to="#">Reporting</NavLink></li>
									<li><NavLink to="#">Creative</NavLink></li>
									<li><NavLink to="#">Notifications</NavLink></li>
									<li><NavLink to="#">Alerts</NavLink></li>
								</ul>
							</Col>
							<Col md={{ size:2 }} className="text-left pt-2">
								<ul>
									<h6><b>COMPANY</b></h6>
									<li><NavLink to="#about">About</NavLink></li>
									<li><NavLink to="#features">Features</NavLink></li>
									<li><NavLink to="#">Partners</NavLink></li>
									<li><NavLink to="#">Jobs</NavLink></li>
									<li><NavLink to="#">Press</NavLink></li>
								</ul>
							</Col>	
							<Col md={{ size:2 }} className="text-left pt-2">
								<ul>
									<h6><b>RESOURCES</b></h6>
									<li><NavLink to="#">Contact</NavLink></li>
									<li><NavLink to="#">Privacy</NavLink></li>
									<li><NavLink to="#">Sitemap</NavLink></li>
								</ul>
							</Col>				
						</Row>
						<Row>
							<Col md="12" className="text-left">
							© Growcart 2018. All rights reserved.
							</Col>
						</Row>
					</Container>
				</footer>
			</div>
		)
	}
}

export default Landing