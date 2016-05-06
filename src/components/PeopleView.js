import React from 'react'
import Person from './Person'
// var TweenLite = require('../../greensock/TweenLite.js')

const TweenLite = window.TweenLite

const PeopleView = React.createClass({

  propTypes: {
    peopleData: React.PropTypes.array.isRequired
  },

  getInitialState: function() {
      return {
          currentId: 0
      };
  },

  componentDidMount: function() {
    console.log(window.TweenLite)
    // var main = ReactDOM.findDOMNode(this)
    var main = this.refs.mainPerson
    console.log("main: ", main)
    window.TweenLite.to(main, 0.4, {x:500});

  },

  nextPerson: function() {

    if(this.state.currentId >= (this.props.peopleData.length - 1)) {
      this.activeId = 0
    } else {
      this.activeId = this.state.currentId + 1
    }

    this.setState(function(state) {
      return {currentId: this.activeId};
    });

    var main = this.refs.mainPerson;
    
    window.TweenLite.to(main, 0.4, {x:500});
  },

  transitionOut: function() {
    const el = this.refs.mainPerson;
  },

  render() {
    return(
      <div className="people-display">
        <h2 onClick={this.nextPerson}>Click me! currentId: {this.state.currentId}</h2>

        <Person
          ref="mainPerson"
          id="mainPerson"
          key={this.props.peopleData[this.state.currentId].id}
          name={this.props.peopleData[this.state.currentId].name}
          title={this.props.peopleData[this.state.currentId].title}
          video={this.props.peopleData[this.state.currentId].video}
        />
        
      </div>
    )
  }
})

export default PeopleView
