import React, { Component } from 'react';

import MainWrapper from '../../molecule/MainWrapper';
import Panel from '../../molecule/Panel';

const Main = (props) => (
  <MainWrapper>
    <Panel col="1-6" />
    <Panel col="3-6">
      <h1>Repository Search</h1>
    </Panel>
    <Panel col="1-6">
      <h1>rightside</h1>
    </Panel>
    <Panel col="1-6" />
  </MainWrapper>
);

export default Main;