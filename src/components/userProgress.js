import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import LinearProgress from 'material-ui/LinearProgress';

		const styles = {
     tabs: {
       color: '#151515',
       background: 'rgba(0, 0, 0, 0)',
     },
     headline: {
       fontWeight: 400,
       color: '#151515',
       background: 'rgba(0, 0, 0, 0)',
     },
     table:{
       border:' 2px solid #EEEFF2',
        background: 'rgba(0, 0, 0, 0)',
        width:'85%',
        display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
     },
     background:{
       height:'90%',
       opacity: .8,
     }
   };

 class ProgressTable extends Component {
 	render(){
 		console.log('rendering userprogress')
	return (
 		<div className="box" style={styles.table}>
 		  <Table
 		    selectable={false}
 		  >
 		      <TableHeader
 		        displaySelectAll={false}
 		        adjustForCheckbox={false}
 		        style={styles.table}
 		      >
 		        <TableRow>
 		          <TableHeaderColumn width={'25%'}>Category</TableHeaderColumn>
 		          <TableHeaderColumn width={'50%'}>Progress</TableHeaderColumn>
 		          <TableHeaderColumn>%</TableHeaderColumn>
 		        </TableRow>
 		      </TableHeader>
 		      <TableBody
 		        displayRowCheckbox={false}
 		      >
 		        <TableRow style={styles.table}>
 		          <TableRowColumn width={'25%'}>HTML</TableRowColumn>
 		          <TableRowColumn width={'50%'}><LinearProgress mode="determinate" value={100} /></TableRowColumn>
 		          <TableRowColumn width={'25%'}>44%</TableRowColumn>
 		        </TableRow>
 		        <TableRow style={styles.table}>
 		          <TableRowColumn width={'25%'}>CSS</TableRowColumn>
 		          <TableRowColumn width={'50%'}><LinearProgress mode="determinate" color="red" value={57} /></TableRowColumn>
 		          <TableRowColumn width={'25%'}>57%</TableRowColumn>
 		        </TableRow>
 		        <TableRow style={styles.table}>
 		          <TableRowColumn width={'25%'}>JavaScript</TableRowColumn>
 		          <TableRowColumn width={'50%'}><LinearProgress mode="determinate" color="green" value={83} /></TableRowColumn>
 		          <TableRowColumn width={'25%'}>83%</TableRowColumn>
 		        </TableRow>
 		      </TableBody>
 		    </Table>
 		</div>
 		);
 	}
 }
function mapStateToProps(state){
	return {}
}

export default connect(mapStateToProps)(ProgressTable);
