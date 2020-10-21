# react-router

## 引言

react-router 是 react 体系的一个重要部分,是唯一可选的路由库,它通过管理 URL，实现组件的切换和状态的变化，开发复杂的应用几乎肯定会用到。

## react-router 版本

github 仓库在 2020年6月 发布了 v6.0.0-beta.0 的版本
npm 对外发布的包最新的是 v5.2.0

> [版本更新日志](https://github.com/ReactTraining/react-router/blob/8365d4b2e91084265a1da7de911766169fb9e96e/CHANGES.md)

## react-router Packages

react-router 是一个 monorepo ，用的 Lerna 进行管理和发npm包。包括了以下：

| Package                                                | Version                                                                                                                             | Docs                                                                                                                                                                                                                                                                          | Description                                                                        |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`react-router`](/packages/react-router)               | [![npm](https://img.shields.io/npm/v/react-router.svg?style=flat-square)](https://www.npmjs.com/package/react-router)               | [![](https://img.shields.io/badge/API%20Docs-site-green.svg?style=flat-square)](https://reacttraining.com/react-router/core/guides/quick-start) [![](https://img.shields.io/badge/API%20Docs-markdown-lightgrey.svg?style=flat-square)](/packages/react-router/docs)          | The core of React Router                                                           |
| [`react-router-dom`](/packages/react-router-dom)       | [![npm](https://img.shields.io/npm/v/react-router-dom.svg?style=flat-square)](https://www.npmjs.com/package/react-router-dom)       | [![](https://img.shields.io/badge/API%20Docs-site-green.svg?style=flat-square)](https://reacttraining.com/react-router/web/guides/quick-start) [![](https://img.shields.io/badge/API%20Docs-markdown-lightgrey.svg?style=flat-square)](/packages/react-router-dom/docs)       | DOM bindings for React Router                                                      |
| [`react-router-native`](/packages/react-router-native) | [![npm](https://img.shields.io/npm/v/react-router-native.svg?style=flat-square)](https://www.npmjs.com/package/react-router-native) | [![](https://img.shields.io/badge/API%20Docs-site-green.svg?style=flat-square)](https://reacttraining.com/react-router/native/guides/quick-start) [![](https://img.shields.io/badge/API%20Docs-markdown-lightgrey.svg?style=flat-square)](/packages/react-router-native/docs) | [React Native](https://facebook.github.io/react-native/) bindings for React Router |
| [`react-router-config`](/packages/react-router-config) | [![npm](https://img.shields.io/npm/v/react-router-config.svg?style=flat-square)](https://www.npmjs.com/package/react-router-config) | [![](https://img.shields.io/badge/API%20Docs-readme-orange.svg?style=flat-square)](/packages/react-router-config/#readme)                                                                                                                                                     | Static route config helpers    

> react-router-redux: 被废弃的

## react-router 与 react-router-dom

1. react-router-dom 顾名思义对 dom 的操作做了支持

import {Switch, Route, Router} from 'react-router';
import {HashHistory, Link} from 'react-router-dom';

2. react-router-dom 对 react-router 做了扩展

import {Swtich, Route, Router, HashHistory, Link} from 'react-router-dom';

3. React-router与React-router-dom的路由跳转

React-router：
router4.0以上版本用this.props.history.push('/path')实现跳转；
router3.0以上版本用this.props.router.push('/path')实现跳转

React-router-dom：
直接用this.props.history.push('/path')就可以实现跳转

> 综上所述，在使用 React 的大多数情况下，我们会想要通过操作dom来控制路由，直接使用 React-router-dom 更加方便，可以直接 yarn add react-router-dom 来安装，而且安装完成后，我们看到在 package.json 中 react-router-dom 是依赖 react-router 的，所以我们使用 npm 安装 react-router-dom 的时候，不需要 npm 安装 react-router。

## react-router-config

React Router Config 是 React Router 的一个辅助工具，主要帮助集中配置静态路由

## react-router

> [基础使用demo](https://reactrouter.com/web/example/basic)
> [官方API](https://reactrouter.com/web/api/Hooks)

### history

React Router，是history这个为React Router提供核心功能的包。它能轻松地在客户端为项目添加基于location的导航,也有单独的 history npm包，但是我们在使用 react router 的时候，react router 会为你自动创建history对象，无需手动安装。

> [关于history的那些事](https://segmentfault.com/a/1190000010251949)

### BrowserRouter、HashRouter 和 MemoryRouter

刚说的 history 的分类有以下三种，分别对应了三种类型的 router

```md
* browser -> <BrowserRouter>
* hash -> <HashRouter>
* memory -> <MemoryRouter>
```

* BrowserRouter

服务器端渲染，客户端的各个 url 在服务器端都要都相应的 html 对应做请求。

* HashRouter

不需要服务器端渲染，服务器对 url 对解析只在 # 号前，因为 # 号后的内容不会发给服务器，所有 url 都只需要对 / 返回请求的 html 处理就好，靠客户端自己的 # 号区分 path，执行相应的路由跳转。

* MemoryRouter

在没有 url 的情况下，比如 react native，没有 url ，只能靠 Memor 记住就好。用于非 dom 的环境，history 存储在内存中。

> 除了实现方式的不一样之外，难道真的就只是一个是通过urlhash 一个是真实的url吗？ 在官方文档中还提到HashRouter不支持location.key 和location.state .
[他们说官方推荐使用BowserRouter](http://zhangdajia.com/2018/11/30/React-router-v4%E4%B8%ADBrowserRouter%E5%92%8CHashRouter%E7%9A%84%E5%8C%BA%E5%88%AB/)

## Link 和 NavLink

### render 方式

* Route渲染组件的三种方式

```js
<Route component>
<Route render>
<Route children>
```

```js
<Router>
    <Link to="/">首页</Link>
    <Link to="/user">用户</Link>
    <Link to="/home">主页</Link>
    <Link to="/login">登录</Link>
    {/* component */}
    <Route path="/user" component={() => <UserPage count={count} />} />
    {/* render */}
    <Route path="/home" render={() => {
        console.log('homepage')
        return <HomePage />
        }}
    />
    {/* children */}
    <Route path="/login" children={LoginPage} />
</Router>
```

* 三者差异
component  最常用，只有匹配location才会加载component对应的React组件
render  路由匹配函数就会调用
children 不管路由是否匹配都会渲染对应组件

* component 和 render 区别

1. 当你使用component(而不是render, children), router使用React.createElement从给定组件创建一个新的React元素。这意味着每次呈现时创建一个新组件。这将导致现有组件卸载和新组件挂载，而不只是更新现有组件。
2. 使用render可以访问相同的路径(match,location和history)作为组件渲染道具,而不需要进行不必要的重新加载.

那么，我们现有的开发中什么场景需要用到render这种方式？？

> 结论: Route渲染优先级: children > component > render
> [render的方法](https://www.jianshu.com/p/2e7007a06d79)

### route

* path: string

匹配路径，还可以支持正则匹配

* exact: bool

是否需要完全匹配，默认为false，当设置为 true 时，路由需要完全相同时才能匹配，最后的斜杠不计入完全匹配的
>tips：此次有一个小坑就时，如果是在父级路由上加入了 exact 时，子路由就不能进行匹配了，所以不能在有子路由的路由上面加此属性。

* strict: bool

是否匹配斜杠，默认为false，当设置为true时，需要严格匹配路由后是否有斜杠出现，但是一般没大用处，可以忽略。

* sensitive: bool

路径是否区分大小写，默认为false，当设置为true时，需要严格匹配路径的大小写，一般也不咋用

* location: object

> [location sandbox demo](https://reactrouter.com/web/example/animated-transitions)

### router

router 是 react 路由的一个路由外层盒子，它里面的内容就是我们单页面应用的路由以及路由组件

* history object

* children: node

> * Router 和 Route 的配合，就是之前我们介绍过的“提供者模式”，Router 是“提供者”，Route是“消费者”
> * Router 其实也是一层抽象，让下面的 Route 无需各种不同 URL 设计的细节

## StaticRouter

A Router that never changes location.

## location

location对象反映了当前应用所在的"位置"。

```js
Route component as this.props.location
Route render as ({ location }) => ()
Route children as ({ location }) => ()
withRouter as this.props.location
```

## match

match是一个匹配路径参数的对象,包括了以下属性：

params - (object) 路由传参
isExact - (boolean) 设置为 true 时路由是严格控制模式
path - (string) 匹配路由，用于 Router
url - (string) 匹配理由，用于 Link

> 1. ?a=1 ：这种属于 search 字符串，在 location.search 里取值；
> 2. /a/123 ：这种需要从 match.params里取值；

```js
Route component as this.props.match
Route render as ({ match }) => ()
Route children as ({ match }) => ()
withRouter as this.props.match
matchPath as the return value
useRouteMatch as the return value
```

## withRouter

高阶组件中的withRouter, 作用是将一个组件包裹进Route里面, 然后react-router的三个对象history, location, match就会被放进这个组件的props属性中

```js
import React from 'react'
import './nav.css'
import {
    NavLink,
    withRouter
} from "react-router-dom"

class Nav extends React.Component{
    handleClick = () => {
        // Route 的 三个对象将会被放进来, 对象里面的方法可以被调用
        console.log(this.props);
    }
    render() {
        return (
            <div className={'nav'}>
                <span className={'logo'} onClick={this.handleClick}>掘土社区</span>
                <li><NavLink to="/" exact>首页</NavLink></li>
                <li><NavLink to="/activities">动态</NavLink></li>
                <li><NavLink to="/topic">话题</NavLink></li>
                <li><NavLink to="/login">登录</NavLink></li>
            </div>
        );
    }
}

// 导出的是 withRouter(Nav) 函数执行
export default withRouter(Nav)
```

withRouter的作用就是, 如果我们某个东西不是一个Router, 但是我们要依靠它去跳转一个页面, 比如点击页面的logo, 返回首页, 这时候就可以使用withRouter来做.
在这个例子中, 我将span使用withRouter作为一个可点击跳转的Link
