import React, {Component, Fragment} from 'react';
import classes from './Cockpit.css';


class Cockpit extends Component {
  render(){
    
    let btnClass = classes.Button;
  if(this.props.showPersons){
    btnClass = [classes.Button, classes.Red].join(' ');
  }
    const assignedClasses = [];
    if (this.props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.props.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }

    return(
      <Fragment>
        <h1>{this.props.appTitle}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.props.clicked}>
          Wyświetl imiona
        </button>
      </Fragment>
    )
  }

}

export default Cockpit;
