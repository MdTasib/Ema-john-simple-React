import React from 'react';
import './Header.css';
import '../../App.css';
import logo from '../../images/Logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <nav className='grid grid-cols__2 align-center'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <ul>
            <li><a href="/order">Order</a></li>
            <li><a href="/review">Order Review</a></li>
            <li><a href="/inventory">Manage Inventory</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;