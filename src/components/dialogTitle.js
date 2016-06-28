import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Snackbar from 'material-ui/Snackbar';
import * as actions from '../actions';
import { connect } from 'react-redux';

export default class DialogTitle extends Component {

  constructor(props) {
    var currentUser = firebase.auth().currentUser;

    super(props);
    this.state = {
      open: false,
      question: this.props.questionTitle,
      questionID: this.props.question,
      currentUser: currentUser.displayName,
      secondary: this.props.secondary,
      message: 'Question was added to your study list'
    };

  }

  //  const style = {
  //     marginLeft: 700
  // };

  handleTouchTap() {
    this.setState({
      open: true,
    });
  };

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  markQuestion(e) {
    console.log('button pressed', e)
    
    // if button has been clicked before
    if(this.state.secondary) {
      this.setState({ open: true, secondary: false, message: 'Question was removed from your study list' })
      this.props.removeQuestionFromStudyList(this.state.currentUser, this.props.questionID);  
    } else {
      this.setState({ open: true, secondary: true, message: 'Question was added to your study list' })
      this.props.addQuestionToStudyList(this.state.currentUser, this.props.questionID);  
    }
  }

  render() {

    const buttonStyle = {
      position: 'absolute',
      top: 5,
      right: 25
    };

    const titleStyle = {
      fontSize: '30px',
      marginLeft: 25
    };

    return(
      <div>
        <FloatingActionButton 
          style={buttonStyle}
          onMouseDown={this.markQuestion.bind(this)}
          secondary={this.state.secondary}
        >
          <ContentAdd />
        </FloatingActionButton>
        <div style={titleStyle}>
          {this.props.questionText}
        </div>
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={1500}
          onRequestClose={this.handleRequestClose.bind(this)}
        />
      </div>
    )
  }
}

export default connect(null, actions)(DialogTitle);