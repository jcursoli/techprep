import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Comments from './comments';
import DialogTitle from './dialogTitle';

export default class DialogBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questionsList: this.props.questionsList,
      secondary: this.props.secondary
    }
  }

  handleOpen() {
    this.setState({open: true});
    // console.log('this.state.questionsList in dialog:', this.state.questionsList)
  };

  handleClose() {
    this.setState({open: false});

  };
  // style={{position: 'absolute', bottom: '80%'}}
  render() {

    const actions = [
      <Comments hintText="Show Comments"
        question={this.props.question}
        currentUser={this.props.currentUser} />
    ];

    const customContentStyle = {
      width: '90%',
      height: '75%',
      maxWidth: 'none',
      position: 'absolute',
      top: '10%',
      left: '5%'
    };

    return (
      <div>
        <div>
          <div>
            <Dialog
              title={<DialogTitle
              questionText={this.props.question.question}
              questionID={this.props.question.commentsID}
              secondary={this.props.secondary}
            />}
              modal={false}
              actions={actions}
              open={this.props.localOpen}
              onRequestClose={this.props.localHandleClose}
              repositionOnUpdate={false}
              contentStyle={customContentStyle}
            >
            <br />
            <br />
              <div> {this.props.question.answer} </div>
            </Dialog>
          </div>
        </div>
      </div>
    );
  }
}



