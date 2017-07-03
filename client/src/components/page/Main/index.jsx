import React, { Component } from 'react';

import { connect } from 'react-redux';

import url from '../../../env/config';

import * as actionRepos from '../../../ducks/searchedRepos';
import * as actionUsers from '../../../ducks/userInfo';
import * as actionGithub from '../../../ducks/actionGithub';

import ListRepos from '../../organism/ListRepos';
import ListWatchingRepos from '../../organism/ListWatchingRepos';
import Container from '../../molecule/Container';
import Panel from '../../molecule/Panel';
import SearchBar from '../../atom/SearchBar';

export default connect (
  (state) => (state),
  (dispatch, props) => ({
    ...props,
    action: {
      getSearchedRepos: (payloads) => (
        dispatch(actionRepos.getSearchedRepos(payloads))
      ),
      addWatchingRepos: (payloads) => (
        dispatch(actionUsers.addWatchingRepos(payloads))
      ),
      deleteWatchingRepos: (payloads) => (
        dispatch(actionUsers.deleteWatchingRepos(payloads))
      ),
      getUserInfo: (payloads) => (
        dispatch(actionUsers.getUserInfo(payloads))
      ),
      followRepo: (payloads) => (
        dispatch(actionGithub.followRepo(payloads))
      ),
      unfollowRepo: (payloads) => (
        dispatch(actionGithub.unfollowRepo(payloads))
      )
    }
  }),
)(class Main extends Component {
  constructor(props) {
    super(props);
    this.searchInputOnChange = this.searchInputOnChange.bind(this);
    this.followButtonOnPress = this.followButtonOnPress.bind(this);
    this.unfollowButtonOnPress = this.unfollowButtonOnPress.bind(this);
  }
  componentWillMount() {
    if (this.props.location.search.includes('code')) {
      const params = new URLSearchParams(this.props.location.search);
      const code = params.get('code');
      this.props.action.getUserInfo({ code, platform: 'github' });
    }
  }
  searchInputOnChange(event) {
    const token = this.props.userInfo.token;
    const searchText = event.target.value;
    this.props.action.getSearchedRepos({ searchText, token });
  }
  followButtonOnPress({ fullInfo }) {
    const token = this.props.userInfo.token
    this.props.action.followRepo({ fullInfo, token })
      .then((response) => {
        /* dispatch add getWatchingRepos */
        this.props.action.addWatchingRepos(fullInfo);
      })
  }
  unfollowButtonOnPress({ fullInfo }) {
    const token = this.props.userInfo.token
    this.props.action.unfollowRepo({ fullInfo, token })
      .then((response) => {
        this.props.action.deleteWatchingRepos(fullInfo);
      })
  }

  render() {
    const {
      searchedRepos,
      userInfo
    } = this.props;
    const { getUserInfoOnClick } = this.props.action;
    return (
      <Container>
        <Panel col="1-8" />
        <Panel col="3-6">
          <h1>Repository Search</h1>
          <SearchBar
            fontSize="130%"
            width="100%"
            margin={10}
            onChange={this.searchInputOnChange}
          />
          <ListRepos
            legends={['name', 'language', 'stars', 'last updated', 'follow']}
            watchingRepos={userInfo.watchingRepos}
            data={searchedRepos}
            login={!!userInfo.token}
            followButtonOnPress={this.followButtonOnPress}
            unfollowButtonOnPress={this.unfollowButtonOnPress}
          />
        </Panel>
        <Panel col="1-4">
          <h1>Watching(nums)</h1>
          {
            userInfo.token ?
            <ListWatchingRepos 
              watchingRepos={userInfo.watchingRepos}
            /> :
            <a
              onClick={getUserInfoOnClick}
              href={url.github}
            >
              Github Login
            </a>
          }
        </Panel>
        <Panel col="1-8" />
      </Container>
    );
  }
});