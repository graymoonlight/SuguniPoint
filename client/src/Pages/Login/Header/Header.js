import React from 'react';
import { Link } from 'react-router-dom';
import accountImage from '../../../assets/account.svg';
import cartImage from '../../../assets/cart.svg';

function Header() {
  return (
    <header className="header">
      <div className='homed'>
        <h1 className="logo">
          Suguni<span>Point</span>
        </h1>
        <h3 className="subtitle">Asian e-market</h3>
      </div>
      <nav>
        <ul className='nav-links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Catalog</Link></li>
        </ul>
        <ul className='user-actions'>
          <li>
            <img src={cartImage} alt="Cart"/>
          </li>
          <li>
            <Link to="/profile" className="image-link">
              <img src={accountImage} alt="Account"/>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

