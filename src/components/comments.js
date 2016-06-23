import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import UpArrow from 'material-ui/svg-icons/navigation/arrow-upward'
import DownArrow from 'material-ui/svg-icons/navigation/arrow-downward'
import { connect } from 'react-redux';
import * as actions from '../actions';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      currentCommentsID: this.props.question.commentsID, 
      currentUser: this.props.currentUser
    };
    console.log(props, 'in comments')
  }

  handleUpvote(comment, index) {
    // console.log('handleUpvote comment and user', comment, this.state.currentUser.displayName);
    // console.log(index, 'in handleUpvote');
    //console.log(this.props.currentUser.displayName);
    if(comment.hasUpvoted.indexOf(this.state.currentUser.displayName) === -1) {
      this.props.updateVotes(this.state.currentCommentsID, index);
      console.log('can upvote', 'questionID:', this.state.currentCommentsID, 'commentsID', index)
    }

  }

  handleDownvote(comment) {
    // console.log('handleDownvote comment and user', comment, this.state.currentUser.displayName);
    if(comment.hasDownvoted.indexOf(this.state.currentUser.displayName) === -1) {
      console.log('can downvote')
    }
  }

  render() {
    // console.log('state', this.state) {console.log('in map:', this.props.comments[this.state.currentCommentsID])
    return (  
      <div>
        <Card>
          <CardHeader
            title="Comments"
            subtitle=""
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText id="comments" expandable={true}>
            {console.log('props in comments: ', this.props)}
            {this.props.comments[this.state.currentCommentsID].map((comment, index) => {
                      // {console.log('comment in map', comment)}
              return (
                <List key={index}>
                  <ListItem disabled={true}>
                    <div>
                    <div>
                      <div id="votes"> {comment.hasUpvoted.length - comment.hasDownvoted.length} </div>
                      <div id="arrows">
                        <iconButton onClick={() => this.handleUpvote(comment, index)}> <UpArrow /> </iconButton>
                        <iconButton onClick={() => this.handleDownvote(comment, index)}> <DownArrow /> </iconButton>
                      </div>
                      </div>
                    </div>
                    <div id="comment">
                      {comment.username}
                      <br />
                      {comment.comment}
                    </div>

                  </ListItem>
                  <Divider />
                </List>
              );
            })}
          </CardText>
          <CardActions expandable={true}>
          </CardActions>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps, actions)(Comments);