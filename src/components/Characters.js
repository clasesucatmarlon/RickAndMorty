import React, { useState, useEffect } from 'react';

const Characters = ({characters, search}) => {

  const filterCharacter = characters.filter((item) => (item.name.toLowerCase().includes(search.toLowerCase())))

  return ( 
    <div className="container">
      <div className="characters">
          {
            filterCharacter.map( item => (
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