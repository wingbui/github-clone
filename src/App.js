import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import Search from './components/users/Search';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  // search users frorm github database
  searchUsers = async (searchTerm) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchTerm}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items });
    this.setState({ loading: false });
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
        `https://api.github.com/users?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
      );

      this.setState({ users: res.data });
      this.setState({ loading: false });
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
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
