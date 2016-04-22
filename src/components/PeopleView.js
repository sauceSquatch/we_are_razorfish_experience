import React from 'react'
import Person from './Person'

const PeopleView = React.createClass({

  render() {
    return(
      <div className="products-display">
        {this.state.peopleData.map( person => {
          return (
            <Person
              key={person.id}
              name={person.heading}
              title={person.title}
              video={person.products}
            />
          )
        })}
      </div>
    )
  }
})

export default PeopleView
