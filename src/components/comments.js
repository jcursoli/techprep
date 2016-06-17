import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Arrows from './Arrows';

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }


  render() {

    const commentList = [
      { username: 'jesus', comment: 'whoa guys cool app' },
      { username: 'bob', comment: 'wow you guys are super cool'},
      { username: 'forrest', comment: 'hey guys I really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really need to find my shirt' },
      { username: 'bob', comment: 'wow you guys are super cool'},
      { username: 'jesus', comment: 'whoa guys cool app' },
      { username: 'bob', comment: 'wow you guys are super cool'},
      { username: 'jesus', comment: 'whoa guys cool app' },
      { username: 'bob', comment: 'wow you guys are super cool'}
    ];

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
            {commentList.map((row, index) => {
              
              // const handleOpen = () => {
              //   this.setState({
              //     username: commentList['username'], 
              //     comment: commentList['comment']
              //   });

              return (
                <List key={index}>
                  <ListItem disabled={true}>
                    <div>
                    <Arrows />
                    </div>
                      <div id="comment">
                        {row.username}
                        <br />
                        {row.comment}
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