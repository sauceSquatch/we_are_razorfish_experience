import React from 'react'

const Product = React.createClass({
  propTypes: {
    heading: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    images: React.PropTypes.array.isRequired
  },
  render() {
    return(
      <div className="product">
        <h3>{this.props.heading}</h3>
        <p>{this.props.content}</p>
        {this.props.images.map( (image) => {
          return ( <img src={image}/> )
        })}
        <div className="buy-btn-row">
          <button type="button" className="btn">BUY NOW</button>
        </div>
      </div>
    )
  }
})

export default Product
