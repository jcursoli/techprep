import React, { Component } from 'react';

 class AlgorithmComment extends Component{
	constructor(props){
		super(props);
		this.state = {comment:''};

	}
	handleInputChange(e){
		this.setState({comment:e.target.value})
	}
	render(){
		return(
			<button 
			className='sendButton' 
			onClick={this.props.sendComment(this.props.key)} 
			style={{margin:'5px'}}
			>
			send
			</button>
			<input 
			className='sendInput' 
			onChange={this.handleInputChange} 
			value={this.state.comment} style={{margin:'5px'}}
			>
			</input>
		)
	}
}
export default AlgorithmComment;