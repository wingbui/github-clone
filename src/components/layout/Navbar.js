import React  from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ title, icon }) {
  return (
    <nav className="navbar bgPrimary">
      <h1>
        <i className={icon}></i>
        {title}
      </h1>
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

