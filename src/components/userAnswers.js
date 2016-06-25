import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Prism from 'prismjs';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import _ from 'lodash';

const style = {
	width:'90%',
	alignItems: 'center',
	height:'200px',
  margin: '30px',
	overflowY:'hidden',
	overflowX:'hidden'
};

export default class UserAnswers extends Component {

	constructor(props){
	super(props);
	this.state = {};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event){
		if(event.target.parentElement.firstChild.style.overflowY === 'visible'){
			event.target.parentElement.firstChild.style.height = '200px';
			event.target.parentElement.firstChild.style.overflowY = 'hidden'
		} else{
			event.target.parentElement.firstChild.style.overflowY = 'visible'
			event.target.parentElement.firstChild.style.height = 'auto';
		}
	}
	renderComponents(){
		var list = [];
		 _.forEach(this.props.answers,(value,key)=>{
		 var lineCount = value.split(/\r\n|\r|\n/).length;
		 	if(lineCount >= 6){
		 		list.push(
		 			<Paper style={{width:'90%', overflowY:'hidden',margin:'30px'}} key={key} zDepth={1} >
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
		 			<button style={{margin:'5px'}} onClick={this.handleClick}>Show more</button>
		 		</Paper>
		 		)
		 	} else {
		 		list.push(
		 			<Paper style={{width:'90%',margin:'30px'}} key={key} zDepth={1} >
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