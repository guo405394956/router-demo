import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import './../App.css';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Product = () => (
  <div>
    <h2>Product</h2>
  </div>
)

class RouteDemo extends Component {
  constructor(){
    super();
  }
  
  render() {
    console.log(this.props);
    return (
      <Router>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Product">Product</Link>
          <hr/>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/product" component={Product}></Route>
        </div>
      </Router>
    );
  }
}

export default RouteDemo;