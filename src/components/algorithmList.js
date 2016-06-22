import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Comments from './comments';

export default class Questions extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.showAnswer = this.showAnswer.bind(this);
  }
  renderListItems(){
  	this.props.algorithms.map((item)=>(
  		<TableRow>/
  		  <TableHeaderColumn style={{width: '78%'}}>{item.title}</TableHeaderColumn>
  		  <TableHeaderColumn style={{width: '11%'}}>{item.attempts}</TableHeaderColumn>
  		  <TableHeaderColumn style={{width: '11%'}}>{item.difficulty}</TableHeaderColumn>
  		</TableRow>
  	))
  }

  render() {

    return (
      <div>
        <div>
          <Table
            height={'100%'}
            fixedHeader={false}
            fixedFooter={false}
            selectable={true}
            multiSelectable={false}
          >
            <TableHeader>
              <TableRow>
                <TableHeaderColumn colSpan="3" tooltip="Interview Questions" style={{textAlign: 'center'}}>
                  Algorithms
                </TableHeaderColumn>
              </TableRow>
              <TableRow>/
                <TableHeaderColumn style={{width: '78%'}}>Problem</TableHeaderColumn>
                <TableHeaderColumn style={{width: '11%'}}>Attempts</TableHeaderColumn>
                <TableHeaderColumn style={{width: '11%'}}>Difficulty</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              deselectOnClickaway={true}
              showRowHover={true}
              stripedRows={true}
          	  >  
           		{this.renderListItems()}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}