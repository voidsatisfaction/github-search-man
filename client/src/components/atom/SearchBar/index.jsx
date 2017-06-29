import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

const SearchBar = (props) => {
  const margin = props.margin || 5;
  const fontSize = props.fontSize || '18px';
  const width = props.width || '80%';
  return (
    <TextField 
      hintText="Input Repositry Name!"
      style={{
        margin: margin + 'px',
        fontSize,
        width
      }}
    />);
};

export default SearchBar;