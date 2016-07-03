import React, {Component} from 'react';
import {connect} from 'react-redux';
import UpArrow from 'material-ui/svg-icons/navigation/arrow-upward';
import DownArrow from 'material-ui/svg-icons/navigation/arrow-downward';
import * as actions from '../actions';

class AlgorithmVote extends Component {
		renderVote(key){
	if(!this.props.responses[this.props.indexValue]){
			return '0';
		}
	else if(!this.props.responses[this.props.indexValue][key]){
			return '0';
		}
	else if(this.props.responses[this.props.indexValue][key].count){
			return this.props.responses[this.props.indexValue][key].count.toString();
		}else{
			return '0'
		}
	}
	handleUpvote(userName){
		var vote = {author:userName,value:1, dif: 1};
		if(!this.props.responses.hasOwnProperty([this.props.indexValue])){
			this.props.userAlgorithmVote(this.props.indexValue,vote);
		}
		else if(!this.props.responses[this.props.indexValue].hasOwnProperty([userName])){
			this.props.userAlgorithmVote(this.props.indexValue,vote);
		}
		else if(!this.props.responses[this.props.indexValue][userName].votes){
			this.props.userAlgorithmVote(this.props.indexValue,vote);
		}
		else if(this.props.responses[this.props.indexValue][userName].votes[this.props.currentUser] === -1){
			vote.dif = 2;
			vote.value = 1;
			this.props.userAlgorithmVote(this.props.indexValue,vote);
		}else if(this.props.responses[this.props.indexValue][userName].votes[this.props.currentUser] === 0){
			vote.dif = 1;
			vote.value = 1;
			this.props.userAlgorithmVote(this.props.indexValue,vote);
		}else if(this.props.responses[this.props.indexValue][userName].votes[this.props.currentUser] === 1){
			vote.value = 0;
			vote.dif = -1;
			this.props.userAlgorithmVote(this.props.indexValue,vote);
		} else{
			this.props.userAlgorithmVote(this.props.indexValue,vote);
		}
	}
	handleDownvote(userName){
		var vote = {author:userName,value: -1,dif: -1};
		if(!this.props.responses.hasOwnProperty([this.props.indexValue])){
			this.props.userAlgorithmVote(this.props.indexValue,vote);
		}
		else if(!this.props.responses[this.props.indexValue].hasOwnProperty([userName])){
			this.props.userAlgorithmVote(this.props.indexValue,vote);
		}
		else if(!this.props.responses[this.props.indexValue][userName].votes){
			this.props.userAlgorithmVote(this.props.indexValue,vote);
		}
		else if(this.props.responses[this.props.indexValue][userName].votes[this.props.currentUser] === -1){
			vote.dif = 1;
			vote.value = 0;
			this.props.userAlgorithmVote(this.props.indexValue,vote);
		}else if(this.props.responses[this.props.indexValue][userName].votes[this.props.currentUser] === 0){
			vote.dif = -1;
			vote.value = -1;
			this.props.userAlgorithmVote(this.props.indexValue,vote);
		}else if(this.props.responses[this.props.indexValue][userName].votes[this.props.currentUser] === 1){
			vote.dif = -2;
			vote.value = -1;
			this.props.userAlgorithmVote(this.props.indexValue,vote);
		} else{
			this.props.userAlgorithmVote(this.props.indexValue,vote);
		}
	}

	render(){
		return(
			<div className='algoAnswer'>
				<iconButton className='algorithmVote' onClick={()=>this.handleDownvote(this.props.keyValue)}> <DownArrow /> </iconButton>
				<div>{this.renderVote(this.props.keyValue)}</div>
				<iconButton className='algorithmVote' onClick={()=>this.handleUpvote(this.props.keyValue)}> <UpArrow /> </iconButton>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		responses:state.responses,
		currentUser: state.user.displayName
	 }
}
export default connect(mapStateToProps, actions)(AlgorithmVote);