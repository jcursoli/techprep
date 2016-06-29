import React, { Component } from 'react';
import ProgressTable from './userProgress';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import LinearProgress from 'material-ui/LinearProgress';
import {Tabs, Tab} from 'material-ui/Tabs';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';
import Divider from 'material-ui/Divider';
import {Menu, MenuItem} from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import Firebase from 'firebase';
// import {LineChart} from 'react-d3';
// import {Chart} from 'react-d3';

  const styles = {
    tabs: {
      color: '#151515',
      background: 'rgba(0, 0, 0, 0)',
    },
    headline: {
      border:' 1px solid #EEEFF2',
      fontWeight: 400,
      color: '#151515',
      background: 'rgba(0, 0, 0, 0)',
    },
  };

class Profile extends Component {
  handleActive(tab) {
    console.log('Handle active');
      // alert(`A tab with this route property ${tab.props.route} was activated.`);
  }

  handleFormSubmit() {
    console.log('handleFormSubmit');
  }

  renderError() {
    if (this.props.loginError) {
      // show error message here
    }
  }
  x = function(d) {
      return d.index;
    }

  render() {
    var user = firebase.auth().currentUser;
    const { handleSubmit, fields: {}} = this.props;

    return (
      <div className="row" style={{background:'white',overflow: 'scroll', height: '100vh'}}>
        <div className='center-xs col-xs-12 col-sm-6 col-md-6 col-lg-6'>
          <div className="row">
            <div className='center-xs col-xs-12'>
              <Avatar size={150} src='https://avatars0.githubusercontent.com/u/302001?v=3&s=96' />
            </div>
            <div className='center-xs col-xs-12'>
              <br />
              <h2 style={{color:'black'}}>{user && user.displayName}</h2>
              <br />
              <Divider />
            </div>
            <div className='center-xs col-xs-4'>
              <br />
              <strong className='userNumbers'> 11 </strong>
              <h4 style={{color:'black'}} > Friends </h4>
            </div>
            <div className='center-xs col-xs-4'>
              <br />
              <strong className='userNumbers'> 106 </strong>
              <h4 style={{color:'black'}} > Algorithms Complete </h4>
            </div>
            <div className='center-xs col-xs-4'>
              <br />
              <strong className='userNumbers'> 44 </strong>
              <h4 style={{color:'black'}} > Concepts Complete </h4>
            </div>
            <Divider />
          </div>
        </div>
        <div className='center-xs col-xs-12 col-sm-6 col-md-6 col-lg-6'>
          <div>
            <h2 style={{color:'black'}}>
              Edit profile:
            </h2>
            <div className='userSettings'>
              <TextField floatingLabelText="Name:" />
              <TextField floatingLabelText="Email:" />
              <TextField floatingLabelText="Password:" />
              <TextField floatingLabelText="re-enter password:" />
              <RaisedButton label="Save" backgroundColor='#52a0cc'/>
            </div>
          </div>
        </div>
        <div className='center-xs col-xs-12'>
          <div className='row'>
            <div className="center-xs col-xs-12">
            <h2 style={{color:'black'}}>
              Profile Stats:
            </h2>
            <br />
            <ProgressTable />
            <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {};// show error message
}

function validate(formProps) {
  const errors = {};

  // validation here

  return errors;
}

export default reduxForm({
  form: 'profile',
  fields: [],
  validate
}, mapStateToProps, actions)(Profile);