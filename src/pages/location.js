import React, { PureComponent } from 'react'

class Product extends PureComponent {
  constructor() {
    super();
  }
  
  render() {
    console.log(this.props)
    return(
      <div>
        <h2>Product</h2>
      </div>
    )  
  }
}

export default Product