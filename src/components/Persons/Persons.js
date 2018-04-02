import React, { PureComponent } from 'react';
import PersonTwo from './Person/PersonTwo';

class Persons extends PureComponent{

  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor',props);

  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }
  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps){
    console.log('[UPDATE Persons.js] Inside component componentWillReceiveProps', nextProps)
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE Persons.js] INSIDE COMPONENT shouldComponentUpdate',nextProps, nextState);
  //   return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked;
  //   // return true;
  // }

  componentWillUpdate(nextProps,nextState){
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate(){
    console.log('[UPDATE Persons.js] Inside componentDIDUpdate')
  }

   render() {
    console.log('[Persons.js] Inside in Render');

     return this.props.persons.map( (person,index) => {
       return <PersonTwo
              position={index}
              clicked={() => this.props.clicked(index)}
              name={person.name}
              age={person.age}
              haircolor={person.haircolor}
              key={person.id}
              changed={(event)=>this.props.changed(event,person.id)}
              value={person.name}
          />
        });
  }
}
export default Persons;
