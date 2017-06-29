import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

const Header = (props) => (
  <AppBar 
    title={props.title}
    iconClassNameRight={props.leftIcon}
  />
);

export default Header;