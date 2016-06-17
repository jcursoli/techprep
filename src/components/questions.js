import React, { Component } from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class Questions extends Component  {

  constructor(props) {
    super(props);

    var that = this;
    var ref = firebase.database().ref('/questions');
    
    ref.on("value", function(snapshot) {
      that.setState({tableData : snapshot.val().questions});
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
    
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
      answer: '',
      revealAnswer: false,
      selectedRow: null, 
      buttonName: 'Show Answer',
      tableData: []
    };

    this.showAnswer = this.showAnswer.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({open: false});
  };
  
  showAnswer() {
    if(this.state.revealAnswer) {
      this.setState({revealAnswer: false, buttonName: 'Show Answer'});
    } else {
      this.setState({revealAnswer: true, buttonName: 'Hide Answer'});
    }
  }

  render() {
     
     const actions = [
        <FlatButton
          label="Close"
          primary={true}
          onTouchTap={this.handleClose}
        />,
        <FlatButton
          label={this.state.buttonName}
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.showAnswer}
        />,
      ];

    return (
      <div>
        <div>
          <Dialog
            title={this.state.question}
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <div id="answer"> {this.state.revealAnswer ? this.state.answer : ''} </div>
            
          </Dialog>
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
              {this.state.tableData.map((row, index) => {
                
                const handleOpen = () => {
                  this.setState({
                    open: true, 
                    question: this.state.tableData[index]['question'], 
                    answer: this.state.tableData[index]['answer'], 
                    revealAnswer: false, 
                    buttonName: 'Show Answer'});
                  };

                return (
                  <TableRow key={index}>
                    <TableRowColumn style={{width: '80%'}} onTouchTap={handleOpen}>{row.question}</TableRowColumn>
                    <TableRowColumn style={{width: '10%'}} onTouchTap={handleOpen}>{row.acceptance}</TableRowColumn>
                    <TableRowColumn style={{width: '10%'}} onTouchTap={handleOpen}>{row.difficulty}</TableRowColumn>
                  </TableRow>)
                })}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

