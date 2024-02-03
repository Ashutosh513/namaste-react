import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnName, setBtnName] = useState('login');

  const onlineStatus = useOnlineStatus();

  return (
    <div className='header flex justify-between p-4 bg-pink-100 rounded-lg items-center h-[150px]'>
      <div className='logo-container'>
        <img className='logo w-[150px]' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul className='flex'>
          <li className='mx-2'>
            Online Status: {onlineStatus ? 'Online' : 'Offline'}
          </li>
          <li className='mx-2'>
            <Link className='no-underline' to='/'>
              Home
            </Link>
          </li>
          <li className='mx-2'>
            <Link className='no-underline' to='/about'>
              About Us
            </Link>
          </li>
          <li className='mx-2'>
            <Link className='no-underline' to='/contact'>
              Contact Us
            </Link>
          </li>
          <li className='mx-2'>Cart</li>
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
