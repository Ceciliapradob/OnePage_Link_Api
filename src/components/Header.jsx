import React, { useState } from 'react';
import Logo from "/logo.svg";

export default function Header() {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);

  const toggleNavMobile = () => {
    setIsNavMobileOpen(!isNavMobileOpen);
  };

  return (
    <header className='header'>
      <div>
        <a href="/" className='logo' >
          <img src={Logo} alt="Shortly" />
        </a>
      </div>

      <nav className={`nav-block ${isNavMobileOpen ? 'nav-mobile' : ''}`}>
        <ul className='nav-links'>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Resources</a></li>
        </ul>

        <div className='nav-buttons'>
          <a className='button-login'>Login</a>
          <a className='button-sign_up'>Sign Up</a>
        </div>
      </nav>

      <div className="nav-button">
        <button onClick={toggleNavMobile}>
          <svg fill="#bfbfbf" width="25px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
