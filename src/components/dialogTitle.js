import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Snackbar from 'material-ui/Snackbar';

export default class DialogTitle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    // this.markQuestion = this.markQuestion.bind(this)
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
    this.setState({ open: true })
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
        >
          <ContentAdd />
        </FloatingActionButton>
        <div style={titleStyle}>
          {this.props.question}
        </div>
        <Snackbar
          open={this.state.open}
          message="Question added to study list"
          autoHideDuration={1500}
          onRequestClose={this.handleRequestClose.bind(this)}
        />
      </div>
    )
  }
}