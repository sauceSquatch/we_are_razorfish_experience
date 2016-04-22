import React from 'react'
import Product from './Product'

const productData = require('../productData.json')

const ProductGroup = React.createClass({
  propTypes: {
    heading: React.PropTypes.string.isRequired,
    products: React.PropTypes.array.isRequired
  },
  render() {
    return(
      <div className="product-group">
        <h2>{this.props.heading}</h2>
        {this.props.products.map( (product) => {
          return (
            <Product
              key={product.id}
              heading={product.title}
              content={product.description}
              images={product.images}
            />
          )
        })}
      </div>
    )
  }
})

export default ProductGroup
