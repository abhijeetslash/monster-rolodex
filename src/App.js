import React,{Component} from 'react';
import './App.css';

import CardList from './components/cardList/cardList';
import SearchMonster from './components/searchMonster/searchMonster';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField: ''
    }
  }

  componentDidMount(){

    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => {
    //   return res.json()
    // }).then(users => {
    //   this.setState({
    //     monsters : users
    //   });
    // })

    const fetchData = async() => {

      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
      
      this.setState({
            monsters : users
           });

    }

    fetchData();

  }

  searchText = (event) => {
    
    const text = event.target.value;
    this.setState({
      searchField: text
    });

}

  render(){
    const filterMonsters = [...this.state.monsters];
    const filteredMonsters = filterMonsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="App">
        <SearchMonster searchText={this.searchText}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
