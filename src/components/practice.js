import React, {Component} from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


	const contents = [{title: 'HTML', pic:'https://firebasestorage.googleapis.com/v0/b/mks38thesis.appspot.com/o/Categories%2FHTML5.png?alt=media&token=66a33b3e-e7c4-4765-8b2c-46343091a3d3'},
										{title: 'CSS', pic:'https://firebasestorage.googleapis.com/v0/b/mks38thesis.appspot.com/o/Categories%2FCSS.png?alt=media&token=d6aa3c12-fcdf-44c9-8e99-da741dfa195f'},
										{title: 'Javascript', pic: 'https://firebasestorage.googleapis.com/v0/b/mks38thesis.appspot.com/o/Categories%2FJS.png?alt=media&token=4c3f0327-e658-41c8-8346-8b1cb81509e5'},
										{title: 'Study', pic: 'https://firebasestorage.googleapis.com/v0/b/mks38thesis.appspot.com/o/Categories%2Fstudy.png?alt=media&token=0f7b00a6-03e0-4ace-95fb-1a67701ad909'}];

const style = {
  root: {
  	height: 'auto',
    minHeight:'500px',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 35,
    marginLeft:25,
    marginRight:25,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  gridList: {

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
       	 <div className='hover01' height='200'width='200'>
        	<figure><img height='200' src={category.pic}/></figure>
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