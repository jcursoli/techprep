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

import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';

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
    this.state = { chat: false, friends: false, practiceOpen: false, socialOpen: false, accountOpen: false };
  }

  handlePracticeTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      practiceOpen: true,
      practiceAnchorEl: event.currentTarget,
    });
  };

  handlePracticeRequestClose() {
    this.setState({
      practiceOpen: false,
    });
  };

  handleSocialTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      socialOpen: true,
      socialAnchorEl: event.currentTarget,
    });
  };

  handleSocialRequestClose() {
    this.setState({
      socialOpen: false,
    });
  };

  handleAccountTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      accountOpen: true,
      accountAnchorEl: event.currentTarget,
    });
  };

  handleAccountRequestClose() {
    this.setState({
      accountOpen: false,
    });
  };

  handleChatToggle() {
    this.handleFriendsClose();
    this.handleSocialRequestClose();
    this.handlePracticeRequestClose();
    this.handleAccountRequestClose();
    this.setState({ chat: !this.state.chat });
  }

  handleChatClose() {
    this.setState({ chat: false });
  }

  handleFriendsToggle() {
    this.handleChatClose();
    this.handleSocialRequestClose();
    this.handlePracticeRequestClose();
    this.handleAccountRequestClose();
    this.setState({ friends: !this.state.friends });
  }

  handleFriendsClose() {
    this.setState({ friends: false });
  }

  handleTap(route) {
    this.handleFriendsClose();
    this.handleChatClose();
    this.handleSocialRequestClose();
    this.handlePracticeRequestClose();
    this.handleAccountRequestClose();
    browserHistory.push(route);
  }

  handleSignout() {
    this.handleFriendsClose();
    this.handleChatClose();
    this.handleSocialRequestClose();
    this.handlePracticeRequestClose();
    this.handleAccountRequestClose();
    this.props.signoutUser();
    browserHistory.push('/login');
  }

  render() {
    return (
      <div>
        <MediaQuery maxWidth={749}>
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
                [<MenuItem key='mobilepractice' onTouchTap={this.handleTap.bind(this, '/practice')} primaryText="CONCEPTS" leftIcon={<Code />} />,
                <MenuItem key='mobilealgorithms' onTouchTap={this.handleTap.bind(this, '/algorithms')} primaryText="ALGORITHMS" leftIcon={<Code />} />,
                <MenuItem key='mobilemockinterview' onTouchTap={this.handleTap.bind(this, '/mockinterview')} primaryText="MOCK INTERVIEW" leftIcon={<Assignment />} />,
                <MenuItem key='mobilefriends' onTouchTap={this.handleFriendsToggle.bind(this)} primaryText="FRIENDS" leftIcon={<Group />} />,
                <MenuItem key='mobileinbox' onTouchTap={this.handleChatToggle.bind(this)} primaryText="INBOX" leftIcon={<Message />} />,
                <MenuItem key='mobileprofile' onTouchTap={this.handleTap.bind(this, '/profile')} primaryText="PROFILE" leftIcon={<ActionAndroid />} />,
                <MenuItem key='mobilehelp' onTouchTap={this.handleTap.bind(this, '/help')} primaryText="HELP" leftIcon={<Help />} />,
                <MenuItem key='mobilesignout' onTouchTap={this.handleSignout.bind(this)} primaryText="SIGN OUT" leftIcon={<Close />} />]
              :
                [<MenuItem key='mobilelogin' onTouchTap={this.handleTap.bind(this, '/login')} primaryText="LOGIN" />,
                <MenuItem key='mobilesignup' onTouchTap={this.handleTap.bind(this, '/signup')} primaryText="SIGN UP" />]
            }
          </IconMenu>
          </ToolbarGroup>
        </Toolbar>
        </MediaQuery>
        <MediaQuery minWidth={750}>
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
                  key='practice'
                  style={style.white}
                  label="Practice"
                  linkButton={true}
                  onTouchTap={this.handlePracticeTouchTap.bind(this)}
                  icon={<Code />}
                />,
                <FlatButton
                  key='social'
                  style={style.white}
                  label="Social"
                  linkButton={true}
                  onTouchTap={this.handleSocialTouchTap.bind(this)}
                  icon={<Group />}
                />,
                <FlatButton
                  key='account'
                  style={style.white}
                  label="Account"
                  linkButton={true}
                  onTouchTap={this.handleAccountTouchTap.bind(this)}
                  icon={<Help />}
                />]
              :
                [<FlatButton
                  key='login'
                  style={style.white}
                  label="LOGIN"
                  onTouchTap={this.handleTap.bind(this, '/login')}
                  linkButton={true}
                  icon={<ActionAndroid />}
                />,
                <FlatButton
                  key='signup'
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
        <Drawer docked={false} width={300} open={this.state.chat} onRequestChange={(chat) => this.setState({chat})}>
          <Chat />
        </Drawer>
        <Drawer docked={false} width={300} open={this.state.friends} onRequestChange={(friends) => this.setState({friends})}>
          <Friends />
        </Drawer>
        <Popover
          open={this.state.practiceOpen}
          anchorEl={this.state.practiceAnchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handlePracticeRequestClose.bind(this)}
        >
          <Menu>
            <MenuItem key='concepts' onTouchTap={this.handleTap.bind(this, '/practice')} primaryText="CONCEPTS" />
            <MenuItem key='algorithms' onTouchTap={this.handleTap.bind(this, '/algorithms')} primaryText="ALGORITHMS" />
            <MenuItem key='mockinterview' onTouchTap={this.handleTap.bind(this, '/mockinterview')} primaryText="MOCK INTERVIEW" />
          </Menu>
        </Popover>
        <Popover
          open={this.state.socialOpen}
          anchorEl={this.state.socialAnchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleSocialRequestClose.bind(this)}
        >
          <Menu>
            <MenuItem key='friends' onTouchTap={this.handleFriendsToggle.bind(this)} primaryText="FRIENDS" />
            <MenuItem key='inbox' onTouchTap={this.handleChatToggle.bind(this)} primaryText="INBOX" />
          </Menu>
        </Popover>
        <Popover
          open={this.state.accountOpen}
          anchorEl={this.state.accountAnchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleAccountRequestClose.bind(this)}
        >
          <Menu>
            <MenuItem key='profile' onTouchTap={this.handleTap.bind(this, '/profile')} primaryText="PROFILE" />
            <MenuItem key='help' onTouchTap={this.handleTap.bind(this, '/help')} primaryText="HELP" />
            <MenuItem key='signout' onTouchTap={this.handleSignout.bind(this)} primaryText="SIGN OUT" />
          </Menu>
        </Popover>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(Header);