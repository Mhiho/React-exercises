import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      { id: 0, name: "Michał", age: 35, haircolor: 'ciemny' },
      { id: 1, name: "Maciek", age: 34, haircolor: 'jasnyblond' },
      { id: 2, name: 'Zosia', age: 13, haircolor: 'rudy' }
    ],
    otherState: "some other value",
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow})
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

    const style ={
      backgroundColor: 'lightgreen',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'cornflowerblue',
        color: 'black'
      }

    }
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
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'navy',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <=1) {
      classes.push('bold');
    }


    return (
      <StyleRoot>
      <div className="App">
    <h1>Hi, I am React App ;)</h1>
    <p className={classes.join(' ')}>This is really working!</p>
    <button
      style={style}
      onClick={this.togglePersonsHandler}>Wyświetl imiona

      </button>
      {persons}
      </div>
      </StyleRoot>
    );
  }
}
export default Radium(App)
