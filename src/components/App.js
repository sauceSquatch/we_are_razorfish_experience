import React from 'react'
import ProductsDisplay from './ProductsDisplay'

// Uncertain why I can't use ES2015's import for this,
// but c'est la vie; at least it works.
const data = require('../templateConfiguration.json')



const App = React.createClass({
  getInitialState() {
    return data
  },

  render() {
    let includeProductsDisplay
 
    if (this.state.templates.productsDisplay) {
      includeProductsDisplay = (<ProductsDisplay />)
    }

    return (
      <div>
        <h1>App</h1>
        {includeProductsDisplay}
      </div>
    )
  }
})

export default App
