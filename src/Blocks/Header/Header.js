import React from 'react';

import logo from '../../assets/png/logo.png';

import './Header.css';

const Header = ({name}) => (
  <header className="Header">
    <img src={logo} className="Header-logo" alt="logo" />
    <h1 className="Header-title">Авиакомпания "Высокое небо"</h1>
  </header>
);

export default Header;