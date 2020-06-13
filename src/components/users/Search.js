import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    searchTerm: '',
    isEmpty: true,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchTerm === '') {
      this.setState({ isEmpty: true });
      return;
    }
    this.props.searchUsers(this.state.searchTerm);
    this.setState({
      searchTerm: '',
      isEmpty: true,
    });
  };

  onChange = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
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
