import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/organism/Header';
import Main from './components/page/Main';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header
            title="Github Search man"
            leftIcon="muidocs-icon-navigation-expand-more"
          />
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
};