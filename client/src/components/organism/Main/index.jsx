import React, { Component } from 'react';

const Main = (props) => (
  <div className="section">
    <div className="row">
      <div className="col span-1-of-6" />
      <div className="col span-2-of-6">
        <h1>Leftside</h1>
      </div>
      <div className="col span-2-of-6">
        <h1>rightside</h1>
      </div>
      <div className="col span-1-of-6" />
    </div>
  </div>
);

export default Main;