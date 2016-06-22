import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
// import Arrows from './Arrows';
import { connect } from 'react-redux';
import * as actions from '../actions/actionTypes';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };

    console.log('this.props in comments: ', this.props)
  }


  render() {
    // {console.log('this.state in comments', this.state)}
    // const commentList = [
    //   { username: 'jesus', comment: 'whoa guys cool app' },
    //   { username: 'bob', comment: 'wow you guys are super cool'},
    //   { username: 'forrest', comment: 'hey guys I really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really need to find my shirt' },
    //   { username: 'bob', comment: 'wow you guys are super cool'},
    //   { username: 'jesus', comment: 'whoa guys cool app' },
    //   { username: 'bob', comment: 'wow you guys are super cool'},
    //   { username: 'jesus', comment: 'whoa guys cool app' },
    //   { username: 'bob', comment: 'wow you guys are super cool'}
    // ];

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
            {this.props.comments.map((comment, index) => {
              {console.log('comment', comment)}
              return (
                <List key={index}>
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
  console.log('state.comments in mstp', state.comments);
  return { comments: state.comments };
}

export default connect(mapStateToProps, actions)(Comments);