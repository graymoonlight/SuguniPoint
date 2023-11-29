import React from 'react';
import { Link } from 'react-router-dom';


function Main() {
    return (
      <div className='routes-reglog'>
        <div className='nav-buttons'>
          <div className='reg'>
            <h2>You don't have account?</h2>
            <button><Link to="/register" className='link-logreg'>REGISTRATION</Link></button>
          </div>
          <div className='reg'>
            <h2>You already have account?</h2>
            <button><Link to="/login" className='link-logreg'>LOG IN</Link></button>
          </div>
        </div>
      </div>
    );
}
  
export default Main;