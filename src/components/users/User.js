import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Spinner from './../layout/Spinner';

export class User extends Component {
  static propTypes = {
    getUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const loginParam = this.props.match.params.login;
    this.props.getUser(loginParam);
  }

  render() {
    console.log(this.props);
    const { name, login, avatar_url, location, bio, html_url, hireable } = this.props.user;
    const { loading } = this.props;
    if (loading) {
      return <Spinner />;
    }
    return (
      <>
        <Link to="/" className="btn btn-light">
          Back To Search
        </Link>
        <span>
          Hireable:{' '}
          {hireable ? <i className="fa fa-check text-success"></i> : <i className="fa fa-times-circle text-danger"></i>}
        </span>
        <div className="card">
          <div className="all-center">
            <img src={avatar_url} alt={login} className="round-img" />
            <h2>{name}</h2>
            {location && <p className="userLocation">Location: {location}</p>}
            <a className="btn btn-dark" href={html_url}>
              visit Github site
            </a>
            <p className="userBio">{bio}</p>
          </div>
        </div>
      </>
    );
  }
}

export default User;
