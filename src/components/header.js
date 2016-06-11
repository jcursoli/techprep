import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
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
import Help from 'material-ui/svg-icons/action/help';
import Message from 'material-ui/svg-icons/communication/message';


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
    this.state = {open: false};
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: false});
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
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
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
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <List>
              <ListItem onTouchTap={this.handleClose.bind(this)} primaryText="Profile" leftIcon={<AccountBox />} />
              <ListItem onTouchTap={this.handleClose.bind(this)} primaryText="Stats" leftIcon={<ShowChart />} />
              <ListItem onTouchTap={this.handleClose.bind(this)} primaryText="Practice" leftIcon={<Code />} />
              <ListItem onTouchTap={this.handleClose.bind(this)} primaryText="Friends" leftIcon={<Group />} />
              <ListItem onTouchTap={this.handleClose.bind(this)} primaryText="Inbox" leftIcon={<Message />} />
              <ListItem onTouchTap={this.handleClose.bind(this)} primaryText="Mock Interview" leftIcon={<Assignment />} />
              <ListItem onTouchTap={this.handleClose.bind(this)} primaryText="Help" leftIcon={<Help />} />
            </List>
          </Drawer>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(Header);