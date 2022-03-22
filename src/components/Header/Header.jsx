import React from 'react';
import './Header.css';
import '../../App.css';
import logo from '../../images/Logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <nav className='row'>
        <div className="col-md-6 logo">
          <img src={logo} alt="" />
        </div>
        <div className="col-md-6 menu">
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