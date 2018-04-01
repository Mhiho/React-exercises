import React from 'react';
import PersonTwo from './Person/PersonTwo';

const Persons = (props) => props.persons.map( (person,index) => {
    return <PersonTwo
              clicked={() => props.clicked(index)}
              name={person.name}
              age={person.age}
              haircolor={person.haircolor}
              key={person.id}
              changed={(event)=>props.changed(event,person.id)}
              value={person.name}
          />
        });
export default Persons;
