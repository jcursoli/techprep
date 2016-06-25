import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Prism from 'prismjs';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import _ from 'lodash';

const style = {
	alignItems: 'center',
	height:'150px',
  margin: '10px',
  overflowY:'hidden'
};

export default class UserAnswers extends Component {

	handleClick(event){
		if(event.target.parentElement.firstChild.style.overflowY === 'visible'){
			//changes things to hidden
			event.target.parentElement.children[1].firstChild.textContent = 'Show More'
			event.target.parentElement.style.height = '200px';
			event.target.parentElement.firstChild.style.height = '150px';
			event.target.parentElement.firstChild.style.overflowY ='hidden';
			event.target.parentElement.style.overflow = 'hidden';
		} else{
			//changes things to visible
			event.target.parentElement.children[1].firstChild.textContent = 'Show less'
			event.target.parentElement.firstChild.style.overflow = 'visible';
			event.target.parentElement.firstChild.style.height = 'auto';
			event.target.parentElement.style.height = 'auto';
			event.target.parentElement.scrollIntoView();
		}
	}
	renderComponents(){
		var list = [];
		 _.forEach(this.props.answers,(value,key)=>{
		 var lineCount = value.split(/\r\n|\r|\n/).length;
		 	if(lineCount >= 6){
		 		list.push(
		 			<Paper style={{height:'200px',width:'90%',margin:'20px'}} key={key} zDepth={1} >
		 			<div style={style}>
		 				<List className='userCommentAvatar'>
		 					<ListItem 
		 					leftAvatar={<Avatar src="https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAhBAAAAJDg2N2NlOWU0LTM2MzYtNDJjMS04ZjI5LTE4ZGU1NjgzZmNiMA.jpg" />}
		 						disabled={true}
		 						primaryText={key}
		 					/>
		 				</List>
		 				<pre style={{margin:'10px',marginBottom:'10px'}} className='no-whitespace-normalization' dangerouslySetInnerHTML={{__html:Prism.highlight(`${value}`, Prism.languages.javascript)}} />
		 			</div>
		 			<button style={{margin:'5px',bottom:'0px',left:'0px'}} onClick={this.handleClick}>Show more</button>
		 		</Paper>
		 		)
		 	} else {
		 		list.push(
		 			<Paper style={{height:'200px',width:'90%',margin:'20px'}} key={key} zDepth={1} >
		 			<div style={{	alignItems: 'center',height:'200px',margin: '10px',}}>
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