import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class AlgorithmList extends Component {

  constructor(props) {
    super(props);
    this.state = {algorithms:[{id:12,title:'1', difficulty:'hard',attempts:'12'},{ id:22,title:'1', difficulty:'hard',attempts:'10'},{ id:52,title:'1', difficulty:'hard',attempts:'6'}]};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(item){
  	console.log('this is the item clicked',item);
  }
  renderListItems(){
  	return this.state.algorithms.map((item)=>(
  		<TableRow onTouchTap={()=>(this.handleClick(item.id))}>/
  		  <TableHeaderColumn style={{width: '78%'}}>{item.title}</TableHeaderColumn>
  		  <TableHeaderColumn style={{width: '11%'}}>{item.attempts}</TableHeaderColumn>
  		  <TableHeaderColumn style={{width: '11%'}}>{item.difficulty}</TableHeaderColumn>
  		</TableRow>
  	))
  }

  render() {
    return (
      <div>
        <div>
          <Table
            height={'100%'}
            fixedHeader={false}
            fixedFooter={false}
            selectable={true}
            multiSelectable={false}
            displayRowCheckbox={false}
          >
            <TableHeader 
            displaySelectAll={false}
            displayRowCheckbox={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
            >
              <TableRow>
                <TableHeaderColumn colSpan="3" tooltip="Algorithms" style={{textAlign: 'center'}}>
                  Algorithms
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn style={{width: '78%'}}>Problem</TableHeaderColumn>
                <TableHeaderColumn style={{width: '11%'}}>Attempts</TableHeaderColumn>
                <TableHeaderColumn style={{width: '11%'}}>Difficulty</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              deselectOnClickaway={true}
              showRowHover={true}
              stripedRows={true}
              displayRowCheckbox={false}
          	  >  
           		{this.renderListItems()}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}