import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
// import Arrows from './Arrows';
import UpArrow from 'material-ui/svg-icons/navigation/arrow-upward'
import DownArrow from 'material-ui/svg-icons/navigation/arrow-downward'
import { connect } from 'react-redux';
import * as actions from '../actions/actionTypes';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      currentCommentsID: this.props.question.commentsID 
    };

    // console.log('state in comments:', this.state)

    //console.log('props.question.commentsID in comments', props.question.commentsID);
  }


  render() {
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
            {console.log('this.props.comments[this.state.currentCommentsID]', this.props.comments[this.state.currentCommentsID])}
            {this.props.comments[this.state.currentCommentsID].map((comment, index) => {
              return (
                <List key={index}>
              {console.log('comment in map', comment)}
                  <ListItem disabled={true}>
                    <div>
                    <div>
                      <div id="votes"> {comment.hasUpvoted.length - comment.hasDownvoted.length} </div>
                      <div id="arrows">
                        <iconButton onClick={() => this.handleUpvote(comment)}> <UpArrow /> </iconButton>
                        <iconButton onClick={() => this.handleDownvote(comment)}> <DownArrow /> </iconButton>
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
  // console.log('state in mstp', state);
  return { comments: state.comments };
}

export default connect(mapStateToProps, actions)(Comments);