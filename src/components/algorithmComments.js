import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Paper from 'material-ui/Paper';
import UpArrow from 'material-ui/svg-icons/navigation/arrow-upward';
import DownArrow from 'material-ui/svg-icons/navigation/arrow-downward';
import moment from 'moment';

const AlgorithmComments = (props) => {
 		return (
	 			<Paper className='algorithmCommentContent' style={{height:'auto'}} zDepth={1} >
	 			<div style={{overflowX:'auto',alignItems:'center',height:'auto',margin:'2px',}}>
	 				<List>
	 					<ListItem 
	 					leftAvatar={<Avatar src="https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAhBAAAAJDg2N2NlOWU0LTM2MzYtNDJjMS04ZjI5LTE4ZGU1NjgzZmNiMA.jpg" />}
	 						disabled={true}
	 						primaryText={props.userName}
	 						secondaryText={moment(props.date).fromNow()}
	 					/>
	 				</List>
	 				<p>{props.comment}</p>
	 			</div>
	 		</Paper>
 		)
}
export default AlgorithmComments;