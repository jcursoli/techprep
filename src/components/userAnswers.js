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
import Forum from 'material-ui/svg-icons/communication/forum';
import * as actions from '../actions';
import Comments from './algorithmComments';

const style = {
	alignItems: 'center',
	height:'150px',
  margin: '10px',
  overflowY:'hidden',
};

class UserAnswers extends Component {
	handleUpvote(userName){
		var vote = {author:userName,value:1, dif: 0};
		if(!this.props.responses[this.props.index]){
			this.props.userAlgorithmVote(this.props.index,vote);
		}
		else if(!this.props.responses[this.props.index][userName]){
			this.props.userAlgorithmVote(this.props.index,vote);
		}
		else if(this.props.responses[this.props.index][userName].votes[this.props.currentUser] === -1){
			vote.dif = 2;
			vote.value = 1;
		}else if(this.props.responses[this.props.index][userName].votes[this.props.currentUser] === 0){
			vote.dif = 1;
			vote.value = 1;
		}else if(this.props.responses[this.props.index][userName].votes[this.props.currentUser] === 1){
			vote.value = 0;
			vote.dif = -1;
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
			vote.dif = 1;
			vote.value = 0;
		}else if(this.props.responses[this.props.index][userName].votes[this.props.currentUser] === 0){
			vote.dif = -1;
			vote.value = -1;
		}else if(this.props.responses[this.props.index][userName].votes[this.props.currentUser] === 1){
			vote.dif = -2;
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
			event.target.parentElement.parentElement.firstChild.style.overflowX = 'auto';
			event.target.parentElement.parentElement.firstChild.style.height = 'auto';
			event.target.parentElement.parentElement.style.height = 'auto';
			event.target.parentElement.parentElement.scrollIntoView();
		}
	}
	handleCommentOpen(key){
		let commentSection = document.getElementById(key);
		if(commentSection.style.visibility === 'hidden'){
				commentSection.style.visibility = 'visible';
				commentSection.style.display = 'inline';
				commentSection.parentElement.style.height = 'auto';
		}else {
			commentSection.style.visibility = 'hidden';
			commentSection.style.display = 'none';
			commentSection.parentElement.style.height = '205';
		}

	}
	renderComments(name){
		let algoComments = this.props.responses[this.props.index][name] ? this.props.responses[this.props.index][name].comments: false ;
		if(algoComments){
			var commentsCollection = [];
			_.forEach(algoComments,(value,name)=>{
			 	commentsCollection = [...commentsCollection,..._.map(value,(val,key)=> <Comments style={{margin:'5px'}} userName={name} comment={val} /> )]
		})
			return commentsCollection
		} else{
			return <noscript/>
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
		 				<div className='algoAnswer'>
		 			<button className='showContent' onClick={this.handleClick}>Show more</button>
			 			<iconButton className='algorithmVote' onClick={()=>this.handleDownvote(key)}> <DownArrow /> </iconButton>
			 			<div>{this.props.responses[this.props.index][key] ? this.props.responses[this.props.index][key].count: 0}</div>
			 			<iconButton className='algorithmVote' onClick={()=>this.handleUpvote(key)}> <UpArrow /> </iconButton>
			 			<iconButton style={{position: 'absolute',right:'0px',top:'0px'}} className='algorithmVote' onClick={()=>this.handleCommentOpen(key)}> <Forum /> </iconButton>
		 			</div>
		 			<div id={`${key}`} style={{display: 'none',visibility: 'hidden'}}>
		 				{this.renderComments(key)}
		 			</div>
		 		</Paper>
		 		)
		 	} else {
		 		list.push(
		 			<Paper style={{height:'auto',width:'90%',margin:'20px'}} key={key} zDepth={1} >
		 			<div style={{overflowX:'auto',alignItems:'center',height:'auto',margin:'10px',}}>
		 				<List className='userCommentAvatar'>
		 					<ListItem 
		 					leftAvatar={<Avatar src="https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAhBAAAAJDg2N2NlOWU0LTM2MzYtNDJjMS04ZjI5LTE4ZGU1NjgzZmNiMA.jpg" />}
		 						disabled={true}
		 						primaryText={key}
		 					/>
		 				</List>
		 				<pre style={{margin:'10px'}} className='no-whitespace-normalization' dangerouslySetInnerHTML={{__html:Prism.highlight(`${value}`, Prism.languages.javascript)}} />
		 			</div>
		 			<div className='algoAnswer'>
			 			<iconButton className='algorithmVote' onClick={()=>this.handleDownvote(key)}> <DownArrow /> </iconButton>
			 			<div>{this.props.responses[this.props.index][key] ? this.props.responses[this.props.index][key].count: 0}</div>
			 			<iconButton className='algorithmVote' onClick={()=>this.handleUpvote(key)}> <UpArrow /> </iconButton>
			 			<iconButton style={{position: 'absolute',right:'0px',top:'0px'}} className='algorithmVote' onClick={()=>this.handleCommentOpen(key)}> <Forum /> </iconButton>
		 			</div>
		 		<div id={`${key}`} style={{display: 'none',visibility: 'hidden'}}>
		 				{this.renderComments(key)}
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
	return { 
		responses:state.responses,
		currentUser: state.user.displayName
	 }
}
export default connect(mapStateToProps, actions)(UserAnswers);