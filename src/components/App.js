/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Profile from './Profile';

class App extends React.Component {
  render() {
      return (
          <div>
          <nav className="navbar navbar-inverse">
                  <div className="container-fluid">
                      <div className="navbar-header">
                          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand" href="#">Offers Recommender System</a>
                      </div>
                      <div className="collapse navbar-collapse" id="myNavbar">
                          <ul className="nav navbar-nav">
                              <li className="active"><NavLink to="/home">Offers</NavLink></li>
                              <li className="active"><NavLink to="/profile">Profile</NavLink></li>

                          </ul>
                      </div>
              </div>
          </nav>
              <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/home" component={Dashboard} />
                  <Route exact path="/profile" component={Profile} />
              </Switch>
          </div>
      );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;