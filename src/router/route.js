import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import './../App.css';

import Product from './../pages/location'

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

const AboutA = () => (
  <div>
    <h2>AboutA</h2>
  </div>
)

const AboutAB = () => (
  <div>
    <h2>AboutAB</h2>
  </div>
)

const AboutABB = () => (
  <div>
    <h2>AboutABB</h2>
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
          <Link to="/About/a/b">AboutAB</Link>
          <Link to="/About/a">AboutA</Link>
          <Link to="/About">About</Link>          
          <Link to="/Product">Product</Link>
          <Link to="/PRODuct">PRODuct</Link>
          <hr/>
          
          {/* exact */}
          <Route path="/" exact component={Home}></Route>
          
          {/* strict */}
          <Route path="/about/a/b/" strict component={AboutABB}></Route>
          {/* <Route path="/about/a/b/" component={AboutABB}></Route> */}
          <Route path="/about/a/b" component={AboutAB}></Route>

          {/* exact */}
          <Route path="/about/a" exact component={AboutA}></Route>
          {/* <Route path="/about/a" component={AboutA}></Route> */}
          <Route path="/about/" exact component={About}></Route>   

          {/* sensitive */}
          <Route path="/Product" sensitive component={()=> <Product/>}></Route>

          {/* location */}
          <Route location={{ pathname: "/Product" }} component={()=> <Product/>}></Route>
          
        </div>
      </Router>
    );
  }
}

export default RouteDemo;