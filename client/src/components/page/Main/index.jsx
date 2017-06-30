import React, { Component } from 'react';

import ListRepos from '../../organism/ListRepos';
import Container from '../../molecule/Container';
import Panel from '../../molecule/Panel';
import SearchBar from '../../atom/SearchBar';

const Main = (props) => (
  <Container>
    <Panel col="1-8" />
    <Panel col="3-6">
      <h1>Repository Search</h1>
      <SearchBar
        fontSize="130%"
        width="100%"
        margin={20}
        onChange={props.searchInputOnChange}
      />
      <ListRepos
        legends={props.listLegends}
        data={props.searchedRepos}
      />
    </Panel>
    <Panel col="1-4">
      <h1>watched</h1>
    </Panel>
    <Panel col="1-8" />
  </Container>
);

export default Main;