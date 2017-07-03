import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const makeTable = ({ watchingRepos }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Author</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {
        watchingRepos.map((repo,i) => (
          <TableRow key={i}>
            <TableRowColumn>{repo.name}</TableRowColumn>
            <TableRowColumn>{repo.owner.login}</TableRowColumn>
          </TableRow>   
        ))
      }
    </TableBody>
  </Table>
);

const ListWatchingRepos = (props) => {
  const { watchingRepos } = props;
  return (
    <div>
      {
        makeTable({ watchingRepos })
      }
    </div>
  );
}

export default ListWatchingRepos;