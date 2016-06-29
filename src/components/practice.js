import React, {Component} from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


	const contents = [{title: 'HTML', pic:'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
										{title: 'CSS', pic:'http://w3widgets.com/responsive-slider/img/css3.png'},
										{title: 'Javascript', pic: 'https://www.voice-group.co.uk/wp-content/uploads/voice_group_web-languages-logos-javascript.png'},
										{title: 'Study', pic: 'https://cdn0.iconfinder.com/data/icons/thin-science-space/24/thin-1037_brain_thinking_mind_knowledge-512.png'}];

const style = {
  root: {
  	height: 500,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 35,
    marginLeft:25,
    marginRight:25,
    overflowY: 'auto',
  },
  gridList: {
    height: 500,
    overflowY: 'auto',
  },
  GridTile:{

  },
  title:{

  }
};


export default class Practice extends Component {
	constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
		handleClick(categoryClicked){
    this.props.currentCategory(categoryClicked.title);
    browserHistory.push('/questions');
	}
	renderElements(category){
		return (
			<div key={category.title} onTouchTap={()=>{this.handleClick(category)}} style={style.GridTile} className="col-lg-2 col-md-3 col-xs-12 col-sm-4">
				<div style={style.img}>
       	 <div height='200'width='200'>
        	<img  height='200' src={category.pic}/>
       	</div>
       </div>
     </div>
		);
	}
	render(){
		return(
			<div>
				<div className="row center-xs" style={style.root}>
						{contents.map(this.renderElements.bind(this))}
				</div>
			</div>
		)
	}

}

export default connect(null, actions)(Practice);