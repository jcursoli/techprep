import React, {Component} from 'react';
import * as actions from '../actions';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


	const contents = [ {title: '<html/>', pic:'http://ademocut.com/wp-content/uploads/2015/02/HTML.jpg'},
										{title: 'CSS', pic:'http://thecybertramp.com/blog/wp-content/uploads/2011/08/rainbow.jpg'},
										{title: 'Javascript', pic: 'http://linpossible.com/img/skills/javascript_logo.png'} ];

const style = {
  root: {
  	width: 500,
  	height: 500,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 35,
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
    marginTop: 35,
  },
};

export default class Practice extends Component {
	constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
		handleClick(categoryClicked){
		console.log('handleClick clicked now',categoryClicked.title);
	}
	renderElements(category){
		return (
			     <GridTile
			     	 onTouchTap={()=>{this.handleClick(category)}}
			     	 style={style.GridTile}
			       key={category.title}
			       title={category.title}
			       subtitle={<span>by <b>{category.title}</b></span>}
			       actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
			     	>
			       <img height='100%'width='100%' src={category.pic} />
			     </GridTile>
		);
	}
	render(){
		return(
			<div>
				<div style={style.root}>
					<GridList>
						{contents.map(this.renderElements.bind(this))}
					</GridList>
				</div>
			</div>
		)
	}

}