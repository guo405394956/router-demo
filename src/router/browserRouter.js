import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import RouteDemo from  './route'

class browserRouteDemo extends Component {
  constructor(){
    super();
  }
  
  render() {
    return (
      <BrowserRouter basename="/admin">
        <RouteDemo/>
      </BrowserRouter>
    );
  }
}

export default browserRouteDemo;