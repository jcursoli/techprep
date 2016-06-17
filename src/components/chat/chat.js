import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {List, ListItem} from 'material-ui/List';

import Subheader from 'material-ui/Subheader';
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

const style = {
  link: {
    display: 'inline-block'
  },
  button: {
    color: 'white'
  },
  title: {
    textDecoration: 'none',
    color: 'white'
  }
}

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
          leftAvatar={<Avatar src="https://avatars2.githubusercontent.com/u/7004741?v=3&s=460" />}
          rightIconButton={rightIconMenu}
          primaryText="Drew Baugher"
          secondaryText={
            <p>
            <span style={{color: 'black'}}>Brunch this weekend?</span><br />
              I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
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
            <span style={{color: 'black'}}>Brunch this weekend?</span><br />
              I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
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
            <span style={{color: 'black'}}>Brunch this weekend?</span><br />
              I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
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
            <span style={{color: 'black'}}>Brunch this weekend?</span><br />
              I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
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
            <span style={{color: 'black'}}>Brunch this weekend?</span><br />
              I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
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
  return { friends: state.chat };
}

export default connect(mapStateToProps, actions)(Chat);