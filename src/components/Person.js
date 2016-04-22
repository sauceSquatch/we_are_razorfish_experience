import React from 'react'

const Person = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.array.isRequired
    video: React.PropTypes.array.isRequired
  },
  render() {
    return(
      <div className="person">
        <h3>{this.props.name}</h3>
        <p>{this.props.title}</p>
        <p>{this.props.video}</p>
      </div>
    )
  }
})

export default Person
