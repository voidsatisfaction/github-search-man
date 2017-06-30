import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actionRepos from '../../../ducks/searchedRepos';
import * as actionUsers from '../../../ducks/userInfo';

import ListRepos from '../../organism/ListRepos';
import Container from '../../molecule/Container';
import Panel from '../../molecule/Panel';
import SearchBar from '../../atom/SearchBar';

export default connect (
  (state) => (state),
  (dispatch, props) => ({
    ...props,
    action: {
      getSearchedRepos: (payloads) => {
        dispatch(actionRepos.getSearchedRepos(payloads));
      },
      getUserInfo: (payloads) => {
        dispatch(actionUsers.getUserInfo(payloads));
      }
    }
  }),
)(class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.searchInputOnChange = this.searchInputOnChange.bind(this);
    this.getUserInfoOnClick = this.getUserInfoOnClick.bind(this);
  }
  componentWillMount() {
    if (this.props.location.search.includes('code')) {
      const params = new URLSearchParams(this.props.location.search);
      const code = params.get('code');
      this.props.action.getUserInfo();
      alert(code);
    }
  }
  searchInputOnChange(event) {
    const searchText = event.target.value;
    this.props.action.getSearchedRepos({ searchText });
  }
  getUserInfoOnClick(event) {
    this.props.action.getUserInfo({ hi: 'hi' });
  }

  render() {
    console.log(this.props);
    const { searchedRepos } = this.props;
    const { searchText } = this.state;
    const { getUserInfoOnClick } = this.props.action;
    return (
      <Container>
        <Panel col="1-8" />
        <Panel col="3-6">
          <h1>Repository Search</h1>
          <SearchBar
            fontSize="130%"
            width="100%"
            margin={20}
            onChange={this.searchInputOnChange}
          />
          <ListRepos
            legends={['name', 'language', 'stars', 'updated']}
            data={searchedRepos}
          />
        </Panel>
        <Panel col="1-4">
          <h1>watched</h1>
          <a onClick={getUserInfoOnClick} href="https://github.com/login/oauth/authorize?client_id=6e3a7ceef7e260c19712">
            Github Login
          </a>
        </Panel>
        <Panel col="1-8" />
      </Container>
    );
  }
});