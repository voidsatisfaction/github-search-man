import React from 'react';

const MainWrapper = (props) => (
  <article className="main section">
    <div className="row">
      { props.children }
    </div>
  </article>
);

export default MainWrapper;