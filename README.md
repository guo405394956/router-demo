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

> react-router-redux: 被废弃的，现在是 redux 集成。

## react-router

> [基础使用demo](https://reactrouter.com/web/example/basic)
> [官方API](https://reactrouter.com/web/api/Hooks)

### react-router 基础

* [render的方法](https://blog.csdn.net/xiaoqingrong/article/details/101055085)

```js
<Route component>
<Route render>
<Route children>
```

* path: string

匹配路径，还可以支持正则匹配，不写时全部匹配

* exact: bool

是否需要完全匹配，默认为false，当设置为 true 时，路由需要完全相同时才能匹配，最后的斜杠时不计入完全匹配的
>tips：此次有一个小坑就时，如果是在父级路由上加入了 exact 时，子路由就不能进行匹配了，所以不能在有子路由的路由上面加此属性。

* strict: bool

是否匹配斜杠，默认为false，当设置为true时，需要严格匹配路由后是否有斜杠出现，但是一般没大用处，可以忽略。

* sensitive: bool

路径是否区分大小写，默认为false，当设置为true时，需要严格匹配路径的大小写，一般也不咋用

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

