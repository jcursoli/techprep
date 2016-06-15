import React, {Component} from 'react';
import * as actions from '../actions';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


	const contents = [
										{title: '<html/>', pic:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png'},
										{title: 'CSS', pic:'http://wpguru.co.uk/wp-content/uploads/2013/09/CSS-Logo-214x300.png'},
										{title: 'Javascript', pic: 'http://ric.mclaughlin.today/assets/themes/ricify/images/javascript.png'}
										];

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
	renderElements(category){
		console.log(category);
		return (
			     <GridTile
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
						{contents.map(this.renderElements)}
					</GridList>
				</div>
			</div>
		)
	}

}