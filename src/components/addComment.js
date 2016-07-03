import React, { Component } from 'react';
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
      this.props.addComment(this.state.currentUser, this.state.commentsList, this.state.commentID, event.target.value);
      document.getElementById('commentField').value='';
    }
  }

  render () {
    return (
      <div>
        <div class="add-comment">
          <TextField
            id="commentField"
            hintText="Add a comment"
            onKeyDown={this.keyDown.bind(this)}
            fullWidth={true}
            multiLine={false}
            rows={1}
            rowsMax={8}
          />
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(AddComment);