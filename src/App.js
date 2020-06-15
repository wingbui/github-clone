import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import Search from './components/users/Search';
import User from './components/users/User';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
  };

  // search users frorm github database
  searchUsers = async (searchTerm) => {
    this.setState({ loading: true });
    console.log(process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_CLIENT_SECRET);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchTerm}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // get a single user form api with :login param
  getUser = async (login) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    this.setState({ user: res.data, loading: false });
  };

  // set alert on of off
  setAlert = (alert) => {
    if (alert) {
      const { type, msg } = alert;
      this.setState({
        alert: {
          msg,
          type,
        },
      });
    } else {
      this.setState({ alert: null });
    }
  };

  async componentDidMount() {
    this.setState({ loading: true });
    setTimeout(async () => {
      const res = await axios.get(
        `https://api.github.com/users?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      );

      this.setState({ users: res.data, loading: false });
    }, 1000);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <>
                    <Search searchUsers={this.searchUsers} setAlert={this.setAlert} />
                    <Users loading={this.state.loading} users={this.state.users} />
                  </>
                )}
              />
              <Route
                path="/users/:login"
                render={(props) => (
                  <User {...props} user={this.state.user} getUser={this.getUser} loading={this.state.loading} />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
