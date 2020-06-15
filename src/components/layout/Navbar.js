import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navbar({ title, icon }) {
  return (
    <nav className="navbar bgPrimary">
      <Link to="/">
      <h1>
        <i className={icon}></i>
        {title}
      </h1>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Github Developers',
  icon: 'fab fa-github',
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
