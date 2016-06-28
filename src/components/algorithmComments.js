import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Paper from 'material-ui/Paper';
import UpArrow from 'material-ui/svg-icons/navigation/arrow-upward';
import DownArrow from 'material-ui/svg-icons/navigation/arrow-downward';

const AlgorithmComments = (props) => {
 		return (
	 			<Paper style={{height:'auto',width:'90%',margin:'20px'}} zDepth={1} >
	 			<div style={{overflowX:'auto',alignItems:'center',height:'auto',margin:'10px',}}>
	 				<List className='userCommentAvatar'>
	 					<ListItem 
	 					leftAvatar={<Avatar src="https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAhBAAAAJDg2N2NlOWU0LTM2MzYtNDJjMS04ZjI5LTE4ZGU1NjgzZmNiMA.jpg" />}
	 						disabled={true}
	 						primaryText={props.userName}
	 					/>
	 				</List>
	 				<p>{props.comment}</p>
	 			</div>
	 		</Paper>
 		)
}
export default AlgorithmComments;