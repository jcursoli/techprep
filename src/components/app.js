import React, { Component } from 'react';
import Header from './header';


export default class App extends Component {
  render() {
    return (
      <div style={{height:'100%'}}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}