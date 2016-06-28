import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Prism from 'prismjs';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import _ from 'lodash';
import Less from 'material-ui/svg-icons/navigation/expand-less';
import UpArrow from 'material-ui/svg-icons/navigation/arrow-upward';
import DownArrow from 'material-ui/svg-icons/navigation/arrow-downward';
import * as actions from '../actions';

const style = {
	alignItems: 'center',
	height:'150px',
  margin: '10px',
  overflowY:'hidden',
  background:'linearGradient(transparent 150px, white)'
};

class UserAnswers extends Component {
	handleUpvote(userName){
		var vote = {author:userName,value:1};
		if(!this.props.responses[this.props.index]){
			this.props.userAlgorithmVote(this.props.index,vote);
		}
		else if(!this.props.responses[this.props.index][userName]){
			this.props.userAlgorithmVote(this.props.index,vote);
		}
		else if(this.props.responses[this.props.index][userName].votes[this.props.currentUser] === -1){
			vote.value = 1;
		}else if(this.props.responses[this.props.index][userName].votes[this.props.currentUser] === 0){
			vote.value = 1;
		}else if(this.props.responses[this.props.index][userName].votes[this.props.currentUser] === 1){
			vote.value = 0;
		}
		this.props.userAlgorithmVote(this.props.index,vote);
	}
	handleDownvote(userName){
		var vote = {author:userName,value:-1};
		if(!this.props.responses[this.props.index]){
			this.props.userAlgorithmVote(this.props.index,vote);
		}
		else if(!this.props.responses[this.props.index][userName]){
			this.props.userAlgorithmVote(this.props.index,vote);
		}
		else if(this.props.responses[this.props.index][userName].votes[this.props.currentUser] === -1){
			vote.value = 0;
		}else if(this.props.responses[this.props.index][userName].votes[this.props.currentUser] === 0){
			vote.value = -1;
		}else if(this.props.responses[this.props.index][userName].votes[this.props.currentUser] === 1){
			vote.value = -1;
		}
		this.props.userAlgorithmVote(this.props.index,vote);
	}

	handleClick(event){
		if(event.target.parentElement.parentElement.firstChild.style.overflowY === 'visible'){
			//changes things to hidden
			event.target.parentElement.parentElement.children[1].firstChild.textContent = 'Show More'
			event.target.parentElement.parentElement.style.height = '205px';
			event.target.parentElement.parentElement.firstChild.style.height = '150px';
			event.target.parentElement.parentElement.firstChild.style.overflowY ='hidden';
			event.target.parentElement.parentElement.style.overflowY = 'hidden';
			event.target.parentElement.parentElement.style.width = '90%';
		} else{
			//changes things to visible
			event.target.parentElement.parentElement.children[1].firstChild.textContent = 'Show Less'
			event.target.parentElement.parentElement.firstChild.style.overflowY = 'visible';
			event.target.parentElement.parentElement.firstChild.style.overflowX = 'scroll';
			event.target.parentElement.parentElement.firstChild.style.height = 'auto';
			event.target.parentElement.parentElement.style.height = 'auto';
			event.target.parentElement.parentElement.scrollIntoView();
		}
	}
	renderComponents(){
		var list = [];
		 _.forEach(this.props.answers,(value,key)=>{
		 	console.log(this.props.answers)
		 var lineCount = value.split(/\r\n|\r|\n/).length;
		 	if(lineCount >= 6){
		 		//push item with a show more button else dont include the button
		 		list.push(
		 			<Paper style={{height:'205px',width:'90%',margin:'20px'}} key={key} zDepth={1} >
		 			<div style={style}>
		 				<List className='userCommentAvatar'>
		 					<ListItem 
		 					leftAvatar={<Avatar src="https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAhBAAAAJDg2N2NlOWU0LTM2MzYtNDJjMS04ZjI5LTE4ZGU1NjgzZmNiMA.jpg" />}
		 						disabled={true}
		 						primaryText={key}
		 					/>
		 				</List>
		 				<pre style={{margin:'10px',marginBottom:'10px'}} className='no-whitespace-normalization' dangerouslySetInnerHTML={{__html:Prism.highlight(`${value}`, Prism.languages.javascript)}} />
		 			</div>
		 				<div className='userStats'>
		 			<button className='showContent' onClick={this.handleClick}>Show more</button>
			 			<iconButton className='algorithmVote' onClick={()=>this.handleDownvote(key)}> <DownArrow /> </iconButton>
			 			<div>{this.props.responses[this.props.index][key] ? this.props.responses[this.props.index][key].count: 0}</div>
			 			<iconButton className='algorithmVote' onClick={()=>this.handleUpvote(key)}> <UpArrow /> </iconButton>
		 			</div>
		 		</Paper>
		 		)
		 	} else {
		 		list.push(
		 			<Paper style={{height:'auto',width:'90%',margin:'20px'}} key={key} zDepth={1} >
		 			<div style={{overflowX:'scroll',	alignItems: 'center',height:'auto',margin: '10px',}}>
		 				<List className='userCommentAvatar'>
		 					<ListItem 
		 					leftAvatar={<Avatar src="https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAhBAAAAJDg2N2NlOWU0LTM2MzYtNDJjMS04ZjI5LTE4ZGU1NjgzZmNiMA.jpg" />}
		 						disabled={true}
		 						primaryText={key}
		 					/>
		 				</List>
		 				<pre style={{margin:'10px'}} className='no-whitespace-normalization' dangerouslySetInnerHTML={{__html:Prism.highlight(`${value}`, Prism.languages.javascript)}} />
		 			</div>
		 			<div className='userStats'>
			 			<iconButton className='algorithmVote' onClick={()=>this.handleDownvote(key)}> <DownArrow /> </iconButton>
			 			<div>{this.props.responses[this.props.index][key] ? this.props.responses[this.props.index][key].count: 0}</div>
			 			<iconButton className='algorithmVote' onClick={()=>this.handleUpvote(key)}> <UpArrow /> </iconButton>
		 			</div>
		 		</Paper>
		 		)
		 	}
		})
		 return list;
	}

	render(){
		if(this.props.show){
			return(
				<div style={{marginTop:'100px'}}>
				<div style={{textAlign:'center',color:'black'}}>Other Answers</div>
					{this.renderComponents()}
				</div>
			)
		}
		else{
			return (
				<noscript />
			)
		}
	}
}
function mapStateToProps(state){
	console.log('this is in the mapstate to props',state.responses)
	return { 
		responses:state.responses,
		currentUser: state.user.displayName
	 }
}
export default connect(mapStateToProps, actions)(UserAnswers);