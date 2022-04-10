import React from 'react';
import './Header.css';
import '../../App.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <nav className='grid grid-cols__2 align-center'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <ul>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/orders">Order Review</Link></li>
            <li><Link to="/inventory">Manage Inventory</Link></li>
            <li><Link to='/login'>Log In</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;