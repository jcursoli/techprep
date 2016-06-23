import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import * as actions from '../actions';
import {List, ListItem} from 'material-ui/List';
import AccountBox from 'material-ui/svg-icons/action/account-box';
import ShowChart from 'material-ui/svg-icons/editor/show-chart';
import Code from 'material-ui/svg-icons/action/code';
import Group from 'material-ui/svg-icons/social/group';
import Assignment from 'material-ui/svg-icons/action/assignment';
import Arrows from 'material-ui/svg-icons/action/compare-arrows';
import Help from 'material-ui/svg-icons/action/help';
import Message from 'material-ui/svg-icons/communication/message';
import NavMenu from 'material-ui/svg-icons/navigation/menu';

import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Badge from 'material-ui/Badge';

import Chat from './chat/chat';
import Friends from './friends/friends';

const style = {
  appBar: {
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0)'
  },
  link: {
    display: 'inline-block'
  },
  button: {
    color: 'white'
  },
  title: {
    textDecoration: 'none',
    color: 'white'
  },
  menu: {
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

  renderLinks() {
    if(this.props.authenticated) {
      return (
        <div key={1} style={style.link}>
          <Link to="/">
            <FlatButton onClick={this.handleSignout.bind(this)} style={style.button} label="Sign Out" />
          </Link>
        </div>
      );
    } else {
      return [
        <div key={2} style={style.link}>
          <Link to="/login">
            <FlatButton style={style.button} label="Login" />
          </Link>
        </div>,
        <div key={3} zDepth={1} style={style.link}>
          <Link to="/signup">
            <FlatButton style={style.button} label="Sign Up" />
          </Link>
        </div>
      ];
    }
  }

  render() {
    return (
      <div>
        <AppBar
          showMenuIconButton={this.props.authenticated ? true : false}
          style={style.appBar}
          zDepth={1}
          onLeftIconButtonTouchTap={this.handleMenuToggle.bind(this)}
          title={<Link style={style.title} to="/">TechPrep</Link>}
          children={
              <div>
                {this.renderLinks()}
              </div>
            }
          />
          <Drawer
            docked={false}
            width={200}
            open={this.state.menu}
            onRequestChange={(menu) => this.setState({menu})}
          >
            <List>
              <ListItem onTouchTap={this.handleTap.bind(this, '/profile')} primaryText="Profile" leftIcon={<AccountBox />} />
              <ListItem onTouchTap={this.handleTap.bind(this, '/stats')} primaryText="Stats" leftIcon={<ShowChart />} />
              <ListItem onTouchTap={this.handleTap.bind(this, '/practice')} primaryText="Practice" leftIcon={<Code />} />
              <ListItem onTouchTap={this.handleTap.bind(this, '/algorithms')} primaryText="Algorithms" leftIcon={<Code />} />
              <ListItem onTouchTap={this.handleFriendsToggle.bind(this)} primaryText="Friends" leftIcon={<Group />} />
              <ListItem onTouchTap={this.handleChatToggle.bind(this)} primaryText={<div><div>Inbox</div><div className="badgeNumber">4</div></div>} leftIcon={<Message />} />
              <ListItem onTouchTap={this.handleTap.bind(this, '/mockinterview')} primaryText="Mock Interview" leftIcon={<Assignment />} />
              <ListItem onTouchTap={this.handleTap.bind(this, '/help')} primaryText="Help" leftIcon={<Help />} />
            </List>
          </Drawer>
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