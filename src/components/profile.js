import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import LinearProgress from 'material-ui/LinearProgress';
import {Tabs, Tab} from 'material-ui/Tabs';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';

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
      table:{
        border:' 2px solid #EEEFF2',
         background: 'rgba(0, 0, 0, 0)',
      },
      background:{
        height:'90%',
        opacity: .8,

      }
    };

    return (
      <div className="newBackground" style={styles.background}>
      <Tabs
      tabItemContainerStyle={styles.tabs}>
        <Tab label="Stats" style={styles.headline}>
          <div className="row center-xs">
          <div className="col-xs-6">
            <p>
              This is an example tab.
            </p>
            <p>
              You can put any sort of HTML or react component in here. It even keeps the component state!
            </p>
            </div>
          </div>
        </Tab>
        <Tab label="Item Two" style={styles.headline}>
          <div >
            <h2 >Tab Two</h2>
            <p>
              This is another example tab.
            </p>
          </div>
        </Tab>
      </Tabs>
        <div className="row center-xs">
            <div className="col-xs-6">
                <div className="box">
                    start
                </div>
            </div>
        </div>
        <div className="row">
        <div className="col-xs-12
                    col-sm-8
                    col-md-4
                    col-lg-4">
            <div className="box">Responsive</div>
        </div>
        <div className="col-xs-12
                    col-sm-8
                    col-md-4
                    col-lg-4">
            <div className="box">
              <Table
                selectable={false}
              >
                  <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                    style={styles.table}
                  >
                    <TableRow>
                      <TableHeaderColumn width={'25%'}>Category</TableHeaderColumn>
                      <TableHeaderColumn width={'50%'}>Progress</TableHeaderColumn>
                      <TableHeaderColumn>%</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody
                    displayRowCheckbox={false}
                  >
                    <TableRow style={styles.table}>
                      <TableRowColumn width={'25%'}>HTML</TableRowColumn>
                      <TableRowColumn width={'50%'}><LinearProgress mode="determinate" value={100} /></TableRowColumn>
                      <TableRowColumn width={'25%'}>44%</TableRowColumn>
                    </TableRow>
                    <TableRow style={styles.table}>
                      <TableRowColumn width={'25%'}>CSS</TableRowColumn>
                      <TableRowColumn width={'50%'}><LinearProgress mode="determinate" color="red" value={57} /></TableRowColumn>
                      <TableRowColumn width={'25%'}>57%</TableRowColumn>
                    </TableRow>
                    <TableRow style={styles.table}>
                      <TableRowColumn width={'25%'}>JavaScript</TableRowColumn>
                      <TableRowColumn width={'50%'}><LinearProgress mode="determinate" color="green" value={83} /></TableRowColumn>
                      <TableRowColumn width={'25%'}>83%</TableRowColumn>
                    </TableRow>
                  </TableBody>
                </Table>
            </div>
        </div>
        <div className="col-xs-12
                    col-sm-8
                    col-md-4
                    col-lg-4">
            <div className="box">Responsive</div>
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