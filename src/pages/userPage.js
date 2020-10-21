import React, { PureComponent } from 'react'

class UserPage extends PureComponent {
  componentDidMount() {
    console.log('UserPage渲染了。。')
  }
  componentWillUnmount() {
    console.log('userPage卸载了。。。')
  }
  render() {
    // 挂载了 history: location match:三个对象
    console.log('UserPage prosp', this.props)
    return <div style={{margin:16}}>UserPage == Count:{this.props.count}</div>
  }
}

export default UserPage