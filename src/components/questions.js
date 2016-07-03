import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Dialog from './dialog';
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
      height: 'auto',
      open: false,
      question: '',
      currentUser: currentUser,
      secondary: this.props.secondary
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(question) {
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
            currentUser={this.state.currentUser}
            questionsList={this.props.questions}
            secondary={this.props.secondary}
          />
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
                <TableHeaderColumn
                  colSpan="3"
                  tooltip=""
                  style={{textAlign: 'center'}}
                >
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
              style={{backgroundColor: 'white'}}
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
  var category = state.currentCategory && typeof state.currentCategory === 'string' && state.currentCategory.toLowerCase();
  if(category === 'study' && state.user.studyList) {
    var filteredQuestions = state.questions && Array.isArray(state.questions) && state.questions.filter(obj => obj.commentsID in state.user.studyList);
    return { questions: filteredQuestions || [], secondary: true}
  } else {
    var filteredQuestions = state.questions && Array.isArray(state.questions) && state.questions.filter(obj => obj.category === category);
  }
  return { questions: filteredQuestions || [] };
}

export default connect(mapStateToProps)(Questions);