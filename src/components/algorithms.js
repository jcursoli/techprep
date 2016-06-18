import React, {Component} from 'react';
import {connect} from 'react-redux';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/mode/java';
import 'brace/mode/python';
import 'brace/mode/ruby';

import 'brace/theme/tomorrow';
import 'brace/ext/language_tools';


const style = {
	output:{
		width:'200px',
		height: '308px',
		marginTop:'25px',
		marginBottom:'20px',
		border:' 4px solid #EEEFF2',
		background:'black',
		color:'white', 
		display:'inline',
	},
	compiler:{
		display: 'flex',
		alignItems: 'center',
		marginLeft:'200px'
	},
	button:{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '50px', 
		height: '40%',
		margin: '20px', 
		padding: '4px',
		margin:' 20px',
	},
	editor:{
		height: '308px',
		marginTop:'25px',
		marginBottom:'20px',
		border:' 4px solid #EEEFF2',
		alignItems: 'center',
	}
}


class Algorithms extends Component {

	constructor(props){
	super(props);
	this.state = {
		editorContents: 'function toyProblem(a,b){ \n //enter code here \n }',
		language: 'javascript',
		output: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
		};
		this.editorChanged = this.editorChanged.bind(this);
		this.runCode = this.runCode.bind(this);
	}
	editorChanged(editorContents){
		this.setState({ editorContents })
	}
	runCode(){
		//new Function ([arg1[, arg2[, ...argN]],] functionBody)
		var userFunction;
		var output;
		var index = this.state.editorContents.indexOf('{');
		var lastIndex = this.state.editorContents.lastIndexOf('}');
		var paramsFirstIndex = this.state.editorContents.indexOf('(')+1;
		var paramsLastIndex = this.state.editorContents.indexOf(')');
		var params = this.state.editorContents.substring(paramsFirstIndex, paramsLastIndex).split(',');
		var functionBody = this.state.editorContents.substring(index+1,lastIndex);
		try{
			this.setState({output:''});
				userFunction = new Function(...params ,functionBody);
		}
		catch(err){
			console.log(err);
			this.setState({output:err});
		}
		if(userFunction){
			try{
				output = userFunction();
				this.setState({output})
			}
			catch(err){
				this.setState({output:err.toString()})
			}

		}
	}

	render(){

		return (
			<div className='newBackground' style={{overflow: 'scroll'}}>
				<div>
					<div  style={{color:'black', margin:'20px'}}>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					</div>
						<div style={style.compiler}>
							<div style={style.output}>{this.state.output}</div>
							<div style={style.editor}>
								<AceEditor
									theme='tomorrow'
									height={'300px'}
									fontSize={10}
									value={this.state.editorContents}
								  mode="javascript"
								  onChange={this.editorChanged}
								  name="ACE_EDITOR"
								  editorProps={{$blockScrolling: true}}
								  enableBasicAutocompletion={true}
				   				enableLiveAutocompletion={true}
								/>
							</div>
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