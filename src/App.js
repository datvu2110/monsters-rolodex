import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import CardList  from './components/card-list/card-list'
import SearchBox from './components/searchbox/searchbox';

class App extends Component {
	
	state= {
		monsters: [],
		searchField:''
	}
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({monsters:users}))
	}

	onSearchChange = (e) => {
		this.setState({searchField:e.target.value}, () => {console.log(this.state.searchField)})
	}

    render(){

		const {monsters, searchField} = this.state

		const filteredMonsters = monsters.filter(monster => (
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		))

        return (	
            <div className="App">
				<h1>Monster Rolodex</h1>
				<SearchBox onSearchChange={this.onSearchChange} />
				<CardList monsters={filteredMonsters} />
            </div>
      )
  }
  
}

export default App;
