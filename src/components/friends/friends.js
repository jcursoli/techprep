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
    tooltip="Options"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Message</MenuItem>
    <MenuItem>View Profile</MenuItem>
    <MenuItem>Remove Friend</MenuItem>
  </IconMenu>
);

class Friends extends Component {
  constructor(props) {
    super(props);
  }

  renderFriends() {
    //render current friends alphabetically
  }

  render() {
    // add search for new friends to add
    return (
      <List>
        <ListItem
          leftAvatar={<Avatar src="https://avatars2.githubusercontent.com/u/7004741?v=3&s=460" />}
          rightIconButton={rightIconMenu}
          primaryText="Drew Baugher"
        />
        <Divider inset={false} />
        <ListItem
          leftAvatar={<Avatar src="https://avatars3.githubusercontent.com/u/10988122?v=3&s=460" />}
          rightIconButton={rightIconMenu}
          primaryText="Joey Cursoli"
        />
        <Divider inset={false} />
        <ListItem
          leftAvatar={<Avatar src="https://avatars3.githubusercontent.com/u/9814083?v=3&s=460" />}
          rightIconButton={rightIconMenu}
          primaryText="Doug Cole"
        />
        <Divider inset={false} />
        <ListItem
          leftAvatar={<Avatar src="https://avatars1.githubusercontent.com/u/4237388?v=3&s=460" />}
          rightIconButton={rightIconMenu}
          primaryText="Forrest Akin"
        />
        <Divider inset={false} />
        <ListItem
          leftAvatar={<Avatar src="https://avatars2.githubusercontent.com/u/16884524?v=3&s=460" />}
          rightIconButton={rightIconMenu}
          primaryText="Colin Zarnegar"
        />
        <Divider inset={false} />
      </List>
    );
  }
}

function mapStateToProps(state) {
  return { friends: state.friends };
}

export default connect(mapStateToProps, actions)(Friends);