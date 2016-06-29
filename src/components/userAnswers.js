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
	height:'160px',
  margin: 'px',
  overflowY:'hidden',
};

class UserAnswers extends Component {
	constructor(props){
		super(props);
		this.state = {
			inputValue:'',
			nodeRef: {},
		}
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(e){
		this.setState({inputValue:e.target.value})
	}
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
			event.target.parentElement.parentElement.firstChild.style.height = '160px';
			event.target.parentElement.parentElement.firstChild.style.overflowY ='hidden';
			event.target.parentElement.parentElement.style.overflowY = 'hidden';
			event.target.parentElement.parentElement.style.width = '90%';
			event.target.parentElement.parentElement.scrollIntoView();
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
	handleShowForm(event){
		let node = event.target.parentElement.parentElement.getElementsByClassName('commentSubmit')[0];
		if(_.isEmpty(this.state.nodeRef)){
			this.setState({nodeRef:node});
			node.style.display = 'inline';
			node.style.visibility = 'visible';
		} else{
			this.state.nodeRef.style.display = 'none';
			this.state.nodeRef.style.visibility = 'hidden';
			node.style.display = 'inline';
			node.style.visibility = 'visible';
			this.setState({nodeRef:node,inputValue:''});
		}

	}
	sendComment(key){
		if(this.state.inputValue.length){
			this.props.userAlgorithmComment(this.props.index,{comment:this.state.inputValue, author:key});
			this.setState({inputValue:''});
		}
	}
	renderComments(name){
		let algoComments = this.props.responses[this.props.index][name] ? this.props.responses[this.props.index][name].comments: false ;
		if(algoComments){
			let commentsCollection = [];
			_.forEach(algoComments,(value,name)=>{
			 	commentsCollection = [...commentsCollection,..._.map(value,(val,key)=> {return { [key] :<Comments style={{margin:'10px'}} userName={name} comment={val} /> }} )]
		})
			commentsCollection.sort((a,b)=>{
				let keysA = Object.keys(a);
				let keysB = Object.keys(b);
				if( Date.parse(keysA[0]) < Date.parse(keysB[0])){return -1};
				if( Date.parse(keysA[0]) > Date.parse(keysB[0])){return 1};
				return 0;
			});
			let OrderedComments = new Array;
			for(let i = 0; i < commentsCollection.length;i++){
				let key = Object.keys(commentsCollection[i])
				OrderedComments[i] = commentsCollection[i][key];
			}
			return OrderedComments;
		} else{
			return <noscript/>
		}
	}
	renderComponents(){
		let list = [];
		 _.forEach(this.props.answers,(value,key)=>{
		 let lineCount = value.split(/\r\n|\r|\n/).length;
		 	if(lineCount >= 6){
		 		//push item with a show more button else dont include the button
		 		list.push(
		 			<Paper style={{height:'205px',width:'90%',margin:'20px',padding:'5px'}} key={key} zDepth={1} >
		 			<div style={style}>
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
		 			<button className='showContent' onClick={this.handleClick}>Show more</button>
			 			<iconButton className='algorithmVote' onClick={()=>this.handleDownvote(key)}> <DownArrow /> </iconButton>
			 			<div>{this.props.responses[this.props.index][key] ? this.props.responses[this.props.index][key].count: 0}</div>
			 			<iconButton className='algorithmVote' onClick={()=>this.handleUpvote(key)}> <UpArrow /> </iconButton>
			 			<iconButton style={{position: 'absolute',right:'0px',top:'0px'}} className='forumButton' onClick={()=>this.handleCommentOpen(key)}> <Forum /> </iconButton>
		 			</div>
		 			<div id={`${key}`} style={{display: 'none',visibility: 'hidden'}}>
		 			<br/>
		 				<button className='showContent' onClick={this.handleShowForm.bind(this)}>Reply</button>
		 				<div className='commentSubmit' style={{margin:'5px', display: 'none',visibility: 'hidden'}}><button onClick={this.sendComment.bind(this,key)} style={{margin:'5px'}}>send</button><input onChange={this.handleInputChange} value={this.state.inputValue} style={{margin:'5px'}}></input></div>
		 				{this.renderComments(key)}
		 			</div>
		 		</Paper>
		 		)
		 	} else {
		 		list.push(
		 			<Paper style={{overflowY:'hidden',height:'205',width:'90%',margin:'20px',padding:'5px'}} key={key} zDepth={1} >
		 			<div style={{overflowX:'auto',alignItems:'center',height:'160px'}}>
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
			 			<iconButton style={{position: 'absolute',right:'0px',top:'0px'}} className='forumButton' onClick={()=>this.handleCommentOpen(key)}> <Forum /> </iconButton>
		 			</div>
		 			<div id={`${key}`} style={{visibility: 'hidden'}}>
		 				<button className='showContent' onClick={this.handleShowForm.bind(this)}>Reply</button>
		 				<div className='commentSubmit' style={{margin:'5px', display: 'none',visibility: 'hidden'}}><button onClick={this.sendComment.bind(this,key)} style={{margin:'5px'}}>send</button><input onChange={this.handleInputChange} value={this.state.inputValue} style={{margin:'5px'}}></input></div>
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