import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import UpArrow from 'material-ui/svg-icons/navigation/arrow-upward'
import DownArrow from 'material-ui/svg-icons/navigation/arrow-downward'
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AddComment from './addComment';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsID: this.props.question.commentsID,
      currentUser: this.props.currentUser,
      commentButtonText: 'Show Comments',
      expanded: false,
      arrows: true
    };
  }

  handleUpvote(questionIndex, commentIndex) {
    // if user has previously downvoted, then remove them from downvotes
    var userIndex = questionIndex.hasDownvoted.indexOf(this.state.currentUser.displayName);
    if(questionIndex.hasDownvoted.indexOf(this.state.currentUser.displayName) !== -1) {
      this.props.removeVotes(this.state.commentsID, commentIndex, userIndex, 'DOWN')
    }
    // if user has not upvoted yet, add to upvotes
    else if (questionIndex.hasUpvoted.indexOf(this.state.currentUser.displayName) === -1) {
      this.props.addVotes(this.state.commentsID, commentIndex, questionIndex.hasUpvoted.length, 'UP')
    }
  }

  handleDownvote(questionIndex, commentIndex) {
    // if user has previously upvoted, then remove them from upvotes
    var userIndex = questionIndex.hasUpvoted.indexOf(this.state.currentUser.displayName);
    if(questionIndex.hasUpvoted.indexOf(this.state.currentUser.displayName) !== -1) {
      this.props.removeVotes(this.state.commentsID, commentIndex, userIndex, 'UP')
    }
    // if user has not downvoted yet, add to downvotes
    else if (questionIndex.hasDownvoted.indexOf(this.state.currentUser.displayName) === -1) {
      this.props.addVotes(this.state.commentsID, commentIndex, questionIndex.hasDownvoted.length, 'DOWN')
    }
  }

  cardExpandChange() {
    if(this.state.expanded === true) {
      this.setState({ commentButtonText: 'Show Comments', expanded: false})
    } else {
      this.setState({ commentButtonText: 'Hide Comments', expanded: true})  
    }
  }

  getUpArrow(comment) {
    if(comment.comment == "") {
      return <noscript />
    }
    if(comment.hasUpvoted.indexOf(this.state.currentUser.displayName) !== -1) {
      return <UpArrow style={{fill: 'green'}} /> 
    }
    return <UpArrow style={{fill: 'black'}} />

  }

  getDownArrow(comment) {
    if(comment.comment == "") {
      return <noscript />
    }
    if(comment.hasDownvoted.indexOf(this.state.currentUser.displayName) !== -1) {
      return <DownArrow style={{fill: 'red'}} />
    }
    return <DownArrow style={{fill: 'black'}} />
  }

  getVoteTotal(comment) {
    if(comment.comment == "") {
      return ""
    }
    return comment.hasUpvoted && comment.hasDownvoted && comment.hasUpvoted.length - comment.hasDownvoted.length
  }

  getComment(comment) {
    if(comment.comment == "") {
      return <noscript />
    }
    return (
      <div id="comment">
        {comment.username}
      <br />
        {comment.comment}
      </div>
    )
  }

  getDivider(comment) {
    if(comment.comment == "") {
      return <noscript />
    }
    return <Divider />
  }

  renderList() {
    return (this.props.comments[this.state.commentsID].map((comment, index) => (
      <List key={index}>
        <ListItem disabled={true}>
          <div id="votes"> {this.getVoteTotal(comment)} </div>
          <div id="arrows">
            <iconButton onClick={() => this.handleUpvote(comment, index)}> {this.getUpArrow(comment)} </iconButton>
            <iconButton onClick={() => this.handleDownvote(comment, index)}> {this.getDownArrow(comment)} </iconButton>
          </div>
            <div id="comment">
              {this.getComment(comment)} 
            </div>
        </ListItem>
        {this.getDivider(comment)}
      </List>
    )))
  }

  render() {
    return (  
      <div>
        <div class="comment-button">
          <AddComment 
            currentUser={this.state.currentUser}
            commentsList={this.props.comments}
            commentsID={this.state.commentsID}
          />
        </div>
        <Card
          onExpandChange={this.cardExpandChange.bind(this)}>
          <CardHeader
            title={this.state.commentButtonText}
            subtitle=""
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText id="comments" expandable={true}>
            {this.renderList()}
          </CardText>
          <CardActions expandable={true}>
          </CardActions>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments, commentIndex: state.commentIndex };
}

export default connect(mapStateToProps, actions)(Comments);