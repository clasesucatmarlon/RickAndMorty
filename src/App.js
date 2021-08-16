import { useState, useEffect } from 'react';
import Characters from './components/Characters';
import Header from './components/Headers';

import './main.scss';
import './components/Headers.css'

function App () {
  //Estados
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('');

  // Llamado a la API
  useEffect( () => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, [])

  console.log(characters)

  return (
    <div className="">
      <Header
        title='Rick and Morty API'
        content='Application that shows the characters of the famous Rick and Morty series'
      />
      <div className="container container_search">
        <label>Search: </label>
        <input 
          type="text"
          placeholder="Search a character"
          className="box__search"
          onChange={e => setSearch(e.target.value)}
        /> 
      </div>

      <Characters characters={characters} search={search}/>
    </div>
  )
}

export default App;