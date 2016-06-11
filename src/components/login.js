import React, { Component } from 'react';

import { reduxForm } from 'redux-form';
import * as actions from '../actions';

class Login extends Component {
  handleFormSubmit({ username, password }) {
    this.props.loginUser({ username, password });
  }

  renderError() {
    if (this.props.loginError) {
      // show error message here
    }
  }

  render() {
    const { handleSubmit, fields: { username, password }} = this.props;

    return (
      <div className="login">
        <h1>Welcome back</h1>
        <form className="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <input {...username} type="text" placeholder="Username" />
          <input {...password} type="password" placeholder="Password" />
          { this.renderError() }
          <button type="submit" id="login-button">Login</button>
        </form>
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
  form: 'login',
  fields: ['username','password'],
  validate
}, mapStateToProps, actions)(Login);