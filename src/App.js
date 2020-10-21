import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RouteDemo from  './router/route'
import BrowserRouterDemo from  './router/browserRouter'
import RouteRenderDemo from  './router/routeRender'

function App() {
  return (

    // 1、route 渲染方式
    // <RouteRenderDemo/>

    // 2、route 基础
    <RouteDemo/>
    
    
    
    // <BrowserRouterDemo/>
      
  );
}

export default App;
