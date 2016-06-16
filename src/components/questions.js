import React, { Component } from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const tableData = [
  {
    question: 'Explain javascript closures.',
    acceptance: '27.2%',
    difficulty: 'Easy',
    answer: 'Closures are like "snapshots" of all the variables that are within a function\'s scope. Since functions can be passed around like regular variables in JavaScript, closures ensure that functions can execute properly as they are passed around from one scope to another. Textbook way to create a closure is to have a function that returns another function. Closures also provide a way to create "private" variables... variables that are accessible by the returned function (through its closure) but not by external code.'
  },
  {
    question: 'Explain event bubbling.',
    acceptance: '27.2%',
    difficulty: 'Easy',
    answer: 'Event bubbling has to do with how events are propagated through elements in the DOM. When you click on an element (an <li> for example), that element will receive the event and then, unless you explicitly stop propagation, the event will "bubble up" to its parent element (the <ul>) and then up to that element\'s parent and so on. There is actually also a capture phase for events that occurs before bubbling, where the parent elements (starting with top level elements like document, body, etc.) will be notified and then the event will "capture down" to the correct child elements, all the way down to the event\'s target element. If you are using jQuery, the jQuery API does not provide a way to attach event listeners to the capture phase, but you can using vanilla JavaScript.'
  },
  {
    question: 'Explain event delegation.',
    acceptance: '27.2%',
    difficulty: 'Easy',
    answer: 'Event delegation is a strategy where you attach your event handlers to a parent element rather than on multiple child elements. Classic example would be a list (<ul> or <ol>) with multiple <li> children. If you want to attach some behavior for when the user clicks an <li>, you could attach an event handler to each <li> specifically, or you could simply attach one event listener to the parent <ul> and determine which child element was clicked by inspecting the event object itself when it bubbles up. This can simplify things quite a bit, especially when <li> elements are going to be added and removed dynamically. It can be a hassle to manually attach and remove all those individual handlers.'
  },
  {
    question: 'What does apply() do?',
    acceptance: '27.2%',
    difficulty: 'Easy',
    answer: 'Apply() is a method on functions that you can call that will execute the function using the provided context (the value of "this" within the function) and the provided arguments (provided as an array). This can be useful when you need to override the value of "this" when executing a callback. There is a related method called call() that is identical except you provide the function arguments not as an array but as comma separated parameters (just like a regular function call). Apply() can also be useful when you are working with the arguments pseudo-array (especially when doing currying).'
  },
  {
    question: 'What does bind() do?',
    acceptance: '27.2%',
    difficulty: 'Medium',
    answer: 'Bind() is another method provided on all functions. Calling bind() will return a new function that, when executed ,will in turn execute the original function with the value of "this" set to whatever you passed in to the bind() call. It also prevents the value of "this" from ever being overridden by any subsequent call() or apply() calls on that function. It can be useful when you want to attach event listeners to DOM events but you want to ensure the proper value of "this" when those listeners fire.'
  },
  {
    question: 'Explain what the js map function does and provide an example.',
    acceptance: '27.2%',
    difficulty: 'Medium',
    answer: 'Map() is an Array function that will execute logic on each element in an array and return a new array with the modified values. Simple example would be, say you have an array of measurements that are in feet, but you need an array of inches. You could manually write a for loop to go through the original array and populate the converted values in a new array, but it is more concise and functional to use map() to do that for you.'
  },
  {
    question: 'What is strict mode?',
    acceptance: '27.2%',
    difficulty: 'Medium',
    answer: 'Strict mode adds some additional restrictions to your JS code to prevent some common errors. When you use strict mode, you cannot use implicitly declared variables (which would leak to global scope), assign a values to read-only properties, or add properties to objects that are not extensible.'
  },
  {
    question: 'What\'s the difference between a promise and a callback?',
    acceptance: '27.2%',
    difficulty: 'Medium',
    answer: 'A callback is a function you provide as an argument to another function. When that function has finished doing whatever its doing, it will execute your callback and thus notify your calling code that the operation is complete. Promises are actual JavaScript objects with some built-in event handling that you can pass around from one function to another, and it represents the "promise" of work that will be done. So instead of passing in a callback, a function will return this promise to you. You attach listeners to a promise that will be executed when the promise is either resolved (success!) or rejected (error :(). Promises give you a lot more flexibility when working w/ async processes in particular. They are not built-in to JavaScript, however, you need to use a third party library like q. jQuery provides its own implementation of deferreds but they do not properly follow the promise specification.'
  },
  {
    question: 'What is $scope?',
    acceptance: '27.2%',
    difficulty: 'Hard',
    answer: 'A scope represents the current Angular "context" that a directive, controller, or template is executing within. When something attempts to access a variable or method, Angular will look at the current scope to locate it. If not found, it will look to the scope\'s parent and so on.'
  },
  {
    question: 'What is a directive?',
    acceptance: '27.2%',
    difficulty: 'Hard',
    answer: 'A directive is the name for Angular\'s reusable components... a combination of HTML and JS that will execute together.'
  },
  {
    question: 'What is the digest cycle?',
    acceptance: '27.2%',
    difficulty: 'Hard',
    answer: 'The digest cycle is how Angular tracks changes and performs its updates. It basically iterates through all the watchers on a scope and sees if anything has changed. If anything has changed, watchers are notified and the digest cycle will execute again (up to a maximum of 10 times I think). This is because one change can tr'
  },
  {
    question: 'What is $scope.$apply?',
    acceptance: '27.2%',
    difficulty: 'Hard',
    answer: '$scope.$apply is used to change $scope values and then trigger a digest cycle. This is because changes that occur outside of an Angular context (i.e., from DOM events wired up in the link function, etc.) do not automatically trigger a $digest cycle. Wrapping your change in a $scope.$apply block tells Angular to run a digest cycle after making the changes and also provides some error handling.'
  },
  {
    question: 'What are the most commonly used out-of-the-box directives?',
    acceptance: '27.2%',
    difficulty: 'Hard',
    answer: 'The most commonly used out-of-the-box directives are ngIf, ngHide, ngShow, ngRepeat, ngClick, ngClass, ngModel.'
  },
  {
    question: 'What does transclude do on directives?',
    acceptance: '27.2%',
    difficulty: 'Hard',
    answer: 'Transclude lets you write a directive the wraps arbitrary content. Textbook example is a modal directive. You want to write your modal directive so that the consumer can specify the actual content that goes inside the modal. Behind the scenes, Angular creates a transcluded scope that does not follow the typical scope inheritance chain for the directive itself, and then creates a new child scope for the transcluded contents that DOES inherit from the initial scope (so basically, inheritance "skips over" the transcluded directive\'s scope). I think that\'s right anyway.... transclusion is a bit tricky coneptually, and I\'ve seen it explained several different ways.'
  },
  {
    question: 'Why use a q promise as opposed to just returning $http’s promise?',
    acceptance: '27.2%',
    difficulty: 'Hard',
    answer: 'Good question, not sure? Does it just provide a level of separation so your code has more control over promise resolution/rejection?'
  },
  {
    question: 'What does $resource do?',
    acceptance: '27.2%',
    difficulty: 'Hard',
    answer: '$resource is a REST wrapper for $http that simplifies the boilerplate code needed to interact with web services (provided they adhere to REST). Personally I love it, but there are times when it\'s not feasible to use it (i.e., you don\'t control the API you\'re hitting and its not RESTful... although you could always stand up a Node/Express proxy in that case.'
  }
];

