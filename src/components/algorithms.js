import React, {Component} from 'react';
import {connect} from 'react-redux';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/mode/java';
import 'brace/mode/python';
import 'brace/mode/ruby';


const style = {
	button:{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100px', 
		height: '30px',
		margin: '20px', 
		padding: '4px',
		margin:' 20px',
	},
	editor:{
		height: '300px',
    display: 'flex',
		flexDirection: 'column',
		marginTop:'25px',
		alignItems: 'center',
		marginBottom:'20px',
		border:' 4px solid #EEEFF2',
	}
}


class Algorithms extends Component {

	constructor(props){
	super(props);
	this.state = {
		editorContents: 'function toyProblem(a,b){ \n //enter code here \n }',
		language: 'javascript'
		};
		this.editorChanged = this.editorChanged.bind(this);
		this.runCode = this.runCode.bind(this);
	}
	editorChanged(editorContents){
		this.setState({ editorContents })
	}
	runCode(){
		console.log('this is the editor contents',this.state.editorContents)
	}

	render(){

		return (
			<div className='newBackground' style={{overflow: 'scroll'}}>
				<div>
					<div  style={{color:'black', margin:'20px'}}>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					</div>
						<div style={style.editor}>
							<AceEditor
								fontSize={10}
								value={this.state.editorContents}
							  mode="javascript"
							  theme="github"
							  onChange={this.editorChanged}
							  name="ACE_EDITOR"
							  editorProps={{$blockScrolling: true}}
							/>
						</div>
						<button onClick={this.runCode} style={style.button}>Run</button>
				</div>
			</div>
		)
	}
}
function mapStateToProps(state){
	return {}
}
export default connect(mapStateToProps)(Algorithms);