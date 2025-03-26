import React from 'react';
import { Link } from 'react-router-dom';
// Import of an asset usin alias in Webpack
import webpackLogo from 'images/favicon.png';

class Header extends React.Component {
  render() {
    return (
      <nav className="header">
        <Link to="/" className="logo nav-link">
          <img width="50px" src={webpackLogo} alt="Webpack Logo" />
        </Link>
        <Link to="/" className="nav-item nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-item nav-link">
          About
        </Link>
      </nav>
    );
  }
}

export { Header };
