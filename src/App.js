import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Landing from './components/marketing/Landing'
import Dashboard from './components/dashboard/Dashboard'
import ProductDetails from './components/products/ProductDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProduct from './components/products/CreateProduct'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/create" component={CreateProduct}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
