import React, { Component } from 'react';

 class AlgorithmComment extends Component{
	constructor(props){
		super(props);
		this.state = {comment:''};

	}
	handleInputChange(e){
		this.setState({comment:e.target.value})
	}
	sendComment(){
		this.props.send(this.props.name,this.state.comment);
		this.setState({comment:''})
	}
	render(){
		return(
			<div className='commentSubmit' style={{margin:'5px', display: 'none',visibility: 'hidden'}}>
				<button 
				className='sendButton' 
				onClick={this.sendComment.bind(this)} 
				style={{margin:'5px'}}
				>
				send
				</button>
				<input 
				className='sendInput' 
				onChange={this.handleInputChange.bind(this)} 
				value={this.state.comment} style={{margin:'5px'}}
				>
				</input>
			</div>
		)
	}
}
export default AlgorithmComment;