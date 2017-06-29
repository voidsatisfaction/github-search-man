import React, { Component } from 'react';

import { connect } from 'react-redux';

import Header from './components/organism/Header';
import Main from './components/page/Main';

export default connect (
  (state) => (state),
  (dispatch, props) => ({
    dispatch,
    ...props,
  }),
)(class App extends Component {
  state = {  }
  render() {
    console.log(this.props)
    this.props.dispatch({ type: 'TEST' })
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
});