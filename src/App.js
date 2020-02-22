import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';


import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  render() {

    const { monsters, searchField } = this.state; // destructuration et application des states dans var monsters et searchField
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    // fonction filteredMonster : on filtre les monstres en prenant comme argument un monstre, on passe son nom en lower case et on utilise la méthode includes qui permet de faire une lecture dans le name et de voir si la valeur du seach field est égale à une partie du nom des monstres. filteredMonsters permet d'afficher les monstres filtrés. 

    return (
    <div className="App">
      <input 
        type='search' 
        placeholder='search monsters' 
        onChange={event => this.setState({ searchField: event.target.value })}
      />
      <CardList monsters={filteredMonsters} />
    </div>
    );
  }
}

export default App;
