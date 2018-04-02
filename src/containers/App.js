import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor',props);
    this.state = {
        persons: [
          { id: 0, name: "Michał", age: 35, haircolor: 'ciemny' },
          { id: 1, name: "Maciek", age: 34, haircolor: 'jasnyblond' },
          { id: 2, name: 'Zosia', age: 13, haircolor: 'rudy' }
        ],
        otherState: "some other value",
        showPersons: false,
        toggleClicked: 0
      }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }
  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE App.js] INSIDE COMPONENT shouldComponentUpdate',nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //           nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps,nextState){
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate(){
    console.log('[UPDATE App.js] Inside componentDIDUpdate')
  }






  deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( ( prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }
  nameChange = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons});

  }


  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          <Persons
           persons={this.state.persons}
           clicked={this.deletePersonHandler}
           changed={this.nameChange}
           />
        </div>
      );
    }

    return (
      <WithClass classes={classes.App}>
      <button onClick={()=> {this.setState({showPersons: true})}}>SHOW PERSONS</button>
      <Cockpit
        appTitle={this.props.title}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}
        />
      {persons}
      </WithClass>
    );
  }
}
export default App;
