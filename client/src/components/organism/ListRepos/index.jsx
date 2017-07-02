import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import Block from 'material-ui/svg-icons/content/block';

const commonStyle = {
  padding: '10px',
  width: '10%'
};

const toggleFollowButton = () => {

};

const followButton = () => (
  <IconButton
    tooltip="top-center"
    touch
    onTouchTap={(e) => {
      console.log('hi');
      console.log(e);
    }}
  >
    <AddCircleOutline />
  </IconButton>
);

const unfollowButton = () => (
  <IconButton
    tooltip="top-center"
    touch
    onTouchTap={(e) => {
      console.log('hi');
      console.log(e);
    }}
  >
    <Block />
  </IconButton>
);

const followColumn = ({ login, follow }) => {
  if (login && follow) {
    return (
      <TableRowColumn style={commonStyle}>
        { unfollowButton() }
      </TableRowColumn>
    );
  } else if(login) {
    return (
      <TableRowColumn style={commonStyle}>
        { followButton() }
      </TableRowColumn>
    );
  } else {
    return null;
  }
};

const ListRepos = (props) => {
  const watchingReposOnlyId = props.watchingRepos.reduce((prev, current) => {
    prev.push(current.id);
    return prev;
  }, [])
  console.log(watchingReposOnlyId);
  return (
    <Table>
      <TableHeader
        adjustForCheckbox={false}
        displaySelectAll={false}
        enableSelectAll={false}
      >
        <TableRow>
          <TableHeaderColumn
            style={{
              padding: '10px',
              width: '15%'
          }}>
            {props.legends[0]}
          </TableHeaderColumn>
          <TableHeaderColumn style={commonStyle}>
            {props.legends[1]}
          </TableHeaderColumn>
          <TableHeaderColumn style={commonStyle}>
            {props.legends[2]}
          </TableHeaderColumn>
          <TableHeaderColumn style={commonStyle}>
            {props.legends[3]}
          </TableHeaderColumn>
          {
            props.login ?
            <TableHeaderColumn style={commonStyle}>
              {props.legends[4]}
            </TableHeaderColumn> :
            null
          }
        </TableRow>
      </TableHeader>
      <TableBody
        displayRowCheckbox={false}
      >
        {
          props.data.length > 0 ?
          props.data.map((element, i) => {
            return (
              <TableRow key={i}>
                <TableRowColumn
                  style={{
                    padding: '10px',
                    width: '15%'
                  }}
                >
                  {element.name}
                </TableRowColumn>
                <TableRowColumn style={commonStyle}>{element.language}</TableRowColumn>
                <TableRowColumn style={commonStyle}>{element.star}</TableRowColumn>
                <TableRowColumn style={commonStyle}>{element.updated}</TableRowColumn>
                {
                  followColumn({
                    login: props.login,
                    follow: watchingReposOnlyId.includes(element.id)
                  })
                }
              </TableRow>
            );
          }) :
          null
        }
      </TableBody>
    </Table>
  );
}

export default ListRepos;