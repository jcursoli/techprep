import CheckPoint from './checkPoint';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../actions';

const customContentStyle = {
  width: '40%',
  maxWidth: 'none',
};

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
          open={this.props.open || false}
          onRequestClose={this.handleClose}
          contentStyle={customContentStyle}
        >
        <CheckPoint flag={this.props.answer} />
        </Dialog>
      </div>
    );
  }
}
function mapStateToProps(state){
	return {
		open: state.dialog.open,
		answer: state.dialog.answer
	}
}
export default connect(mapStateToProps, actions)(AlgorithmDialog);





