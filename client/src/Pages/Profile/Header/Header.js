import React from 'react';
import { Link } from 'react-router-dom';
import accountImage from '../../../assets/account.svg';
import exitImage from '../../../assets/exit.svg';
import cartImage from '../../../assets/cart.svg';
import { useDispatch, useSelector } from 'react-redux';
import {checkIsAuth, logout} from '../../../redux/features/auth/authSlice';
import {toast} from 'react-toastify';

function Header() {

  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
    window.localStorage.removeItem('token')
    toast('You logout')
  }

  return (
    <header className="header">
      <div className='homed'>
        <h1 className="logoa">
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
            {isAuth ? (
               <img src={exitImage} alt="Exit" style={{ cursor: 'pointer' }} onClick={logoutHandler}/>
            ): (
              <Link to="/profile" className="image-link">
                <img src={accountImage} alt="Account"/>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

