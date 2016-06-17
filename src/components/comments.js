import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
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
      { username: 'jesus', comment: 'whoa guys cool app' },
      { username: 'bob', comment: 'wow you guys are super cool'},
      { username: 'jesus', comment: 'whoa guys cool app' },
      { username: 'bob', comment: 'wow you guys are super cool'},
      { username: 'jesus', comment: 'whoa guys cool app' },
      { username: 'bob', comment: 'wow you guys are super cool'}
    ];

    return (  
      <Card>
        <CardHeader
          title="Comments"
          subtitle=""
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          {commentList.map((row, index) => {
            
            // const handleOpen = () => {
            //   this.setState({
            //     username: commentList['username'], 
            //     comment: commentList['comment']
            //   });

            return (
              <List key={index}>
                <ListItem>{row.username}</ListItem>
                <ListItem>{row.comment}</ListItem>
                <Divider />
              </List>
            );
          })}



        </CardText>
        <CardActions expandable={true}>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    );
  }
}