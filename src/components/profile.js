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

  render() {
    const { handleSubmit, fields: {}} = this.props;

    return (
      <div style={{background:'white', overflow: 'scroll'}}>
        <div className="profileTabs">
        <div className='userInfo'>
             <div className='profileImg'>
               <img width='100%' src='https://avatars0.githubusercontent.com/u/302001?v=3&s=96' /> 
             </div>
             <div>
               <h3 style={{color:'black'}}>Joey Cursoli</h3>
               <Divider />
               <div className='userStats'>
                 <div className='userDetails'>
                     <strong className='userNumbers'> 11 </strong>
                    <h4 style={{color:'black'}} > solved </h4>
                 </div>
                 <div className='userDetails'>
                    <strong className='userNumbers'> 106 </strong>
                   <h4 style={{color:'black'}} > Friends </h4>
                 </div>
                 <div className='userDetails'>
                  <strong className='userNumbers'> 44 </strong>
                   <h4 style={{color:'black'}} > Lessons </h4>
                 </div>
               </div>
               <Divider />
             </div>
           </div>
          <Tabs
          tabItemContainerStyle={styles.tabs}>
            <Tab label="Overview" style={styles.headline}>
              <div>
                <p style={{color:'black'}}>
                  Profile Overview:
                </p>
                <ProgressTable />
                <br />
                <ProgressTable />
                </div>
            </Tab>
            <Tab label="Settings" style={styles.headline}>
              <div>
                <p style={{color:'black'}}>
                  Edit profile:
                </p>
                <div className='userSettings'>
                  <TextField floatingLabelText="Name:" />
                  <TextField floatingLabelText="Email:" />
                  <TextField floatingLabelText="Password:" />
                  <TextField floatingLabelText="re-enter password:" />
                  <RaisedButton label="Save" backgroundColor='#52a0cc'/>
                </div>
              </div>
            </Tab>
          </Tabs>
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