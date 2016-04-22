import React from 'react'
import ProductGroup from './ProductGroup'

const productData = require('../productData.json')

const ProductsDisplay = React.createClass({

  getInitialState() {
    return { "productData": productData }
  },
  render() {
    return(
      <div className="products-display">
        {this.state.productData.map(setOfProducts => {
          return (
            <ProductGroup
              key={setOfProducts.id}
              heading={setOfProducts.heading}
              products={setOfProducts.products}
            />
          )
        })}
      </div>
    )
  }
})

export default ProductsDisplay
