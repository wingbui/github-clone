import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Search extends Component {
 static propTypes = {
   searchUsers: PropTypes.func.isRequired,
   setAlert: PropTypes.func.isRequired,
 }

  state = {
    searchTerm: '',
    isEmpty: true,
  };

  // handle submitting form
  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.searchTerm === '') {
      this.props.setAlert({ msg: 'please enter search terms', type: 'danger' });
      this.setState({ isEmpty: true });

      setTimeout(() => {
        this.props.setAlert(null);
      }, 4000);
    } else {
      this.props.searchUsers(this.state.searchTerm);
      this.setState({
        searchTerm: '',
        isEmpty: true,
      });
    }
  };

// handle form input changes
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, isEmpty: false });
  };
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="search"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.onChange}
            placeholder="Search Devs..."
          />
          {!this.state.isEmpty && <input type="submit" value="Search" className="btn btn-dark btn-block" />}
        </form>
      </div>
    );
  }
}
