import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  searchUsers = async (searchTerm) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchTerm}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items });
    this.setState({ loading: false });
  };

  async componentDidMount() {
    this.setState({ loading: true });
    setTimeout(async () => {
      const res = await axios.get(
        `https://api.github.com/users?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
      );

      this.setState({ users: res.data });
      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
