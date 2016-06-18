import Checkpoint from './checkPoint';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../actions';

class AlgorithmDialog extends Component {

  render() {
    const action = [
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.actions.closeDialog}
      />
    ];
    return (
      <div>
      	<Checkpoint flag={this.props.correct} />
        <RaisedButton label="Alert" onTouchTap={this.actions.closeDialog} />
        <Dialog
        	actions={action}
          modal={false}
          open={this.props.open}
          onRequestClose={this.actions.closeDialog}
        >
        </Dialog>
      </div>
    );
  }
}
function mapStateToProps(state){
	return {
		open: state.dialog.open,
		correct: state.dialog.correct
	}
}
export default connect(mapStateToProps, actions)(AlgorithmDialog);





