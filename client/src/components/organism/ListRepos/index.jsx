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

const followButton = ({ followUrl, fullInfo, followButtonOnPress }) => (
  <IconButton
    touch
    onTouchTap={(e) => {
      followButtonOnPress({ fullInfo });
    }}
  >
    <AddCircleOutline />
  </IconButton>
);

const unfollowButton = ({ followUrl, fullInfo, unfollowButtonOnPress }) => (
  <IconButton
    touch
    onTouchTap={(e) => {
      unfollowButtonOnPress({ fullInfo });
    }}
  >
    <Block />
  </IconButton>
);

const followColumn = ({key, login, follow, fullInfo, followButtonOnPress, unfollowButtonOnPress }) => {
  if (login && follow) {
    return (
      <TableRowColumn style={commonStyle}>
        { unfollowButton({ fullInfo, unfollowButtonOnPress }) }
      </TableRowColumn>
    );
  } else if(login) {
    return (
      <TableRowColumn style={commonStyle}>
        { followButton({ fullInfo, followButtonOnPress }) }
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
                    key: i,
                    login: props.login,
                    follow: watchingReposOnlyId.includes(element.id),
                    fullInfo: element,
                    followButtonOnPress: props.followButtonOnPress,
                    unfollowButtonOnPress: props.unfollowButtonOnPress,
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