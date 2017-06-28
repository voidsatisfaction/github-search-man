import React, { Component } from 'react';

import Header from './components/organism/Header';

export default class App extends Component {
  state = {  }
  render() {
    return (
      <div>
        <Header />
        <h1>Hello world!</h1>
      </div>
    );
  }
}