import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import * as actions from '../actions';

class AlgorithmList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item, index){
		this.props.clickedAlgorithm(item, index);
  	browserHistory.push('/problem');
  }
  renderListItems(){
  	if(!this.props.algorithms){
  		return <noscript />;
  	}
  	return (this.props.algorithms.map((item, index)=>(
  		<TableRow key={item.name} onTouchTap={()=>(this.handleClick(item, index))}>/
  		  <TableHeaderColumn style={{width: '80%'}}>{item.name}</TableHeaderColumn>
  		  <TableHeaderColumn style={{width: '10%'}}>{item.attempts}</TableHeaderColumn>
  		  <TableHeaderColumn style={{width: '10%'}}>{item.difficulty}</TableHeaderColumn>
  		</TableRow>
  	))
    )
  }
  render() {
    return (
      <div>
        <div>
          <Table
            height={'100%'}
            fixedHeader={true}
            fixedFooter={false}
            selectable={false}
            multiSelectable={false}
          >
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
              enableSelectAll={false}
            >
              <TableRow>
                <TableHeaderColumn
                  colSpan="3"
                  tooltip=""
                  style={{textAlign: 'center'}}
                >
                  Interview Questions
                </TableHeaderColumn>
              </TableRow>
              <TableRow>/
                <TableHeaderColumn style={{width: '80%'}}>Question</TableHeaderColumn>
                <TableHeaderColumn style={{width: '10%'}}>Acceptance</TableHeaderColumn>
                <TableHeaderColumn style={{width: '10%'}}>Difficulty</TableHeaderColumn>
              </TableRow>
            </TableHeader>

            <TableBody
              deselectOnClickaway={true}
              stripedRows={true}
              displayRowCheckbox={false}
              showRowHover={true}
          	  >
           		{this.renderListItems()}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
	return {algorithms: state.algorithms}
}

export default connect(mapStateToProps, actions)(AlgorithmList);



