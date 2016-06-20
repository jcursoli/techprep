import React, { Component } from 'react';

import { reduxForm } from 'redux-form';

import * as actions from '../../actions';


class Signup extends Component {

  handleFormSubmit({ username, email, password }) {
    this.props.signupUser({ username, email, password });
  }

  render() {
    const { handleSubmit, fields: { username, email, password, confirmPassword }} = this.props;

    return (
      <div className="login">
        <h1>Welcome to TechPrep</h1>
        <form className="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <input {...username} type="text" placeholder="Username" />
          <input {...email} type="email" placeholder="Email" />
          <input {...password} type="password" placeholder="Password" />
          <input {...confirmPassword} type="password" placeholder="Confirm Password" />
          <button type="submit" id="login-button">Signup</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {}; //add error message here
}

function validate(formProps) {
  const errors = {};

  // add validation here

  return errors;
}

export default reduxForm({
  form: 'signup',
  fields: ['username', 'email', 'password', 'confirmPassword'],
  validate
}, mapStateToProps, actions)(Signup);