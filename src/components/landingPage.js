import React, { Component } from 'react';
import Friends from 'material-ui/svg-icons/social/group';
import Avatar from 'material-ui/Avatar';
import Infinite from 'react-infinite';


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

import {pinkA200, transparent} from 'material-ui/styles/colors';

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

export default class LandingPage extends Component  {

  render() {
    return (
      <div className="login">
       <h1>TechPrep</h1>
       <br />
       <p>Info about what TechPrep is.</p>
       <br />
       <p>Maybe add nice visual guide of how it works.</p>
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


// <div className="row">
//   {/* LEFT CONTAINER */}
//   <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
//     <div className="row">
//       <div className="box-test col-xs-12 col-sm-12 col-md-12 col-lg-12">
//         <div className="row">
//           <div className="col-lg-12">Add Icon Here</div>
//           <div className="col-lg-12">
//             <Avatar size={150} src="https://avatars2.githubusercontent.com/u/7004741?v=3&s=460" />
//             <h1 className="user-name">dmusicb</h1>
//             <br />
//             <p className="centered">Bio here</p>
//             <br />
//           </div>
//           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">Friends #</div>
//           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">Concepts Completed #</div>
//           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">Algorithms Completed #</div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* MIDDLE CONTAINER */}
//   <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
//     <div className="row">
//       <div className="box-test col-xs-12 col-sm-12 col-md-12 col-lg-12">
//       <List>
//         <Infinite containerHeight={300} elementHeight={56}>
//           <ListItem
//             primaryText="Adelle Charles"
//             leftAvatar={
//               <Avatar
//                 color={pinkA200} backgroundColor={transparent}
//                 style={{left: 8}}
//               >
//                 A
//               </Avatar>
//             }
//             rightAvatar={<Avatar size={40} src="https://i.imgur.com/DRuG5YH.png" />}
//           />
//           <ListItem
//             primaryText="Adham Dannaway"
//             insetChildren={true}
//             rightAvatar={<Avatar size={40} src="https://avatars2.githubusercontent.com/u/7004741?v=3&s=460" />}
//           />
//           <ListItem
//             primaryText="Allison Grayce"
//             insetChildren={true}
//             rightAvatar={<Avatar size={40} src="https://i.imgur.com/DRuG5YH.png" />}
//           />
//           <ListItem
//             primaryText="Angel Ceballos"
//             insetChildren={true}
//             rightAvatar={<Avatar size={40} src="https://i.imgur.com/DRuG5YH.png" />}
//           />
//           <ListItem
//             primaryText="Bodelle Charles"
//             leftAvatar={
//               <Avatar
//                 color={pinkA200} backgroundColor={transparent}
//                 style={{left: 8}}
//               >
//                 B
//               </Avatar>
//             }
//             rightAvatar={<Avatar size={40} src="https://i.imgur.com/DRuG5YH.png" />}
//           />
//           <ListItem
//             primaryText="Boodham Dannaway"
//             insetChildren={true}
//             rightAvatar={<Avatar size={40} src="https://i.imgur.com/DRuG5YH.png" />}
//           />
//           <ListItem
//             primaryText="Botollison Grayce"
//             insetChildren={true}
//             rightAvatar={<Avatar size={40} src="https://i.imgur.com/DRuG5YH.png" />}
//           />
//           <ListItem
//             primaryText="Bozongel Ceballos"
//             insetChildren={true}
//             rightAvatar={<Avatar size={40} src="https://i.imgur.com/DRuG5YH.png" />}
//           />
//         </Infinite>
//       </List>
//       </div>
//     </div>
//   </div>
//     {/* RIGHT CONTAINER */}
//   <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
//     <div className="row">
//       <div className="box-test col-xs-12 col-sm-12 col-md-12 col-lg-12">

//       </div>
//     </div>
//   </div>
//   </div>