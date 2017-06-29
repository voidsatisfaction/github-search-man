import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

import ListRepos from '../../organism/ListRepos';
import MainWrapper from '../../molecule/MainWrapper';
import Panel from '../../molecule/Panel';

const listLegends = ['id','name','language','stars','updated'];

const Main = (props) => (
  <MainWrapper>
    <Panel col="1-6" />
    <Panel col="3-6">
      <h1>Repository Search</h1>
      <TextField 
        fullWidth
        hintText="Input Repositry keyword!"
        style={{
          margin: '20px'
        }}
      />
      <ListRepos
        legends={listLegends}
      />
    </Panel>
    <Panel col="1-6">
      <h1>watched</h1>
    </Panel>
    <Panel col="1-6" />
  </MainWrapper>
);

export default Main;