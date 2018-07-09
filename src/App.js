import React, { Component } from 'react';
import './App.css';
import Hello from './Hello';
import Welcome from './Welcome';
import Clock from './Clock';
import Toggle from './Toggle';
import Greeting from './UserGreeting';
import Reservation from './Form';


class App extends Component {

  
  render() {
    const formatName = (user) => {
      return user.firstName + ' ' + user.lastName;
    }

    let user1 = {
      firstName: 'Brittany',
      lastName: 'Morris',
      age: 25,
    };

    let user2 = {
      firstName: 'Brittany',
      lastName: 'Mendez',
      age: 29,
    };

    let user3 = {
      firstName: 'Ryan',
      lastName: 'Morris',
      age: 29,
    };

    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
    <li>{number}</li>
);


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <Greeting isLoggedIn={false} />
        
        <Hello name = {formatName(user2)}/>
        <Welcome name = {formatName(user2)}/>

        <Hello name = {formatName(user1)}/>
        <Welcome name = {formatName(user1)}/>

        <Hello name = {formatName(user3)}/>
        <Welcome name = {formatName(user3)}/>

        <Clock />
      
        <Reservation />

        <Toggle />
        
        <ul>{listItems}</ul>,

      </div>
    );
  }
}

export default App;
