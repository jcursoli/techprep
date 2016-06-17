import React, { Component } from 'react';
import UpArrow from 'material-ui/svg-icons/navigation/arrow-upward'
import DownArrow from 'material-ui/svg-icons/navigation/arrow-downward'

import IconButton from 'material-ui/IconButton';


export default class Arrows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    };
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  handleUpvote() {
    console.log('upvote');
    var votes = this.state.votes + 1;
    this.setState({votes: votes})
  }

  handleDownvote() {
    console.log('downvote');
    var votes = this.state.votes - 1;
    this.setState({votes: votes})
  }

  render() {

    return (  
      <div>
      <div id="votes"> {this.state.votes} </div>
      <div id="arrows">
        <iconButton onClick={() => this.handleUpvote()}> <UpArrow /> </iconButton>
        <iconButton onClick={() => this.handleDownvote()}> <DownArrow /> </iconButton>
      </div>
      </div>
    );
  }
}