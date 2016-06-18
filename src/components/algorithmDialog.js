import CheckPoint from './checkPoint';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../actions';

class AlgorithmDialog extends Component {

  handleClose = () => {
		this.props.closeDialog(); 
  };


  render() {
    const action = [
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];
    return (
      <div>
        <Dialog
        	actions={action}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleClose}
        >
        <CheckPoint flag={this.props.answer} />
        </Dialog>
      </div>
    );
  }
}
function mapStateToProps(state){
	console.log('this is the mstp in algoDialog',state.dialog);
	return {
		open: state.dialog.open,
		answer: state.dialog.answer
	}
}
export default connect(mapStateToProps, actions)(AlgorithmDialog);





