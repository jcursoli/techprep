import React, {Component} from 'react';
import {connect} from 'react-redux';
import brace from 'brace';
import AceEditor from 'react-ace';
import Divider from 'material-ui/Divider';
import AlgorithmDialog from './algorithmDialog';
import * as actions from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import UserAnswers from './userAnswers';

import 'brace/mode/javascript';

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
		overflowY: 'scroll',
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
	root: {
  	height: 'auto',
  },
}

class Algorithms extends Component {

	constructor(props){
	super(props);
	this.state = {
		editorContents: `${this.props.problem.startingCode || 'function someFunction(){\n}'}`,
		language: 'javascript',
		output: `output:`,
		answered:false
		};
		this.editorChanged = this.editorChanged.bind(this);
		this.createFunction = this.createFunction.bind(this);
	}
	componentWillMount(){
		if(this.props.problem.userAnswers && this.props.problem.userAnswers.hasOwnProperty(this.props.currentUser)){
			this.setState({answered: true, editorContents:this.props.problem.userAnswers[this.props.currentUser]})
		}
	}
	componentWillReceiveProps(newProps){
		if(newProps.problem.userAnswers && newProps.problem.userAnswers.hasOwnProperty(this.props.currentUser)){
			this.setState({answered: true, editorContents: newProps.problem.userAnswers[this.props.currentUser]})
		}
	}
	editorChanged(editorContents){
		this.setState({ editorContents: `${editorContents}` });
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
		this.setState({output:`${this.state.output}${err.toString()}`})
		correctness = false;
		}
		return correctness;
	}
	createFunction(){
		// reset output
		var userFunction;
		var output;
		var infiniteHandler = '(function detect(){if(aUniqueKey123 >= 10000){throw "iteration overload process canceled";}aUniqueKey123++;})();'
		var newHandledFunction = [];
		try{
			for(var i = 0; i < this.state.editorContents.length;i++){
					if(this.state.editorContents[i] === '{'){
						newHandledFunction.push(this.state.editorContents[i]);
						newHandledFunction.push(infiniteHandler);
					}else{
						newHandledFunction.push(this.state.editorContents[i]);
					}
			}
			var newHandledFunction = newHandledFunction.join('');
			var index = newHandledFunction.indexOf('{');
			var lastIndex = newHandledFunction.lastIndexOf('}');
			var paramsFirstIndex = newHandledFunction.indexOf('(')+1;
			var paramsLastIndex = newHandledFunction.indexOf(')');
			var params = newHandledFunction.substring(paramsFirstIndex, paramsLastIndex).split(',');
			var functionBody = newHandledFunction.substring(index+1,lastIndex);
			functionBody = 'var aUniqueKey123 = 0;' + functionBody;
			userFunction = new Function(...params ,functionBody);
		}
		catch(err){
			this.setState({output:`\n${err.toString()}\n`});
		}
		if(userFunction){
				 var correctness = this.testCode(userFunction);
				this.props.openDialog(correctness);
				if(correctness){
					this.props.updateAlgorithmAnswers(`${this.state.editorContents}`,this.props.index,this.props.currentUser);
				}
		} else {
			this.props.openDialog(false);
		}
	}

	render(){
		return (
			<div className='newBackground'>
				<div className='newBackground' style={style.root}>
					<div className='runButton'>
						<div  style={{color:'black', margin:'20px', textAlign:'left', width:'50%'}}>
							<h1 style={{textAlign:'center'}}>{this.props.problem.name}</h1>
							<Divider />
							<br />
							<h3>{`${this.props.problem.description}`}</h3>
							<br />
							<h3><strong style={{fontWeight:'900'}}>Example : </strong>{`Input = ${this.props.problem.tests[0][0]} output = ${this.props.problem.tests[0][1]}`}</h3>
							<br />
							<h3><strong style={{fontWeight:'900'}}>Example : </strong>{`Input = ${this.props.problem.tests[1][0]} output = ${this.props.problem.tests[1][1]}`}</h3>
						</div>
						<AlgorithmDialog />
							<div style={style.compiler}>
								<div style={style.output}>{`${this.state.output}`}</div>
								<div style={style.editor}>
									<AceEditor
										theme='tomorrow'
										height={'300px'}
										fontSize={10}
										value={`${this.state.editorContents}`}
									  mode="javascript"
									  onChange={this.editorChanged}
									  name="ACE_EDITOR"
									  editorProps={{$blockScrolling: true}}
									  enableBasicAutocompletion={true}
					   				enableLiveAutocompletion={true}
									/>
								</div>
							</div>
							<RaisedButton style={{margin:'20px'}} onClick={this.createFunction} label="Run" backgroundColor='#e84a4a' />
					</div>
					<div style={{margin:'20px', alignItems:'center'}}>
						<UserAnswers show={this.state.answered} answers={this.props.problem.userAnswers} index={this.props.index} />
					</div>
				</div>
			</div>
		)
	}
}
function mapStateToProps(state){
	return {
		algorithm:state.algorithms,
		problem: state.currentAlgorithm.algorithm,
		index: state.currentAlgorithm.index,
		currentUser: state.user.displayName
	}
}
export default connect(mapStateToProps, actions)(Algorithms);