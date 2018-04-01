import React, { Component } from 'react';
import Radium from 'radium';
import './Person.css';


const PersonTwo = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px',
      border: '1px solid #eee'
    }
  }
return (
  <div className="Person"
        style={style}>
  <p onClick={props.clicked}>
  Nazywam się {props.name}, mam {props.age} lat i {props.haircolor} włosy.
  </p>
  <p>{props.children}</p>
  <input type="text"
        onChange={props.changed}
        value={props.value}
        />
  </div>
)
}

export default Radium(PersonTwo);
