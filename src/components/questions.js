import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
// import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
// import Comments from './comments';
import Dialog from './dialog';
import * as actions from '../actions/actionTypes';
import firebase from 'firebase';

class Questions extends Component {

  constructor(props) {
    var currentUser = firebase.auth().currentUser;

    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: false,
      stripedRows: true,
      showRowHover: true,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '450px',
      open: false,
      question: '',
      currentUser: currentUser
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(question) {
    // console.log('passed-in in questions handleOpen:', question)
    this.setState({open: true, question});
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <div id="stay">
          <Dialog 
            question={this.state.question}
            localOpen={this.state.open} 
            localHandleClose={this.handleClose.bind(this)}
            currentUser={this.state.currentUser} />
        </div>
        <div>
          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}
          >
            <TableHeader
              displaySelectAll={this.state.showCheckboxes}
              adjustForCheckbox={this.state.showCheckboxes}
              enableSelectAll={this.state.enableSelectAll}
            >
              <TableRow>
                <TableHeaderColumn colSpan="3" tooltip="Interview Questions" style={{textAlign: 'center'}}>
                  Interview Questions
                </TableHeaderColumn>
              </TableRow>
              <TableRow>/
                <TableHeaderColumn style={{width: '78%'}}>Question</TableHeaderColumn>
                <TableHeaderColumn style={{width: '11%'}}>Acceptance</TableHeaderColumn>
                <TableHeaderColumn style={{width: '11%'}}>Difficulty</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}
            >
              {this.props.questions.map((question, index) => {
                return (
                  <TableRow key={index}>
                    <TableRowColumn style={{width: '80%'}} onTouchTap={this.handleOpen.bind(this, question)}>{question.question}</TableRowColumn>
                    <TableRowColumn style={{width: '10%'}} onTouchTap={this.handleOpen.bind(this, question)}>{question.acceptance}</TableRowColumn>
                    <TableRowColumn style={{width: '10%'}} onTouchTap={this.handleOpen.bind(this, question)}>{question.difficulty}</TableRowColumn>
                  </TableRow>)
                })}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { questions: state.questions };
}

export default connect(mapStateToProps, actions)(Questions);