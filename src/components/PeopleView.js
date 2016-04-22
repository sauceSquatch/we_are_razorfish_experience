import React from 'react'
import Person from './Person'

const PeopleView = React.createClass({

  propTypes: {
    peopleData: React.PropTypes.array.isRequired
  },

  render() {
    return(
      <div className="people-display">
        {this.props.peopleData.map( person => {
          return (
            <Person
              key={person.id}
              name={person.name}
              title={person.title}
              video={person.video}
            />
          )
        })}
      </div>
    )
  }
})

export default PeopleView
