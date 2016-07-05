import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
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
      marginLeft: 25,
      marginRight: 100
    };

      if(this.state.secondary) {
        return(
      <div>
        <button 
          className='minus'
          style={buttonStyle}
          onClick={this.markQuestion.bind(this)}
          secondary={this.state.secondary}
        >
          <ContentRemove />
        </button>
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
    } else {
      return(
         <div>
           <button 
             className='plus'
             style={buttonStyle}
             onClick={this.markQuestion.bind(this)}
             secondary={this.state.secondary}
           >
             <ContentAdd />
           </button>
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
}

export default connect(null, actions)(DialogTitle);