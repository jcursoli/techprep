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
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

class Chat extends Component {
  constructor(props) {
    super(props);
  }

  renderChat() {
    //render current chat chronologically
  }

  render() {
    return (
      <List>
        <ListItem
          leftAvatar={<Avatar src="https://avatars3.githubusercontent.com/u/10988122?v=3&s=460" />}
          rightIconButton={rightIconMenu}
          primaryText="Joey Cursoli"
          secondaryText={
            <p>
            <span style={{color: 'black'}}>help me please!?</span><br />
              I don't know what I'm doing
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
        <ListItem
          leftAvatar={<Avatar src="https://avatars3.githubusercontent.com/u/9814083?v=3&s=460" />}
          rightIconButton={rightIconMenu}
          primaryText="Doug Cole"
          secondaryText={
            <p>
            <span style={{color: 'black'}}>yo dude</span><br />
              i solved the middle out algorithm
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
        <ListItem
          leftAvatar={<Avatar src="https://avatars1.githubusercontent.com/u/4237388?v=3&s=460" />}
          rightIconButton={rightIconMenu}
          primaryText="Forrest Akin"
          secondaryText={
            <p>
            <span style={{color: 'black'}}>heyooo</span><br />
              I can't find my shirt, do you know where I left it?
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
        <ListItem
          leftAvatar={<Avatar src="https://avatars2.githubusercontent.com/u/16884524?v=3&s=460" />}
          rightIconButton={rightIconMenu}
          primaryText="Colin Zarnegar"
          secondaryText={
            <p>
            <span style={{color: 'black'}}>React help</span><br />
              Hey, can you help me with React
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
        <ListItem
          leftAvatar={<Avatar src="https://avatars2.githubusercontent.com/u/7004741?v=3&s=460" />}
          rightIconButton={rightIconMenu}
          primaryText="Drew Baugher"
          secondaryText={
            <p>
            <span style={{color: 'black'}}>Re: Question</span><br />
              I created Google.
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
      </List>
    );
  }
}

function mapStateToProps(state) {
  return { chat: state.chat };
}

export default connect(mapStateToProps, actions)(Chat);