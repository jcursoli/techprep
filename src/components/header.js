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
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {rightOpen: false, leftOpen: false};
  }

  handleRightToggle() {
    this.setState({rightOpen: !this.state.rightOpen});
  }

  handleRightClose() {
    this.setState({rightOpen: false});
  }

  handleLeftToggle() {
    this.setState({leftOpen: !this.state.leftOpen});
  }

  handleLeftClose() {
    this.setState({leftOpen: false});
  }

  handleTap(route) {
    this.handleLeftClose();
    this.handleRightClose();
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
          onLeftIconButtonTouchTap={this.handleLeftToggle.bind(this)}
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
            open={this.state.leftOpen}
            onRequestChange={(leftOpen) => this.setState({leftOpen})}
          >
            <List>
              <ListItem onTouchTap={this.handleTap.bind(this, '/profile')} primaryText="Profile" leftIcon={<AccountBox />} />
              <ListItem onTouchTap={this.handleTap.bind(this, '/stats')} primaryText="Stats" leftIcon={<ShowChart />} />
              <ListItem onTouchTap={this.handleTap.bind(this, '/practice')} primaryText="Practice" leftIcon={<Code />} />
              <ListItem onTouchTap={this.handleTap.bind(this, '/friends')} primaryText="Friends" leftIcon={<Group />} />
              <ListItem onTouchTap={this.handleTap.bind(this, '/algorithms')} primaryText="Toy Problems" leftIcon={<Code />} />
              <ListItem onTouchTap={this.handleRightToggle.bind(this)} primaryText="Inbox" leftIcon={<Message />} />
              <ListItem onTouchTap={this.handleTap.bind(this, '/mockinterview')} primaryText="Mock Interview" leftIcon={<Assignment />} />
              <ListItem onTouchTap={this.handleTap.bind(this, '/questions')} primaryText="Interview Questions" leftIcon={<Arrows />} />
              <ListItem onTouchTap={this.handleTap.bind(this, '/help')} primaryText="Help" leftIcon={<Help />} />
            </List>
          </Drawer>
          <Drawer docked={false} width={300} openSecondary={true} open={this.state.rightOpen} onRequestChange={(rightOpen) => this.setState({rightOpen})}>
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
          </Drawer>
        </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('this is in the mapstatetoprops', state.auth.authenticated)
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(Header);