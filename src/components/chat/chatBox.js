import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Dialog from 'material-ui/Dialog';

import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import FlatButton from 'material-ui/FlatButton';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import firebase from 'firebase';
import _ from 'lodash';


const styles = {
  table:{
    border:' 2px solid #EEEFF2',
  }
 }

class ChatBox extends Component {
  constructor(props) {
    super(props);

    this.state = { chatMessageInput: '' };
  }

  renderChatHistory(obj, idx) {
    var user = firebase.auth().currentUser;
    const username = obj.username;
    const time = obj.time;
    const message = obj.message;
    if (username === ( user ? user.displayName : null)) {
      return (
        <li className="clearfix" key={idx}>
          <div className="message-data align-right">
            <span className="message-data-time" >{time}</span> &nbsp; &nbsp;
            <span className="message-data-name" >{username}</span>
          </div>
          <div className="message other-message float-right">
            {message}
          </div>
        </li>
      );
    } else {
      return (
        <li key={idx}>
          <div className="message-data">
            <span className="message-data-name">{username}</span>
            <span className="message-data-time">{time}</span>
          </div>
          <div className="message my-message">
            {message}
          </div>
        </li>
      );
    }
  }

  handleMessageChange(e) {
    this.setState({ chatMessageInput: e.target.value });
  }

  addChatMessage() {
    var user = firebase.auth().currentUser;
    const message = this.state.chatMessageInput;
    const time = (new Date()).toString();
    this.props.addMessage({
      recipient: this.props.clickedUser.displayName,
      username: user.displayName,
      photoURL: user.photoURL,
      time,
      message
    });
    this.setState({ chatMessageInput: '' });
  }

  renderHeader() {
    const profileURL = this.props.clickedUser ? this.props.clickedUser.profileURL : null;
    const displayName = this.props.clickedUser ? this.props.clickedUser.displayName : null;
    return (
      <div className="chatContainer clearfix">
        <div className="chat">
          <div className="chat-header clearfix">
            <Avatar size={50} style={{ float: 'left' }} src={profileURL} />
            <div className="chat-about">
              <div className="chat-with">Chat with {displayName}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  keyDown (event){
    if(event.keyCode=='13'){
      this.addChatMessage();
    }
  }

  render() {
    const actions = [
      <TextField
        floatingLabelText="Type Message"
        fullWidth={true}
        onChange={this.handleMessageChange.bind(this)}
        value={this.state.chatMessageInput}
        onKeyDown={this.keyDown.bind(this)}
      />,
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.localHandleClose.bind(this)}
      />,
      <FlatButton
        label="Send"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.addChatMessage.bind(this)}
      />,
    ];
    return (
      <Dialog
        actions={actions}
        title={this.renderHeader()}
        modal={false}
        open={this.props.localOpen}
        onRequestClose={this.props.localHandleClose}
        autoScrollBodyContent={true}
      >
        <br />
        <div className="chatContainer clearfix">
          <div className="chat">
            <div className="chat-history">
              <ul>
                {
                  this.props.chat
                  &&
                  _.map(this.props.chat[this.props.clickedUser ? this.props.clickedUser.displayName : null], this.renderChatHistory.bind(this)).reverse()
                }
              </ul>
            </div>
          </div>
        </div>
      </Dialog>
    );
  }
}

function mapStateToProps(state) {
  //pull out the history for the currentuser that was passed down
  return { chat: state.chat };
}

export default connect(mapStateToProps, actions)(ChatBox);