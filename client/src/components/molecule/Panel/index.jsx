import React from 'react';

const Panel = (props) => {
  const thisGrid = props.col.split('-')[0]
  const entireGrid = props.col.split('-')[1]
  return (
    <div
      className={"col span-" + thisGrid + "-of-" + entireGrid }
    >
      { props.children }
    </div>
  );
};

export default Panel;