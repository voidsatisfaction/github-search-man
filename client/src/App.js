import React, { Component } from 'react';

import { connect } from 'react-redux';

import Header from './components/organism/Header';
import Main from './components/page/Main';

import * as actionRepos from './ducks/searchedRepos';

export default connect (
  (state) => (state),
  (dispatch, props) => ({
    ...props,
    action: {
      getSearchedRepos: (payloads) => {
        dispatch(actionRepos.getSearchedRepos(payloads));
      },
    }
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
    const searchText = event.target.value;
    this.props.action.getSearchedRepos({ searchText });
  }

  render() {
    const { searchedRepos } = this.props;
    const { searchText } = this.state;
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
          listLegends={['name','language','stars','updated']}
        />
      </div>
    );
  }
});