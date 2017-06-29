import React, { Component } from 'react';

import Header from './components/organism/Header';
import Main from './components/page/Main';

export default class App extends Component {
  state = {  }
  render() {
    return (
      <div>
        <Header
          title="Github Search man"
          leftIcon="muidocs-icon-navigation-expand-more"
        />
        <Main />
      </div>
    );
  }
}