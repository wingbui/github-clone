import React from 'react';
import PropTypes from 'prop-types';

export default function UserItem({  login, avatar_url, html_url  }) {
  return (
    <div className="card text-center">
      <img className="round-img" src={avatar_url} alt={login} />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
};
