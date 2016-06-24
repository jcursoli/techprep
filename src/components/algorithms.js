import React, {Component} from 'react';
import {connect} from 'react-redux';
import brace from 'brace';
import AceEditor from 'react-ace';
import AlgorithmDialog from './algorithmDialog';
import * as actions from '../actions';
import RaisedButton from 'material-ui/RaisedButton';

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
		border:' 4px solid #EEEFF2',
		background:'black',
		color:'white',
		display:'inline',
		overflow: 'scroll',
	},
	compiler:{
		display: 'flex',
		alignItems: 'center',
	},
	editor:{
		height: '308px',
		marginTop:'25px',
		border:' 4px solid #EEEFF2',
	},
}

class Algorithms extends Component {

	constructor(props){
	super(props);
	this.state = {
		editorContents: this.props.problem.startingCode,
		language: 'javascript',
		output: ''
		};
		this.editorChanged = this.editorChanged.bind(this);
		this.createFunction = this.createFunction.bind(this);
	}
	editorChanged(editorContents){
		this.setState({ editorContents });
	}
	testCode(userFunction){
		var correctness = true;
		var test = this.props.problem.tests;
		try{
			for(var i = 0; i < test.length;i++){
				if(userFunction(test[i][0]) !== test[i][1]){
					correctness = false;
				}
			}
	} catch(err){
		this.setState({output:`${this.state.output}\n${err.toString()}`})
		correctness = false;
		}
		return correctness;
	}
	createFunction(){
		// reset output
		this.setState({output:''});
		var userFunction;
		var output;
		try{
			var index = this.state.editorContents.indexOf('{');
			var lastIndex = this.state.editorContents.lastIndexOf('}');
			var paramsFirstIndex = this.state.editorContents.indexOf('(')+1;
			var paramsLastIndex = this.state.editorContents.indexOf(')');
			var params = this.state.editorContents.substring(paramsFirstIndex, paramsLastIndex).split(',');
			var functionBody = this.state.editorContents.substring(index+1,lastIndex);
			userFunction = new Function(...params ,functionBody);
		}
		catch(err){
			this.setState({output:err.toString()});
		}
		if(userFunction){
				 var correctness = this.testCode(userFunction);
				this.props.openDialog(correctness);
		} else {
			this.props.openDialog(false);
		}
	}

	render(){
		return (
			<div className='newBackground' style={{overFlow: 'scroll'}}>
				<div>
				</div>
				<div className='runButton'>
					<div  style={{color:'black', margin:'20px', textAlign:'center'}}>
						<h1>{this.props.problem.name}</h1>
						<br />
						<h2>{this.props.problem.description}</h2>
					</div>
					<AlgorithmDialog />
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
						<RaisedButton style={{margin:'20px'}} onClick={this.createFunction} label="Run" backgroundColor='#A80000' />
				</div>
			</div>
		)
	}
}
function mapStateToProps(state){
	return {problem: state.currentAlgorithm.algorithm, index: state.currentAlgorithm.index }
}
export default connect(mapStateToProps, actions)(Algorithms);