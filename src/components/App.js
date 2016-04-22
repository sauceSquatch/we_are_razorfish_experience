import React from 'react'
import PeopleView from './PeopleView'

// Uncertain why I can't use ES2015's import for this,
// but c'est la vie; at least it works.
const data = require('../peopleData.json')



const App = React.createClass({
  getInitialState() {
    return data
  },

  render() {
    return (
      <div>
        <h1>App</h1>
        <PeopleView peopleData={this.state.data.people} />
      </div>
    )
  }
})

export default App
