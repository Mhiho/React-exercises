import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

class PersonTwo extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor',props);

  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }
  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
    if(this.props.position === 1) {
    this.inputElement.focus(); 
  }
}
  render() {
    console.log('[Person.js] Inside Render()');

    return (
      <WithClass classes={classes.Person}
          >
          <p onClick={this.props.clicked}>
            Nazywam się {this.props.name}, mam {this.props.age} lat i {this.props.haircolor} włosy.
          </p>
          <p>{this.props.children}</p>
          <input
              ref={(inp) => { this.inputElement = inp }}
              type="text"
              onChange={this.props.changed}
              value={this.props.value}
          />
    </WithClass>
  )
  }
}


export default PersonTwo;
