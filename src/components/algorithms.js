import React, {Component} from 'react';
import {connect} from 'react-redux';
import brace from 'brace';
import AceEditor from 'react-ace';


const style = {
	editor:{
		flex: ''
	}
}


class Algorithms extends Component {

	constructor(props){
	super(props);
	this.state = {
		editorContents: ''

		};
		this.editorChanged = this.editorChanged.bind(this);
	}
	editorChanged(editorContents){
		this.setState({ editorContents })
	}

	render(){

		return (
			<div>
				<AceEditor
					value={this.state.editorContents}
				  mode="javascript"
				  theme="github"
				  onChange={this.editorChanged}
				  name="ACE_EDITOR"
				  editorProps={{$blockScrolling: true}}
				/>
			</div>
		)
	}
}
function mapStateToProps(state){
	return {}
}
export default connect(mapStateToProps)(Algorithms);