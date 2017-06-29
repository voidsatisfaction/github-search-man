import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

const SearchBar = (props) => (
  <TextField 
    fullWidth
    hintText="Input Repositry keyword!"
    style={{
      margin: '20px'
    }}
  />
);

export default SearchBar;