export default class Questions extends Component  {

  constructor(props) {

    super(props);
    this.state = {
      fixedHeader: true,
      fixedFooter: false,
      stripedRows: true,
      showRowHover: true,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '450px',
      open: false,
      question: '',
      answer: '',
      showAnswer: false,
      selectedRow: null
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({open: false});
  };
  
  showAnswer() {
    document.getElementById("answer").style.visibility = 'visible';
    //this.setState({showAnswer: true})
  }
  
  render() {
     
     const actions = [
        <FlatButton
          label="Close"
          primary={true}
          onTouchTap={this.handleClose}
        />,
        <FlatButton
          label="Show Answer"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.showAnswer}
        />,
      ];

    return (
      <div>
        <div>
          <Dialog
            title={this.state.question}
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <div id="answer"> {this.state.answer} </div>
            
          </Dialog>
        </div>

        <div>
          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}
          >
            <TableHeader
              displaySelectAll={this.state.showCheckboxes}
              adjustForCheckbox={this.state.showCheckboxes}
              enableSelectAll={this.state.enableSelectAll}
            >
              <TableRow>
                <TableHeaderColumn colSpan="3" tooltip="Toy Problems" style={{textAlign: 'center'}}>
                  Toy Problems
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn class="col-xs-1" style={{width: '78%'}} tooltip="Question">Question</TableHeaderColumn>
                <TableHeaderColumn class="col-xs-1" style={{width: '11%'}} tooltip="Acceptance">Acceptance</TableHeaderColumn>
                <TableHeaderColumn class="col-xs-10" style={{width: '11%'}} tooltip="Difficulty">Difficulty</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}
            >
              {tableData.map((row, index) => {
                
                const handleOpen = () => {
                  this.setState({open: true, question: tableData[index]['question'], answer: tableData[index]['answer']});
                };

                return (
                  <TableRow key={index}>
                    <TableRowColumn style={{width: '80%'}} onTouchTap={handleOpen}>{row.question}</TableRowColumn>
                    <TableRowColumn style={{width: '10%'}} onTouchTap={handleOpen}>{row.acceptance}</TableRowColumn>
                    <TableRowColumn style={{width: '10%'}} onTouchTap={handleOpen}>{row.difficulty}</TableRowColumn>
                  </TableRow>)
                })}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

