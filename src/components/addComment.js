import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import * as actions from '../actions';



export default class AddComment extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentUser: this.props.currentUser.displayName,
      commentsList: this.props.commentsList,
      commentID: this.props.commentsID
    }
  }

  keyDown (event){
    if(event.keyCode=='13'){
      // console.log('this.props in addComment', this.state.currentUser, this.state.commentsList, this.state.commentID, event.target.value);
      this.props.addComment(this.state.currentUser, this.state.commentsList, this.state.commentID, event.target.value)
    }
  }

  render () {
    return (
      <div>
        <div class="add-comment">
          <TextField
            hintText="Add a comment"
            onKeyDown={this.keyDown.bind(this)}
            fullWidth={true}
            multiLine={false}
            rows={1}
            rowsMax={8}
          />
        </div>
        <div class="comment-button">
          <FlatButton 
            label="Submit Comment" 
            primary={true} 
            onTouchStart={this.keyDown.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(AddComment);