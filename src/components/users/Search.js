import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    searchTerm: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.searchTerm);
    this.setState({
      searchTerm: '',
    });
  };

  onChange = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
      </div>
    );
  }
}