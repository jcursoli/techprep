import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Comments from './comments'

export default class DialogBox extends Component {

  constructor(props) {
    super(props);
    console.log('dialog props', props)
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    // console.log('in dialog handleClose')
    this.setState({open: false});

  };

  render() {

    // {console.log('this.props in dialog render', this.props)}
    const actions = [
      <Comments hintText="Show Comments"
        question={this.props.question}
        currentUser={this.props.currentUser} />
    ];

    return (
      <div>
        <div>
          <div>
            <Dialog
              title={this.props.question.question}
              modal={false}
              actions={actions} 
              open={this.props.localOpen}
              onRequestClose={this.props.localHandleClose}
              repositionOnUpdate={false}
              style={{position: 'absolute', bottom: '80%'}}
            >

              <div id="answer"> {this.props.question.answer} </div>
            </Dialog>
          </div>
        </div>
      </div>
    );
  }
}



