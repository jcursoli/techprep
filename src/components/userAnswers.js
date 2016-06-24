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
  margin: '20px',
	overflowY:'auto',
	overflowX:'scroll'
};

export default class UserAnswers extends Component {

	renderComponents(){
		console.log('this is the elements in the rendercomponents', this.props.answers)
		var code = `${this.props.code}`
		var js = Prism.highlight(code, Prism.languages.javascript);

		var list = [];
		 _.forEach(this.props.answers,(value,key)=>{
			list.push(
				<Paper key={key} style={style} zDepth={1}>
				<List className='userCommentAvatar'>
					<ListItem 
					leftAvatar={<Avatar src="https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAhBAAAAJDg2N2NlOWU0LTM2MzYtNDJjMS04ZjI5LTE4ZGU1NjgzZmNiMA.jpg" />}
						disabled={true}
						primaryText={key}
					/>
				</List>
					<pre style={{margin:'10px'}} className='no-whitespace-normalization' dangerouslySetInnerHTML={{__html:Prism.highlight(`${value}`, Prism.languages.javascript)}} />
			</Paper>
			)
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