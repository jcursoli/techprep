import React, { Component } from 'react';
import ProgressTable from './userProgress';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import LinearProgress from 'material-ui/LinearProgress';
import {Tabs, Tab} from 'material-ui/Tabs';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';

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
      <div className="newBackground">
        <div className="profileTabs">
          <div className='profileImg'>
           <img width='100%' height='100%' src='https://avatars0.githubusercontent.com/u/302001?v=3&s=96' /> 
           </div>
          <Tabs
          tabItemContainerStyle={styles.tabs}>
            <Tab label="Overview" style={styles.headline}>
              <div>
                <p>
                  This is an example tab.
                </p>
                <p>
                  You can put any sort of HTML or react component in here. It even keeps the component state!
                </p>
                <ProgressTable />
                </div>
            </Tab>
            <Tab label="Item Two" style={styles.headline}>
              <div>
                <p>
                  This is another example tab.
                </p>
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