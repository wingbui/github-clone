import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    searchTerm: '',
    isEmpty: true,
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.searchTerm === '') {
      this.props.setAlert({ show: true, msg: 'please enter search terms', type: 'danger' });
      this.setState({ isEmpty: true });

      setTimeout(() => {
        this.props.setAlert({ show: false, msg: '', type: 'success' });
      }, 4000);

      return;
    }
    this.props.searchUsers(this.state.searchTerm);
    this.setState({
      searchTerm: '',
      isEmpty: true,
    });
  };

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
