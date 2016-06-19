import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {List, ListItem} from 'material-ui/List';

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

  handleOpen() {
    this.setState({open: true, clickedUser: { displayName, profileURL }});
  };

  handleClose() {
    this.setState({open: false});
  };

  renderChat() {
    //render current chat chronologically
  }

  render() {
    return (
      <div>
      <List>
        <ListItem
          leftAvatar={<Avatar src="https://avatars3.githubusercontent.com/u/10988122?v=3&s=460" />}
          onTouchTap={this.handleOpen.bind(this)}
          rightIconButton={rightIconMenu}
          primaryText="Joey Cursoli"
          secondaryText={
            <p>
            <span style={{color: 'green'}}>Online</span><br />
              I don't know what I'm doing
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
        <ListItem
          leftAvatar={<Avatar src="https://avatars3.githubusercontent.com/u/9814083?v=3&s=460" />}
          onTouchTap={this.handleOpen.bind(this)}
          rightIconButton={rightIconMenu}
          primaryText="Doug Cole"
          secondaryText={
            <p>
            <span style={{color: 'green'}}>Online</span><br />
              i solved the middle out algorithm
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
        <ListItem
          leftAvatar={<Avatar src="https://avatars1.githubusercontent.com/u/4237388?v=3&s=460" />}
          onTouchTap={this.handleOpen.bind(this)}
          rightIconButton={rightIconMenu}
          primaryText="Forrest Akin"
          secondaryText={
            <p>
            <span style={{color: 'green'}}>Online</span><br />
              I can't find my shirt, do you know where I left it?
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
        <ListItem
          leftAvatar={<Avatar src="https://avatars2.githubusercontent.com/u/16884524?v=3&s=460" />}
          onTouchTap={this.handleOpen.bind(this)}
          rightIconButton={rightIconMenu}
          primaryText="Colin Zarnegar"
          secondaryText={
            <p>
            <span style={{color: 'red'}}>Offline</span><br />
              Hey, can you help me with React
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
        <ListItem
          leftAvatar={<Avatar src="https://avatars2.githubusercontent.com/u/7004741?v=3&s=460" />}
          onTouchTap={this.handleOpen.bind(this)}
          rightIconButton={rightIconMenu}
          primaryText="Drew Baugher"
          secondaryText={
            <p>
            <span style={{color: 'red'}}>Offline</span><br />
              I created Google.
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
      </List>
        <ChatBox clickedUser={this.state.clickedUser} localOpen={this.state.open} localHandleClose={this.handleClose.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { chat: state.chat };
}

export default connect(mapStateToProps, actions)(Chat);