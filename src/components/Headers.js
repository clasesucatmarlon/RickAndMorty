import React, { createFactory } from 'react';

const Header = ({ title, content }) => {
  return ( 
    <header>
      <div className="container">
        <div className="content">
          <h1 className="title">{ title }</h1>
          <p className="text">{ content }</p>
        </div>
      </div>
    </header>
  );
}

export default Header;