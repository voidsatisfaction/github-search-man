import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const commonStyle = {
  padding: '10px',
  width: '10%'
};

const ListRepos = (props) => {
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
              width: '20%'
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
                    width: '20%'
                  }}
                >
                  {element.name}
                </TableRowColumn>
                <TableRowColumn style={commonStyle}>{element.language}</TableRowColumn>
                <TableRowColumn style={commonStyle}>{element.star}</TableRowColumn>
                <TableRowColumn style={commonStyle}>{element.updated}</TableRowColumn>
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