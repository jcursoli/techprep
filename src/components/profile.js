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
import ActionAndroid from 'material-ui/svg-icons/action/android';

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
      <div className="row" style={{marginTop: '25px'}}>
        <div className='center-xs col-xs-offset-1 col-xs-10 col-xs-offset-1' style={{border:'solid', borderRadius: '10px'}}>
          <div className="row" style={{margin: '25px 25px'}}>
            <div className='center-xs col-xs-12'>
              <Avatar size={150} src='https://avatars0.githubusercontent.com/u/302001?v=3&s=96' />
            </div>
            <div className='center-xs col-xs-12'>
              <br />
              <h2 style={{color:'white'}}>{user && user.displayName}</h2>
              <br />
              <Divider />
            </div>
            <div className='center-xs col-xs-4'>
              <br />
              <strong className='userNumbers' style={{color:'white'}}> 11 </strong>
              <h4 style={{color:'white'}} > Friends </h4>
            </div>
            <div className='center-xs col-xs-4'>
              <br />
              <strong className='userNumbers' style={{color:'white'}}> 106 / 233 </strong>
              <h4 style={{color:'white'}} > Algorithms Complete </h4>
            </div>
            <div className='center-xs col-xs-4'>
              <br />
              <strong className='userNumbers' style={{color:'white'}}> 44 / 837 </strong>
              <h4 style={{color:'white'}} > Concepts Complete </h4>
            </div>
            <Divider />
          </div>
        </div>
        <div className='center-xs col-xs-offset-1 col-xs-10 col-xs-offset-1' style={{border:'solid', borderRadius: '10px', marginTop: '25px'}}>
          <div style={{margin: '25px 25px'}}>
            <h2 style={{color:'white'}}>
              Edit profile:
            </h2>
            <div>
              <TextField fullWidth={true} floatingLabelText="Name:" floatingLabelStyle={{color: 'white'}} />
              <TextField fullWidth={true} floatingLabelText="Email:" floatingLabelStyle={{color: 'white'}}/>
              <TextField fullWidth={true} floatingLabelText="Password:" floatingLabelStyle={{color: 'white'}}/>
              <TextField fullWidth={true} floatingLabelText="Confirm Password:" floatingLabelStyle={{color: 'white'}}/>
              <RaisedButton style={{marginTop: '10px'}} label="Save" labelColor="#51ccb8" backgroundColor='white' icon={<ActionAndroid />}/>
            </div>
          </div>
        </div>
        <div className='center-xs col-xs-offset-1 col-xs-10 col-xs-offset-1' style={{border:'solid', borderRadius: '10px', marginTop: '25px'}}>
          <div className='row' style={{margin: '25px 25px'}}>
            <div className="center-xs col-xs-12">
            <h2 style={{color:'white'}}>
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