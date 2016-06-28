import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import * as actions from '../actions';
import MediaQuery from 'react-responsive';

import Chat from './chat/chat';
import Friends from './friends/friends';

import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {fullWhite} from 'material-ui/styles/colors';

import ActionAndroid from 'material-ui/svg-icons/action/android';
import Close from 'material-ui/svg-icons/navigation/close';
import Code from 'material-ui/svg-icons/action/code';
import Group from 'material-ui/svg-icons/social/group';
import Assignment from 'material-ui/svg-icons/action/assignment';
import Help from 'material-ui/svg-icons/action/help';
import Message from 'material-ui/svg-icons/communication/message';
import NavMenu from 'material-ui/svg-icons/navigation/menu';

const style = {
  appBar: {
    borderBottom: 'solid #ffffff',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0)'
  },
  white: {
    color: 'white'
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { menu: false, chat: false, friends: false };
  }

  handleChatToggle() {
    this.handleFriendsClose();
    this.setState({ chat: !this.state.chat });
  }

  handleChatClose() {
    this.setState({ chat: false });
  }

  handleFriendsToggle() {
    this.handleChatClose();
    this.setState({ friends: !this.state.friends });
  }

  handleFriendsClose() {
    this.setState({ friends: false });
  }

  handleMenuToggle() {
    this.setState({ menu: !this.state.menu });
  }

  handleMenuClose() {
    this.setState({ menu: false });
  }

  handleTap(route) {
    this.handleFriendsClose();
    this.handleMenuClose();
    this.handleChatClose();
    browserHistory.push(route);
  }

  handleSignout() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div>
        <MediaQuery maxWidth={1159}>
        <Toolbar style={style.appBar}>
          <ToolbarGroup firstChild={true}>
            <FlatButton
              style={style.white}
              label="TechPrep"
              linkButton={true}
              onTouchTap={this.handleTap.bind(this, '/')}
              icon={<ActionAndroid />}
            />
          </ToolbarGroup>
          <ToolbarGroup>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavMenu color={fullWhite} />
              </IconButton>
            }
          >
            {
              this.props.authenticated ?
                [<MenuItem onTouchTap={this.handleTap.bind(this, '/practice')} primaryText="CONCEPTS" leftIcon={<Code />} />,
                <MenuItem onTouchTap={this.handleTap.bind(this, '/algorithms')} primaryText="ALGORITHMS" leftIcon={<Code />} />,
                <MenuItem onTouchTap={this.handleFriendsToggle.bind(this)} primaryText="FRIENDS" leftIcon={<Group />} />,
                <MenuItem onTouchTap={this.handleChatToggle.bind(this)} primaryText="INBOX" leftIcon={<Message />} />,
                <MenuItem onTouchTap={this.handleTap.bind(this, '/mockinterview')} primaryText="MOCK INTERVIEW" leftIcon={<Assignment />} />,
                <MenuItem onTouchTap={this.handleTap.bind(this, '/help')} primaryText="HELP" leftIcon={<Help />} />,
                <MenuItem onTouchTap={this.handleSignout.bind(this)} primaryText="SIGN OUT" leftIcon={<Close />} />]
              :
                [<MenuItem primaryText="LOGIN" />,
                <MenuItem primaryText="SIGN UP" />]
            }
          </IconMenu>
          </ToolbarGroup>
        </Toolbar>
        </MediaQuery>
        <MediaQuery minWidth={1160}>
        <Toolbar style={style.appBar}>
          <ToolbarGroup firstChild={true}>
            <FlatButton
              style={style.white}
              label="TechPrep"
              linkButton={true}
              onTouchTap={this.handleTap.bind(this, '/')}
              icon={<ActionAndroid />}
            />
          </ToolbarGroup>
          <ToolbarGroup>
            {
              this.props.authenticated ?
                [<FlatButton
                  style={style.white}
                  label="CONCEPTS"
                  linkButton={true}
                  onTouchTap={this.handleTap.bind(this, '/practice')}
                  icon={<Code />}
                />,
                <FlatButton
                  style={style.white}
                  label="ALGORITHMS"
                  linkButton={true}
                  onTouchTap={this.handleTap.bind(this, '/algorithms')}
                  icon={<Code />}
                />,
                <FlatButton
                  style={style.white}
                  label="MOCK INTERVIEW"
                  linkButton={true}
                  onTouchTap={this.handleTap.bind(this, '/mockinterview')}
                  icon={<Assignment />}
                />,
                <FlatButton
                  style={style.white}
                  label="HELP"
                  linkButton={true}
                  onTouchTap={this.handleTap.bind(this, '/help')}
                  icon={<Help />}
                />,
                <FlatButton
                  style={style.white}
                  label="SIGN OUT"
                  linkButton={true}
                  onTouchTap={this.handleSignout.bind(this)}
                  icon={<Close />}
                />]
              :
                [<FlatButton
                  style={style.white}
                  label="LOGIN"
                  onTouchTap={this.handleTap.bind(this, '/login')}
                  linkButton={true}
                  icon={<ActionAndroid />}
                />,
                <FlatButton
                  style={style.white}
                  label="SIGN UP"
                  onTouchTap={this.handleTap.bind(this, '/signup')}
                  linkButton={true}
                  icon={<ActionAndroid />}
                />]
            }
          </ToolbarGroup>
        </Toolbar>
        </MediaQuery>
        <Drawer docked={false} width={300} openSecondary={true} open={this.state.chat} onRequestChange={(chat) => this.setState({chat})}>
          <Chat />
        </Drawer>
        <Drawer docked={false} width={300} openSecondary={true} open={this.state.friends} onRequestChange={(friends) => this.setState({friends})}>
          <Friends />
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(Header);