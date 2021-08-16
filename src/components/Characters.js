import React, { useState, useEffect } from 'react';

const Characters = () => {
  //Estados
  const [characters, setCharacters] = useState([])

  // Llamado a la API
  useEffect( () => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, [])

  return ( 
    <div className="container">
      <div className="characters">
          {
            characters.map( item => (
              <div key={item.id} className="box">
                <img src={item.image} alt={item.name} />
                <div className="character">
                  <h3 className="name">{item.name}</h3>
                  <div>
                    <p className="specie">{item.species}</p>
                    <p className="status">{item.status}</p>
                  </div>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  );
}

export default Characters;