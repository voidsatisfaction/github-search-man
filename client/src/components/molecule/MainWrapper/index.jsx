import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

const MainWrapper = (props) => (
  <article className="main section">
    <div className="row">
      { props.children }
    </div>
  </article>
);

export default MainWrapper;