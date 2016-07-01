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

import Dropzone from'react-dropzone';

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
  constructor(props) {
    super(props)
    this.state = {file: null, preview: null};
  }

  componentDidMount() {
    this.setState({ preview: this.props.user.profileURL || 'https://i.imgur.com/DRuG5YH.png' })
  }

  onDrop(file) {
    var uploadTask = firebase.storage().ref().child('profileImages/' + this.props.user.displayName).put(file[0]);
    uploadTask.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
      // See below for more detail
      console.log('1');
    }, function(error) {
      console.log('Error:', error);
      // Handle unsuccessful uploads
    }, function() {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      var downloadURL = uploadTask.snapshot.downloadURL;
      var user = firebase.auth().currentUser;
      firebase.database().ref('users/' + user.displayName).update({ profileURL: downloadURL })
      user.updateProfile({
        photoURL: downloadURL
      });
      console.log('downloadURL:', downloadURL);
    });
    this.setState({
      file,
      preview: file[0].preview
    });
  }

  onOpenClick() {
    console.log('inside onOpenClick');
    this.refs.dropzone.open();
  }

  handleFormSubmit() {
    console.log('handleFormSubmit');
  }

  renderError() {
    if (this.props.loginError) {
      // show error message here
    }
  }

  render() {
    //var user = firebase.auth().currentUser;
    const { handleSubmit, fields: {}} = this.props;

    return (
      <div className="row" style={{marginTop: '25px'}}>
        <div className='center-xs col-xs-offset-1 col-xs-10 col-xs-offset-1' style={{border:'solid', borderRadius: '20px'}}>
          <div className="row" style={{margin: '25px 25px'}}>
            <div className='center-xs col-xs-12'>
            <img height='200px' style={{borderRadius: '20px'}} src={this.state.preview} onClick={this.onOpenClick.bind(this)} />
            </div>
            <div className='center-xs col-xs-12'>
              <br />
              <h2 style={{color:'white', fontWeight: '900'}}>{this.props.user && this.props.user.displayName}</h2>
              <br />
              <Divider />
            </div>
            <div className='center-xs col-xs-4'>
              <br />
              <strong className='userNumbers' style={{color:'white'}}>11</strong>
              <h4 style={{color:'white'}} > Friends </h4>
            </div>
            <div className='center-xs col-xs-4'>
              <br />
              <strong className='userNumbers' style={{color:'white'}}>106</strong>
              <h4 style={{color:'white'}} > Algorithms Complete </h4>
            </div>
            <div className='center-xs col-xs-4'>
              <br />
              <strong className='userNumbers' style={{color:'white'}}>44</strong>
              <h4 style={{color:'white'}} > Concepts Complete </h4>
            </div>
            <Divider />
          </div>
        </div>
        <div className='center-xs col-xs-offset-1 col-xs-10 col-xs-offset-1' style={{border:'solid', borderRadius: '20px', marginTop: '25px'}}>
          <div style={{margin: '25px 25px'}}>
            <h2 style={{color:'white', fontWeight: '900'}}>
              Edit profile:
            </h2>
            <div>
              <TextField fullWidth={true} floatingLabelText="Email:" floatingLabelStyle={{color: 'white'}}/>
              <TextField fullWidth={true} floatingLabelText="Password:" floatingLabelStyle={{color: 'white'}}/>
              <TextField fullWidth={true} floatingLabelText="Confirm Password:" floatingLabelStyle={{color: 'white'}}/>
              <RaisedButton onClick={this.handleFormSubmit.bind(this)} style={{marginTop: '10px'}} label="Save" labelColor="#51ccb8" backgroundColor='white' icon={<ActionAndroid />}/>
            </div>
          </div>
        </div>
        <div className='center-xs col-xs-offset-1 col-xs-10 col-xs-offset-1' style={{border:'solid', borderRadius: '20px', marginTop: '25px', marginBottom: '25px'}}>
          <div className='row' style={{margin: '25px 25px'}}>
            <div className="center-xs col-xs-12">
            <h2 style={{color:'white', fontWeight: '900'}}>
              Profile Stats:
            </h2>
            <br />
            <ProgressTable />
            <br />
            </div>
          </div>
        </div>
        <div className='center-xs col-xs-offset-1 col-xs-10 col-xs-offset-1'>
          <Dropzone ref="dropzone" onDrop={this.onDrop.bind(this)} style={{display: 'none'}}>
          </Dropzone>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { user: state.user};// show error message
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