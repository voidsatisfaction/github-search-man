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
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.searchInputOnChange = this.searchInputOnChange.bind(this);
  }

  searchInputOnChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    const { searchedRepos } = this.props;
    const { searchText } = this.state;
    console.log(searchText)
    return (
      <div>
        <Header
          title="Github Search man"
          leftIcon="muidocs-icon-navigation-expand-more"
        />
        <Main
          searchText={searchText}
          searchedRepos={searchedRepos}
          searchInputOnChange={this.searchInputOnChange}
        />
      </div>
    );
  }
});