import React from 'react';
import './App.css';
import './header.css'
import logo from "/src/assets/prosumers-and-customer-service.jpg"

const Header = ({ products, increment, decrement }) => {
  return (
    <header>
     <div className="header-controls">
     <div className="header-left">
     <img src={logo} alt="Logo" className="logo" /> 
     </div>
     <div className="header-center">
      <p>Number of Products: {products}</p>
      <div className="button-group">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;