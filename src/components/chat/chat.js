import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {List, ListItem} from 'material-ui/List';


import moment from 'moment';
import _ from 'lodash';

import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import FlatButton from 'material-ui/FlatButton';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';

import ChatBox from '../chat/chatBox';



// <ListItem
//   leftAvatar={<Avatar src="https://avatars3.githubusercontent.com/u/10988122?v=3&s=460" />}
//   onTouchTap={this.handleOpen.bind(this)}
//   rightIconButton={rightIconMenu}
//   primaryText="Joey Cursoli"
//   secondaryText={
//     <p>
//     <span style={{color: 'green'}}>Online</span><br />
//       I don't know what I'm doing
//     </p>
//   }
//   secondaryTextLines={2}
// />
// <Divider inset={false} />

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false, clickedUser: { displayName: null, profileURL: null } }
  }

  handleOpen(displayName, profileURL) {
    this.setState({open: true, clickedUser: { displayName, profileURL }});
  };

  handleClose() {
    this.setState({open: false});
  };

  renderChat(userObj, key) {
    //render current chat chronologically
    // console.log('userObj:', userObj);
    // console.log('key:', key);
    // console.log('moment test:', moment(new Date()));
    var latestMessage = _.reduce(userObj, (latest, curr) => {
      if (curr.time > latest.time) return curr;
      return latest;
    });
    // console.log('latestmessage:', latestMessage);
    var friend = this.props.friends[key];
    return [
      <ListItem
        key={key}
        leftAvatar={<Avatar src={friend.profileURL} />}
        onTouchTap={this.handleOpen.bind(this, friend.displayName, friend.profileURL)}
        primaryText={friend.displayName}
        secondaryText={
          <p>
          <span style={{color: 'green'}}>{moment(latestMessage.time).fromNow()}</span><br />
            {latestMessage.message}
          </p>
        }
        secondaryTextLines={2}
      />,
      <Divider inset={false} />
    ];
  }

  render() {
    return (
      <div>
      <List>
        <h1 className="centered">Inbox</h1>
        <Divider inset={false} />
        {_.map(this.props.chat, this.renderChat.bind(this))}
      </List>
        <ChatBox clickedUser={this.state.clickedUser} localOpen={this.state.open} localHandleClose={this.handleClose.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('this is state.chat:', state.chat);
  console.log('this is state.friends:', state.friends);
  return { chat: state.chat, friends: state.friends };
}

export default connect(mapStateToProps, actions)(Chat);