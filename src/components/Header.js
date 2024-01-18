import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [btnName, setBtnName] = useState('login');

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            <Link className='no-underline' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='no-underline' to='/about'>
              About Us
            </Link>
          </li>
          <li>
            <Link className='no-underline' to='/contact'>
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <button
            className='login-btn'
            onClick={() => {
              btnName === 'login' ? setBtnName('logout') : setBtnName('login');
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;