 import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Prism from 'prismjs';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import _ from 'lodash';
import Forum from 'material-ui/svg-icons/communication/forum';
import * as actions from '../actions';
import Comments from './algorithmComments';
import AlgorithmComment from './algorithmComment';
import AlgorithmVote from './algorithmVote';


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
			nodeRef: {},
		}
	}
	handleClick(event){
		if(event.target.parentElement.parentElement.firstChild.style.overflowY === 'visible'){
			//changes things to hidden
			event.target.parentElement.parentElement.children[1].firstChild.textContent = 'Show More'
			event.target.parentElement.parentElement.style.height = '205px';
			event.target.parentElement.parentElement.firstChild.style.height = '160px';
			event.target.parentElement.parentElement.firstChild.style.overflowY ='hidden';
			event.target.parentElement.parentElement.style.overflowY = 'hidden';
			event.target.parentElement.parentElement.style.width = 'auto';
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
			this.setState({nodeRef:node});
		}

	}
	sendComment(key,input){
		if(input.length){
			this.props.userAlgorithmComment(this.props.index,{comment:input, author:key});
		}
	}
	renderComments(name){
		let algoComments = this.props.responses[this.props.index] && this.props.responses[this.props.index][name] && this.props.responses[this.props.index][name].comments ;
		if(algoComments){
			let commentsCollection = [];
			_.forEach(algoComments,(value,name)=>{
			 	commentsCollection = [...commentsCollection,..._.map(value,(val,key)=> {return { [key] :<Comments style={{margin:'20px'}} date={key} userName={name} comment={val} /> }} )]
		})
			commentsCollection.sort((a,b)=>{
				let keysA = Object.keys(a);
				let keysB = Object.keys(b);
				if( Date.parse(keysA[0]) < Date.parse(keysB[0])){return -1};
				if( Date.parse(keysA[0]) > Date.parse(keysB[0])){return 1};
				return 0;
			});
			let OrderedComments = new Array(commentsCollection.length);
			for(let i = 0; i < commentsCollection.length;i++){
				let key = Object.keys(commentsCollection[i])
				OrderedComments[i] = commentsCollection[i][key];
			}
			return OrderedComments;
		} else{
			return <noscript/>
		}
	}
	sortAnswers(list){
		var sorted = []
		let returnArray = [];
		for (var i in this.props.responses[this.props.index]){
				sorted.push([i, this.props.responses[this.props.index][i].count ]);
		}
		sorted.sort((a,b)=>b[1] - a[1])

		_.forEach(sorted,(val,key2)=>{
				for(var i = 0; i < list.length;i++){
					if(list[i].key === sorted[key2][0]){
						returnArray.push(list[i]);
						list.splice(i,1);
				}
			}
		})
		returnArray.splice(returnArray.indexOf(undefined),returnArray.length);
		console.log('before the return',[...returnArray,...list])
		return [...returnArray,...list]
	}
	renderComponents(){
		let list = [];
		 _.forEach(this.props.answers,(value,key)=>{
		 let lineCount = value.split(/\r\n|\r|\n/).length;
		 	if(lineCount >= 6){
		 		//push item with a show more button else dont include the button
		 		list.push(
		 			<Paper style={{height:'205px',width:'auto',margin:'20px',padding:'5px'}} key={key} zDepth={1} >
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
		 				<AlgorithmVote indexValue={this.props.index} keyValue={key} />
			 			<iconButton style={{position: 'absolute',right:'0px',top:'0px'}} className='forumButton' onClick={()=>this.handleCommentOpen(key)}> <Forum /> </iconButton>
		 			</div>
		 			<div id={`${key}`} style={{display: 'none',visibility: 'hidden'}}>
		 			<br/>
		 				<button className='showContent' onClick={this.handleShowForm.bind(this)}>Reply</button>
							 <AlgorithmComment name={key} send={this.sendComment.bind(this)} />
		 				{this.renderComments(key)}
		 			</div>
		 		</Paper>
		 		)
		 	} else {
		 		list.push(
		 			<Paper style={{overflowY:'hidden',height:'205px',width:'auto',margin:'20px',padding:'5px'}} key={key} zDepth={1} >
		 			<div style={{overflowY:'hidden',overflowX:'auto',alignItems:'center',height:'160px'}}>
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
			 			<AlgorithmVote indexValue={this.props.index} keyValue={key} />
			 			<iconButton style={{position: 'absolute',right:'0px',top:'0px'}} className='forumButton' onClick={()=>this.handleCommentOpen(key)}> <Forum /> </iconButton>
		 			</div>
		 			<div id={`${key}`} style={{visibility: 'hidden'}}>
		 				<button className='showContent' onClick={this.handleShowForm.bind(this)}>Reply</button>
		 					<AlgorithmComment name={key} send={this.sendComment.bind(this)} />
		 				{this.renderComments(key)}
		 			</div>
		 		</Paper>
		 		)
		 	}
		})
		 var m = this.sortAnswers(list)
		 console.log('this is the sorted list returned',m)
		 return m
	}

	render(){
		if(this.props.show){
			return(
				<div style={{marginTop:'100px'}}>
				<div style={{textAlign:'center',color:'black'}}><h1 className='fontanswers'>Other Answers</h1></div>
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