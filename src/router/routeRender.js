import React, { Component,useState } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import './../App.css';

import UserPage from './../pages/userPage'

const LoginPage = () => (
  <div>
    <h2>LoginPage</h2>
  </div>
)

const HomePage = () => (
  <div>
    <h2>HomePage</h2>
  </div>
)

function RouteRenderDemo() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div style={{margin:16}}>
        Count : {count}
        <button style={{margin:16}} onClick={() => setCount(count + 1)}>按我+1</button>
      </div>
      <Router>
        <Link to="/">首页</Link>
        <Link to="/user">用户</Link>
        <Link to="/home">主页</Link>
        <Link to="/login">登录</Link>
     
      {/* component */}   
      <Route path="/user" component={() => <UserPage count={count} />} />
      
      {/* render */}
       {/* <Route path="/user" render={() => <UserPage count={count} />} />  */}
       
       <Route
          path="/home"
          render={() => {
            console.log('homepage')
            return <HomePage />
          }}
        />

        {/* children */}
        <Route path="/login" children={LoginPage} />
      </Router>
    </div>
  )
}

export default RouteRenderDemo;