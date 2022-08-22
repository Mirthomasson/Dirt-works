import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import Logo from './logo.png';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButtton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButtton();
  }, []);

  window.addEventListener('resize', showButtton);

  return (
    <>
    <nav className='navbar'>
       <div className='navbar-container'>
        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
          <img src={Logo} alt='logo' id='logo'/>
            DIRT WORKS <i className="fab.fa-typo3" />    
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              SERVICES
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              CONTACT
            </Link> 
          </li>
          <li className='nav-item social-icon'>
            <Link
              to='https://www.facebook.com/Dirt-Works-180241862580740/'
              className='nav-links'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-square' />
            </Link>
          </li>
          <li>
              <Link
                to='/free-estimate'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Free Estimate
              </Link>
            </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>Free Estimate</Button>}
       </div>
       </nav>
    </>
  )
}

export default Navbar