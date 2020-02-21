import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Franckenstein',
          id: 1,
        },
        {
          name: 'Dracula',
          id: 2,
        },
        {
          name: 'Zombie',
          id: 3,
        },
      ]
    }
  }  

  render() {
    return (
    <div className="App">
      <header className="App-header">
        {this.state.monsters.map(monster => <h1 key={ monster.id }>{ monster.name }</h1>)}
        <button onClick={() => this.setState({ string: 'Coucou Machin' })}>boutton</button>
      </header>
    </div>
    );
  }
}

export default App;
