import React, { Component } from 'react';
import {PieChart, Pie, Sector} from 'recharts';
import Friends from 'material-ui/svg-icons/social/group';
import Avatar from 'material-ui/Avatar';

import MediaQuery from 'react-responsive';

import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';


import AccountBox from 'material-ui/svg-icons/action/account-box';
import ShowChart from 'material-ui/svg-icons/editor/show-chart';
import Code from 'material-ui/svg-icons/action/code';
import Group from 'material-ui/svg-icons/social/group';
import Assignment from 'material-ui/svg-icons/action/assignment';
import Arrows from 'material-ui/svg-icons/action/compare-arrows';
import Help from 'material-ui/svg-icons/action/help';
import Message from 'material-ui/svg-icons/communication/message';
import NavMenu from 'material-ui/svg-icons/navigation/menu';

const styles = {
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const data3 = [
  {name: 'Easy', value: .25},
  {name: 'Medium', value: .32},
  {name: 'Hard', value: .43}
];

export default class LandingPage extends Component  {
  constructor(props) {
    super(props);
    this.state = {activeIndex: 0, value: 3};
  }

  handleChange(event, index, value) {
    this.setState({value});
  }

  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
    });
  }

  renderActiveShape(props) {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#FFFFFF">{`${(percent * 100).toFixed(2)}%`}</text>
      </g>
    );
  };

  render() {
       return (
        <div className="row">
          {/* LEFT CONTAINER */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <MediaQuery maxWidth={1224}>
            <Toolbar>
              <ToolbarGroup firstChild={true}>
                <FlatButton
                  label="TechPrep"
                  linkButton={true}
                  href="/"
                  primary={true}
                  icon={<ActionAndroid />}
                />
              </ToolbarGroup>
              <ToolbarGroup>
              <IconMenu
                iconButtonElement={
                  <IconButton touch={true}>
                    <NavigationExpandMoreIcon />
                  </IconButton>
                }
              >
                <MenuItem primaryText="CONCEPTS" />
                <MenuItem primaryText="ALGORITHMS" />
                <MenuItem primaryText="MOCK INTERVIEW" />
                <MenuItem primaryText="HELP" />
                <MenuItem primaryText="SIGN OUT" />
              </IconMenu>
              </ToolbarGroup>
            </Toolbar>
            </MediaQuery>
            <MediaQuery minWidth={1224}>
            <Toolbar>
              <ToolbarGroup firstChild={true}>
                <FlatButton
                  label="TechPrep"
                  linkButton={true}
                  href="/"
                  primary={true}
                  icon={<ActionAndroid />}
                />
              </ToolbarGroup>
              <ToolbarGroup>
                <FlatButton
                  label="CONCEPTS"
                  linkButton={true}
                  href="/"
                  secondary={true}
                  icon={<ActionAndroid />}
                />
                <FlatButton
                  label="ALGORITHMS"
                  linkButton={true}
                  href="https://github.com/callemall/material-ui"
                  secondary={true}
                  icon={<ActionAndroid />}
                />
                <FlatButton
                  label="MOCK INTERVIEW"
                  linkButton={true}
                  href="https://github.com/callemall/material-ui"
                  secondary={true}
                  icon={<ActionAndroid />}
                />
                <FlatButton
                  label="HELP"
                  linkButton={true}
                  href="https://github.com/callemall/material-ui"
                  secondary={true}
                  icon={<ActionAndroid />}
                />
                <FlatButton
                  label="SIGN OUT"
                  linkButton={true}
                  href="https://github.com/callemall/material-ui"
                  secondary={true}
                  icon={<ActionAndroid />}
                />
              </ToolbarGroup>
            </Toolbar>
            </MediaQuery>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <List>
                  <Subheader>MENU</Subheader>
                  <ListItem primaryText="HOME" leftIcon={<ContentInbox />} />
                  <ListItem primaryText="CONCEPTS" leftIcon={<ActionGrade />} />
                  <ListItem primaryText="ALGORITHMS" leftIcon={<ContentSend />} />
                  <ListItem primaryText="MOCK INTERVIEW" leftIcon={<ContentDrafts />} />
                  <ListItem primaryText="HELP" leftIcon={<ContentInbox />} />
                </List>
              </div>
            </div>
          </div>
          {/* MIDDLE CONTAINER */}
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="row">
              <div className="box-test col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row">
                  <div className="col-lg-12">Add Icon Here</div>
                  <div className="col-lg-12">
                    <Avatar size={150} src="https://avatars2.githubusercontent.com/u/7004741?v=3&s=460" />
                    <h1 className="user-name">dmusicb</h1>
                    <br />
                    <p className="centered">Bio here</p>
                    <br />
                  </div>
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">Friends #</div>
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">Concepts Completed #</div>
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">Algorithms Completed #</div>
                </div>
              </div>
            </div>
          </div>
            {/* RIGHT CONTAINER */}
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="row">
              <div className="box-test col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <PieChart width={400} height={200} onMouseEnter={this.onPieEnter.bind(this)}>
                  <Pie
                    activeIndex={this.state.activeIndex}
                    activeShape={this.renderActiveShape.bind(this)}
                    data={data3}
                    cx={150}
                    cy={100}
                    innerRadius={30}
                    outerRadius={40}
                    fill="#8884d8"
                  />
                </PieChart>
              </div>
            </div>
          </div>
      </div>
   );
  }
}


// <div className="row main-container">
//     <div className="col-md-4 middle-container dashboard-container">
//         <div className="profile block">
//             <a className="a-dashboard add-button" href="#28"><span className="span-dashboard icon entypo-plus scnd-font-color"></span></a>
//             <div className="profile-picture big-profile-picture clear">
//             <Avatar size={150} src="https://avatars2.githubusercontent.com/u/7004741?v=3&s=460" />
//             </div>
//             <h1 className="h1-dashboard user-name">dmusicb</h1>
//             <div className="profile-description">
//                 <p className="p-dashboard scnd-font-color">Lorem ipsum dolor sit amet consectetuer adipiscing</p>
//             </div>
//             <ul className="ul-dashboard profile-options horizontal-list">
//                 <li><a className="a-dashboard comments" href="#40"><p><span className="span-dashboard icon fontawesome-comment-alt scnd-font-color"></span>23</p></a></li>
//                 <li><a className="a-dashboard views" href="#41"><p><span className="span-dashboard icon fontawesome-eye-open scnd-font-color"></span>841</p></a></li>
//                 <li><a className="a-dashboard likes" href="#42"><p><span className="span-dashboard icon fontawesome-heart-empty scnd-font-color"></span>49</p></a></li>
//             </ul>
//         </div>
//     </div>
// </div>