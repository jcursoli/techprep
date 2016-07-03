import firebase from 'firebase';
import { store } from '../index';
import {
  AUTH_USER,
  SIGNOUT_USER,
  INITIALIZE_USER,
  INITIALIZE_FRIENDS,
  INITIALIZE_INVITES,
  INITIALIZE_CHAT,
  INITIALIZE_ALGORITHMS,
  LOAD_QUESTIONS,
  LOAD_COMMENTS,
  REMOVE_FRIEND,
  RESPONSE_INITIALIZE,
  INITIALIZE_STUDY_QUESTIONS
 } from '../actions/actionTypes';
var config = {
  apiKey: "AIzaSyBBBowxlfghEwetZ6tP6On58nQ30kqHT6M",
  authDomain: "mks38thesis.firebaseapp.com",
  databaseURL: "https://mks38thesis.firebaseio.com",
  storageBucket: "mks38thesis.appspot.com",
};

var allComments = {
  "0": [{"comment":"This answer is good",
      "username": "bobby",
      "hasUpvoted": ["doug", "joey", "drew", "rong@rong.com"],
      "hasDownvoted": ["bobby"]},
      {"comment": "This answer is bad",
      "username": "jill",
      "hasUpvoted": ["joey", "doug"],
      "hasDownvoted": ["drew"]},
      {"comment": "This is the coolest thing ever",
      "username": "cocoa",
      "hasUpvoted": ["drew", "doug", "joey"],
      "hasDownvoted": ["bobby"]},
      {"comment": "This answer is bad",
      "username": "jill",
      "hasUpvoted": ["joey", "doug"],
      "hasDownvoted": ["drew"]},
      {"comment": "This is the coolest thing ever",
      "username": "cocoa",
      "hasUpvoted": ["drew", "doug", "joey"],
      "hasDownvoted": ["bobby"]},
      {"comment": "This answer is bad",
      "username": "jill",
      "hasUpvoted": ["joey", "doug"],
      "hasDownvoted": ["drew"]},
      {"comment": "This is the coolest thing ever",
      "username": "cocoa",
      "hasUpvoted": ["drew", "doug", "joey"],
      "hasDownvoted": ["bobby"]},
      {"comment": "This answer is bad",
      "username": "jill",
      "hasUpvoted": ["joey", "doug"],
      "hasDownvoted": ["drew"]},
      {"comment": "This is the coolest thing ever",
      "username": "cocoa",
      "hasUpvoted": ["drew", "doug", "joey"],
      "hasDownvoted": ["bobby"]},
      {"comment": "This answer is bad",
      "username": "jill",
      "hasUpvoted": ["joey", "doug"],
      "hasDownvoted": ["drew"]},
      {"comment": "This is the coolest thing ever",
      "username": "cocoa",
      "hasUpvoted": ["drew", "doug", "joey"],
      "hasDownvoted": ["bobby"]},
    ],
  "1": [{"comment": "",
         "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "2": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "3": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "4": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "5": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "6": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "7": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "8": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "9": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "10": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "11": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "12": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "13": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "14": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "15": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "16": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "17": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "18": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "19": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "20": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "21": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "22": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "23": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "24": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "25": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "26": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "27": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "28": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "29": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "30": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "31": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "32": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "33": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "34": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "35": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "36": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "37": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "38": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "39": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "40": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "41": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "42": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "43": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "44": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "45": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "46": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "47": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "48": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "49": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "50": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "51": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "52": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "53": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
  "54": [{"comment": "",
        "username": "",
        "hasUpvoted": [""],
        "hasDownvoted": [""]
  }],
}
    
var allQuestions = { 
  "0": {  "question": "Explain javascript closures.",
        "acceptance": "27.2%",
        "difficulty": "Easy",
        "answer": "Closures are like 'snapshots' of all the variables that are within a function's scope. Since functions can be passed around like regular variables in JavaScript, closures ensure that functions can execute properly as they are passed around from one scope to another. Textbook way to create a closure is to have a function that returns another function. Closures also provide a way to create 'private' variables... variables that are accessible by the returned function (through its closure) but not by external code.",
        "category" : "javascript",
        "commentsID": 0
  },
  "1": {  "question": "Explain event bubbling.",
        "acceptance": "27.2%",
        "difficulty": "Easy",
        "answer": "Event bubbling has to do with how events are propagated through elements in the DOM. When you click on an element (an <li> for example), that element will receive the event and then, unless you explicitly stop propagation, the event will 'bubble up' to its parent element (the <ul>) and then up to that element's parent and so on. There is actually also a capture phase for events that occurs before bubbling, where the parent elements (starting with top level elements like document, body, etc.) will be notified and then the event will 'capture down' to the correct child elements, all the way down to the event's target element. If you are using jQuery, the jQuery API does not provide a way to attach event listeners to the capture phase, but you can using vanilla JavaScript.",
        "category" : "javascript",
        "commentsID": 1
  },
  "2": {  "question": "Explain event delegation.",
        "acceptance": "27.2%",
        "difficulty": "Easy",
        "answer": "Event delegation is a strategy where you attach your event handlers to a parent element rather than on multiple child elements. Classic example would be a list (<ul> or <ol>) with multiple <li> children. If you want to attach some behavior for when the user clicks an <li>, you could attach an event handler to each <li> specifically, or you could simply attach one event listener to the parent <ul> and determine which child element was clicked by inspecting the event object itself when it bubbles up. This can simplify things quite a bit, especially when <li> elements are going to be added and removed dynamically. It can be a hassle to manually attach and remove all those individual handlers.",
        "category" : "javascript",
        "commentsID": 2
  },
  "3": {  "question": "What does apply() do?",
        "acceptance": "27.2%",
        "difficulty": "Easy",
        "answer": "Apply() is a method on functions that you can call that will execute the function using the provided context (the value of 'this' within the function) and the provided arguments (provided as an array). This can be useful when you need to override the value of 'this' when executing a callback. There is a related method called call() that is identical except you provide the function arguments not as an array but as comma separated parameters (just like a regular function call). Apply() can also be useful when you are working with the arguments pseudo-array (especially when doing currying).",
        "category" : "javascript",
        "commentsID": 3
  },
  "4": {  "question": "What does bind() do?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Bind() is another method provided on all functions. Calling bind() will return a new function that, when executed ,will in turn execute the original function with the value of 'this' set to whatever you passed in to the bind() call. It also prevents the value of 'this' from ever being overridden by any subsequent call() or apply() calls on that function. It can be useful when you want to attach event listeners to DOM events but you want to ensure the proper value of 'this' when those listeners fire.",
        "category" : "javascript",
        "commentsID": 4
  },
  "5": {  "question": "Explain what the js map function does and provide an example.",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Map() is an Array function that will execute logic on each element in an array and return a new array with the modified values. Simple example would be, say you have an array of measurements that are in feet, but you need an array of inches. You could manually write a for loop to go through the original array and populate the converted values in a new array, but it is more concise and functional to use map() to do that for you.",
        "category" : "javascript",
        "commentsID": 5
  },
  "6": {  "question": "What is strict mode?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Strict mode adds some additional restrictions to your JS code to prevent some common errors. When you use strict mode, you cannot use implicitly declared variables (which would leak to global scope), assign a values to read-only properties, or add properties to objects that are not extensible.",
        "category" : "javascript",
        "commentsID": 6
  },
  "7": {  "question": "What\"s the difference between a promise and a callback?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "A callback is a function you provide as an argument to another function. When that function has finished doing whatever its doing, it will execute your callback and thus notify your calling code that the operation is complete. Promises are actual JavaScript objects with some built-in event handling that you can pass around from one function to another, and it represents the 'promise' of work that will be done. So instead of passing in a callback, a function will return this promise to you. You attach listeners to a promise that will be executed when the promise is either resolved (success!) or rejected (error :(). Promises give you a lot more flexibility when working w/ async processes in particular. They are not built-in to JavaScript, however, you need to use a third party library like q. jQuery provides its own implementation of deferreds but they do not properly follow the promise specification.",
        "category" : "javascript",
        "commentsID": 7
  },
  "8": {  "question": "What is $scope?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "A scope represents the current Angular 'context' that a directive, controller, or template is executing within. When something attempts to access a variable or method, Angular will look at the current scope to locate it. If not found, it will look to the scope's parent and so on.",
        "category" : "angular",
        "commentsID": 8
  },
  "9": {  "question": "What is a directive?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "A directive is the name for Angular's reusable components... a combination of HTML and JS that will execute together.",
        "category" : "angular",
        "commentsID": 9
  },
  "10": { "question": "What is the digest cycle?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "The digest cycle is how Angular tracks changes and performs its updates. It basically iterates through all the watchers on a scope and sees if anything has changed. If anything has changed, watchers are notified and the digest cycle will execute again (up to a maximum of 10 times I think). This is because one change can tr",
        "category" : "angular",
        "commentsID": 10
  },
  "11": { "question": "What is $scope.$apply?",

        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "$scope.$apply is used to change $scope values and then trigger a digest cycle. This is because changes that occur outside of an Angular context (i.e., from DOM events wired up in the link function, etc.) do not automatically trigger a $digest cycle. Wrapping your change in a $scope.$apply block tells Angular to run a digest cycle after making the changes and also provides some error handling.",
        "category" : "angular",
        "commentsID": 11
  },
  "12": { "question": "What are the most commonly used out-of-the-box directives?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "The most commonly used out-of-the-box directives are ngIf, ngHide, ngShow, ngRepeat, ngClick, ngClass, ngModel.",
        "category" : "angular",
        "commentsID": 12
  },
  "13": { "question": "What does transclude do on directives?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Transclude lets you write a directive the wraps arbitrary content. Textbook example is a modal directive. You want to write your modal directive so that the consumer can specify the actual content that goes inside the modal. Behind the scenes, Angular creates a transcluded scope that does not follow the typical scope inheritance chain for the directive itself, and then creates a new child scope for the transcluded contents that DOES inherit from the initial scope (so basically, inheritance 'skips over' the transcluded directive's scope). I think that's right anyway.... transclusion is a bit tricky coneptually, and I've seen it explained several different ways.",
        "category" : "angular",
        "commentsID": 13
  },
  "14": { "question": "Why use a q promise as opposed to just returning $http’s promise?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Good 'question', not sure? Does it just provide a level of separation so your code has more control over promise resolution/rejection?",
        "category" : "angular",
        "commentsID": 14
  },
  "15": { "question": "What does $resource do?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "$resource is a REST wrapper for $http that simplifies the boilerplate code needed to interact with web services (provided they adhere to REST). Personally I love it, but there are times when it's not feasible to use it (i.e., you don't control the API you're hitting and its not RESTful... although you could always stand up a Node/Express proxy in that case.",
        "category" : "angular",
        "commentsID": 15
  },
  "16": { "question": "Explain what a class selector is and how it is used.",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "A class can be thought of as a grouped collection of CSS attributes applied to HTML elements. This allows you to apply the same styling to multiple HTML elements by placing them in the same CSS class. Class methods can be called by inserting a ‘class’ property and name within an HTML element, then calling the class name with a ‘.’  in the CSS doc.",
        "category" : "css",
        "commentsID": 16
  },
  "17": { "question": "What are pseudo classes and what are they used for?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "$Pseudo classes are similar to classes, but are not explicitly defined in the markup, and are used to add additional effects to selected HTML elements such as link colors, hover actions, etc. Pseudo classes are defined by first listing the selector, followed by a colon and then pseudo-class element. :link, :visited, :hover, :active, :first_line are all examples of pseudo classes, used to call a specific action on an element, such as the changing of a link color after it has been visited.",
        "category" : "css",
        "commentsID": 17
  },
  "18": { "question": "What does $resource do?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Inline: Though this method often goes against best practices, it’s easily done by inserting a ‘style’ attribute inside an HTML element. Embedded/Internal: Done by defining the head of an HTML document by wrapping characteristics in a <style> tag. Linked/External: CSS is placed in an external .css file, and linked to the HTML document with a <link> tag. This can also be accomplished using the ‘@import’, however, this can slow page load time and is generally not advised.",
        "category" : "css",
        "commentsID": 18
  },
  "19": { "question": "What is the difference between HTML elements and tags?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "HTML elements communicate to the browser how to render text. When surrounded by angular brackets <> they form HTML tags. For the most part, tags come in pairs and surround text.",
        "category" : "html",
        "commentsID": 19
  },
  "20": { "question": "What is Semantic HTML?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Semantic HTML is a coding style where the tags embody what the text is meant to convey. In Semantic HTML, tags like <b></b> for bold, and <i></i> for italic should not be used, reason being they just represent formatting, and provide no indication of meaning or structure. The semantically correct thing to do is use <strong></strong> and <em></em>. These tags will have the same bold and italic effects, while demonstrating meaning and structure (emphasis in this case).",
        "category" : "html",
        "commentsID": 20
  },
  "21": { "question": "What does DOCTYPE mean?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "The term DOCTYPE tells the browser which type of HTML is used on a webpage. In turn, the browsers use DOCTYPE to determine how to render a page. Failing to use DOCTYPE or using a wrong DOCTYPE may load your page in Quirks Mode.",
        "category" : "html",
        "commentsID": 21
  },
  "22": { "question": "What's the difference between HTML and XHTML?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "XHTML, or Extensible HTML, is stricter than HTML. Following are requirements for XHTML: Elements must be properly nested. Elements, even empty ones, must always be closed. Elements and attribute names must always be in lowercase. Attribute values must be quoted, and attribute minimization is forbidden.",
        "category" : "html",
        "commentsID": 22
  },
  "23": { "question": "What's the difference between localStorage, sessionStorage, and cookies?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "For the most part, localStorage and sessionStorage are identical, with the main difference being that sessionStorage only persists as long as the session, while localStorage can persist after closing the window. They are typically used for storing non-sensitive data, such as user preferences or game scores. Cookies are typically used to store identifying tokens for authentication, session, and advertising tracking.",
        "category" : "html",
        "commentsID": 23
  },
  "24": { "question": "Describe the difference between <script>, <script async> and <script defer>.",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "With a normal <script> tag, the browser will run your script immediately, before rendering the elements below the tag. With <script async>, the browser will continue to load the HTML page and render it while the browser loads and execute the script at the same time. With <script defer>, the browser will run your script when the page has finished parsing.",
        "category" : "html",
        "commentsID": 24
  },
  "25": { "question": "What is progressive rendering?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Progressive rendering is the name given to techniques used to render content for display as quickly as possible. Examples of such techniques are lazy loading and prioritizing visible content.",
        "category" : "html",
        "commentsID": 25
  },
  "26": { "question": "What is the difference between classes and IDs in CSS?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "IDs are unique: each element can only have one ID, and each page can only have one element with that ID. Conversely, classes are not unique: each class can be used on multiple elements, and elements can have multiple classes.",
        "category" : "css",
        "commentsID": 26
  },
  "27": { "question": "What's the difference between 'resetting' and 'normalizing' CSS? Which would you choose, and why?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Resetting is removing all styling, including native browser styling, from every element. This means all elements will have the same font-size, line-height, spacing, etc. Normalizing is making elements render consistently across different browsers.",
        "category" : "css",
        "commentsID": 27
  },
  "28": { "question": "Describe Floats and how they work.",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Float is a property that pushes an element to the specified side - left or right. However, there are some conditions to be aware of: a parent with only floated children will have a height of zero, as if the children weren't there. The element will get out of its normal flow and be shifted in the specified direction until it reaches its container or another floated element. Text that follows a floated element will wrap around it.",
        "category" : "css",
        "commentsID": 28
  },
  "29": { "question": "Describe z-index and how stacking context is formed.",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "The z-index describes how elements should be stacked on a screen. Stacking context is usually established between a root element and positioned elements. In each stacking context, z-index will be calculated separately for children and will stack the children in ascending order.",
        "category" : "css",
        "commentsID": 29
  },
  "30": { "question": "Describe BFC(Block Formatting Context) and how it works.",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "A block formatting context is a part of a visual CSS rendering of a Web page. It is the region in which the layout of block boxes occurs and in which floats interact with each other. A block formatting context contains everything inside of the element creating it that is not also inside a descendant element that creates a new block formatting context.",
        "category" : "css",
        "commentsID": 30
  },
  "31": { "question": "What are the various clearing techniques and which is appropriate for what context?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Empty div method: <div style=\"clear: both;\"></div>. Overflow method: setting the auto or hidden overflow property on a parent will expand it to contain the floats. Pseudo method: uses the parent's :after to clear the \"both\" property",
        "category" : "css",
        "commentsID": 31
  },
  "32": { "question": "What are CSS sprites? How would you implement them on a page or site?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "CSS sprites are a way to reduce HTTP requests by combining images together into one big image so you only have to request one image. To implement, you combine all images into one image, usually separated by a pixel. In the CSS, put the background image on a sprite class that you use for all your images. To specify a specific image, set another class with the background positions and sizes of the image.",
        "category" : "css",
        "commentsID": 32
  },
  "33": { "question": "What are the different ways to visually hide content (and make it available only for screen readers)?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "#1 visibility: hidden. #2 width: 0; height: 0. #3 text-indent: -1000px. #4 absolute position off the screen.",
        "category" : "css",
        "commentsID": 33
  },
  "34": { "question": "What are some of the 'gotchas' for writing efficient CSS?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "#1 Avoid key selectors that match a large number of elements (like the tag and universal selector). #2 Prefer class and ID selectors over tag selectors. #3 Avoid redundant selectors. #4 Ideally, don't use * (the universal selector). #5 Try to group and reuse common properties.",
        "category" : "css",
        "commentsID": 34
  },
  "35": { "question": "Explain how a browser determines what elements match a CSS selector.",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Browsers read selectors from left to right. First it looks for all elements matching the right-most selector (the key selector), then it checks if it matches or is under the next (left-most) element.",
        "category" : "css",
        "commentsID": 35
  },
  "36": { "question": "How would you implement a web design comp that uses non-standard fonts? Webfonts (font services like: Google Webfonts, Typekit etc.)",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "#1 Use @font-face to render a font - it uses src for hard resources. #2 Link to webfont as a stylesheet, use @import, or use JavaScript.",
        "category" : "css",
        "commentsID": 36
  },
  "37": { "question": "What are the values for the CSS specificity rules?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Inline style: +1000. ID: +100. Class/pseudoclass/state attribute: +10. Element: +1.",
        "category" : "css",
        "commentsID": 37
  },
  "38": { "question": "Explain how 'this' works.",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "In functions: in real functions, 'this' is the global object (in 'sloppy' mode) or undefined (in 'strict' mode). In constructors, 'this' refers to the newly-created instance. In methods, 'this' refers to the receiver of the method call. Outside of functions: 'this' refers to the global object in browsers, or the module scope in Node.js. With eval(): if eval() is called indirectly, 'this' refers to the global object. If eval() is called directly, 'this' remains the same as the surroundings of eval().",
        "category" : "javascript",
        "commentsID": 38
  },
  "38": { "question": "How does prototypal inheritance work?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "The core idea of prototypal inheritance is that an object can point to another object and inherit all of its properties. The main purpose is to allow multiple instances of an object to share common properties - also known as the Singleton pattern. You can use the prototype property to add methods and properties to objects - even those that have already been created.",
        "category" : "javascript",
        "commentsID": 38
  },
  "39": { "question": "Explain why the following doesn't work as an IIFE: function foo(){ }(); What needs to be changed to properly make it an IIFE?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "The function does not work as an IIFE because it is not being called. foo is a function definition - but not a function expression - so calling it in this manner would result in a parse error. To tell the parser that we're dealing with an expression instead, we need to wrap the whole definition in parenthesis: (function foo() {}());",
        "category" : "javascript",
        "commentsID": 39
  },
  "40": { "question": "What's the difference between variables that are null, undefined or undeclared?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "An undeclared variable is a variable that does not exist. It lives in the global scope, separate from declared variables. An undefined variable exists, but has no value assigned to it. A null variable also exists, but has the value null assigned to it.",
        "category" : "javascript",
        "commentsID": 40
  },
  "41": { "question": "What is closure?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "A closure is a way of keeping access to variables in a function after that function has returned. In other words, it is a function defined within another scope that has access to all the variables within the outer scope.",
        "category" : "javascript",
        "commentsID": 41
  },
  "42": { "question": "What is the difference between function Person(){}, var person = Person(), and var person = new Person()?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "function Person(){} defines a function, but does not invoke it. var person = Person() delcares a variable (person), invokes a function (Person), and sets the variable to the return value of the function. var person = new Person() creates a new instance of an Object based on the Person function - so the variable person is now an Object.",
        "category" : "javascript",
        "commentsID": 42
  },
  "43": { "question": "What is the difference between .call and .apply?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": ".call and .apply do the same thing - the only difference is in the parameters they accept. .apply takes an array of parameters, while .call takes a comma-separated list of parameters.",
        "category" : "javascript",
        "commentsID": 43
  },
  "44": { "question": "Explain Function.prototype.bind.",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "The Function.prototype.bind() method creates a new function that, when called, has its 'this' keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.",
        "category" : "javascript",
        "commentsID": 44
  },
  "45": { "question": "Why would you use document.write(), and what is it commonly used for?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Unlike a traditional script tag, which blocks the page while it is loading and executing, a script loaded with document.write() will work asynchronously. This is often used for ads and analytics.",
        "category" : "javascript",
        "commentsID": 45
  },
  "46": { "question": "What's the difference between feature detection, feature inference, and using the User Agent string?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Feature detection checks a feature to see if it exists. Feature inference checks for a feature's existence, but uses another function because it can infer that it, too, exists. Checking the User Agent string is an older practice that involves checking for features based on the User Agent string.",
        "category" : "javascript",
        "commentsID": 46
  },
  "47": { "question": "What are the advantages and disadvantages of using Ajax?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Advantages: #1 Better interactivity. #2 Easier navigation. #3 Compact size. #4 Backed by reputed brands. Disadvantages: #1 The back and refresh buttons are rendered useless. #2 Users with JavaScript disabled will not be able to access your site.",
        "category" : "javascript",
        "commentsID": 47
  },
  "48": { "question": "What's the difference between an 'attribute' and a 'property'?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Attributes carry additional information about HTML elements and come in name=\"value\" pairs. Properties are representations of attributes in the HTML DOM tree. Attributes are in your HTML file whereas properties are in the HTML DOM tree.",
        "category" : "javascript",
        "commentsID": 48
  },
  "49": { "question": "Why is extending built-in JavaScript objects not a good idea?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Extending an object changes its behavior. This is fine when it's only in your code, but when you change the behavior of something that is used by other code, there is a risk that you'll break that other code. It also decreases your code's legibility and maintainability.",
        "category" : "javascript",
        "commentsID": 49
  },
  "50": { "question": "What is the difference between =, ==, and ===?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "The single equals (=) is the assignment operator. Double equals (==) is a relational operator that allows type conversion. Triple equals (===) is a strict relational operator that does not allow for type conversion.",
        "category" : "javascript",
        "commentsID": 50
  },
  "51": { "question": "Why is it called a Ternary expression, and what does the word 'Ternary' indicate?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "A Ternary expression is called that because it takes three operands. Ternary indicates the number three.",
        "category" : "javascript",
        "commentsID": 51
  },
  "52": { "question": "What is \"use strict\";? What are the advantages and disadvantages to using it?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Advantages: #1 It catches some common coding errors by throwing exceptions. #2 It prevents, or throws errors, when relatively 'unsafe' actions, such as gaining access to the global object, are taken. #3 It disables features that are confusing or poorly thought out. Disadvantages: #1 It does put some constraints on some features. #2 Mixing code with strict and normal modes can be problematic.",
        "category" : "javascript",
        "commentsID": 52
  },
  "53": { "question": "What is \"use strict\"? What are the advantages and disadvantages to using it?",
        "acceptance": "27.2%",
        "difficulty": "Medium",
        "answer": "Advantages: #1 It catches some common coding errors by throwing exceptions. #2 It prevents, or throws errors, when relatively 'unsafe' actions, such as gaining access to the global object, are taken. #3 It disables features that are confusing or poorly thought out. Disadvantages: #1 It does put some constraints on some features. #2 Mixing code with strict and normal modes can be problematic.",
        "category" : "javascript",
        "commentsID": 53
  },
}

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // addQuestionsToDatabase();
      // console.log('user is authenticatd');
      initializeState(user);
    } else {
      //clear state
      store.dispatch({ type: SIGNOUT_USER });
      console.log('User logged out (in onAuthStateChanged)');
    }
});

export function initializeState(user) {
  console.log('initializing state');
  store.dispatch({ type: AUTH_USER });
  //make dispatches to populate state that's needed
  // console.log('User logged in/signed up (in onAuthStateChanged)');
  // console.log('user:', user);
  // Load questions from database
  var questionsRef = firebase.database().ref('/questions');
  questionsRef.on("value", function(snapshot) {
    // console.log('dispatching load questions', snapshot.val());
    store.dispatch({ type: LOAD_QUESTIONS, payload: snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  var usersRef = firebase.database().ref('users/' + user.displayName );
  usersRef.on("value", function(snapshot) {
    // console.log('dispatching load questions', snapshot.val());
    store.dispatch({ type: INITIALIZE_USER, payload: snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

   // Load questions from database
  var commentsList = firebase.database().ref('/comments');
  commentsList.on("value", function(snapshot) {
    // console.log('dispatching load comments', snapshot.val());
    store.dispatch({ type: LOAD_COMMENTS, payload: snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  // Load algorithms from database
  var algorithmsRef = firebase.database().ref('algorithms');
  algorithmsRef.on("value", function(snapshot) {
    store.dispatch({ type: INITIALIZE_ALGORITHMS, payload: snapshot.val() });
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
  //load user algorithm responses
  var responseRef = firebase.database().ref('responses');
  responseRef.on("value", function(snapshot) {
    store.dispatch({ type: RESPONSE_INITIALIZE, payload: snapshot.val() });
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  //load study questions
  var studyRef = firebase.database().ref('users/' + user.displayName + '/studyList');
  studyRef.on("value", function(snapshot) {
    store.dispatch({ type: INITIALIZE_STUDY_QUESTIONS, payload: snapshot.val() });
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  // Load friends from database
  var friendsRef = firebase.database().ref('friends/' + user.displayName + '/friendsList');
  friendsRef.on("value", function(snapshot) {
    // console.log('dispatching initialize friends');
    store.dispatch({ type: INITIALIZE_FRIENDS, payload: snapshot.val() });
  }, function (errorObject) {
    console.log("The read failed:", errorObject.code);
  });

  // watch for friend invites
  var invitesRef = firebase.database().ref('friends/' + user.displayName + '/invites');
  invitesRef.on('child_added', function(childSnapshot) {
    // console.log('dispatching invites initialize');
    // console.log('childSnapshot', childSnapshot.val());
    store.dispatch({ type: INITIALIZE_INVITES, payload: childSnapshot.val() });
  });

  //watch for friend removes
  var friendsRemoveRef = firebase.database().ref('friends/' + user.displayName + '/friendsList');
  friendsRemoveRef.on('child_removed', function(childSnapshot) {
    // console.log('friend was removed from friends list');
    store.dispatch({ type: REMOVE_FRIEND, payload: childSnapshot.val().displayName });
  });

  var chatRef = firebase.database().ref('chat/' + user.displayName);
  chatRef.on('value', function(snapshot) {
    // console.log('chat has changed,', snapshot.val());
    store.dispatch({ type: INITIALIZE_CHAT, payload: snapshot.val() });
  });
}

export function signInWithEmailAndPassword(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function checkDisplayName(displayName) {
  return firebase.database().ref('displayNames/' + displayName).once("value");
}

export function createUserWithEmailAndPassword(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function signOutUser() {
  var user = firebase.auth().currentUser;
  if (user) {
    firebase.database().ref('/questions').off('value');
    firebase.database().ref('friends/' + user.displayName + '/friendsList').off('value');
    firebase.database().ref('friends/' + user.displayName + '/invites').off('child_added');
  }
  return firebase.auth().signOut();
}

export function addQuestionsToDatabase() {
  var ref = firebase.database().ref('/questions');
  ref.set(allQuestions);
  var ref = firebase.database().ref('/comments');
  ref.set(allComments);
}

export function createUserInDatabase(username, url) {
  var user = firebase.auth().currentUser;
  // console.log('user:', user);
  // console.log('username is:', username);
  var userRef = firebase.database().ref('users/' + username);
  var friendsRef = firebase.database().ref('friends/' + username);
  userRef.set({
    displayName: username,
    email: user.email,
    uid: user.uid,
    profileURL: 'https://i.imgur.com/DRuG5YH.png'
  });
  friendsRef.set({
    friendsList: {
      doug: {
        displayName: 'doug',
        email: 'idugcoal@gmail.com',
        uid: 'R6PAt6KeuCURYFB4d4BUS65qRsl1',
        profileURL: 'https://i.imgur.com/DRuG5YH.png'
      }
    },
    invites: {
      drew: {
        displayName: 'drew',
        email: 'drew@gmail.com',
        uid: 'UhlE2WagS7bKJfYrV5Kp6Ydt9Zl1',
        profileURL: 'https://i.imgur.com/DRuG5YH.png'
      }
    }
  });
}

export function createDisplayName(displayName) {
  var displayNamesRef = firebase.database().ref('displayNames/' + displayName);
  displayNamesRef.set({
    used: true
  });
}

export function checkIfUserExists(displayName) {
  // console.log('check if this user exists:', displayName);
  return firebase.database().ref('users/' + displayName).once("value");
}

export function addFriendInvite(displayName) {
  var user = firebase.auth().currentUser;
  // console.log('this is user before add:', user);
  // console.log('addFriendInvite uid:', displayName);
  //firebase.database().ref('friends/' + uid + '/invites/' + user.uid);
  var friendsInviteRef = firebase.database().ref('friends/' + displayName + '/invites/' + user.displayName);
  friendsInviteRef.set({
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    profileURL: user.photoURL || "https://i.imgur.com/DRuG5YH.png"
  });
}

export function acceptFriendRequest(userObj) {
  // add person to friends list in db
  // add self to their friends list in db
  // remove from invites
  var user = firebase.auth().currentUser;
  // console.log('user before set,remove, set', user);
  firebase.database().ref('friends/' + user.displayName + '/friendsList/' + userObj.displayName).set(userObj);
  firebase.database().ref('friends/' + user.displayName + '/invites/' + userObj.displayName).remove();
  firebase.database().ref('friends/' + userObj.displayName + '/friendsList/' + user.displayName).set({
    displayName: user.displayName,
    email: user.email,
    profileURL: user.photoURL,
    uid: user.uid
  });
}

export function ignoreFriendInvite(userObj) {
  // remove friend invite from own invite
  var user = firebase.auth().currentUser;
  firebase.database().ref('friends/' + user.displayName + '/invites/' + userObj.displayName).remove();
}

export function removeFriend(displayName) {
  // remove friend from own friends list
  // console.log('inside remove friend firebase');
  var user = firebase.auth().currentUser;
  // console.log('removefriend user.displayName:', user.displayName);
  // console.log('displaynamein remofriend:', displayName);
  firebase.database().ref('friends/' + user.displayName + '/friendsList/' + displayName).remove();
  // remove yourself from friends friend list
  firebase.database().ref('friends/' + displayName + '/friendsList/' + user.displayName).remove();
}

export function addMessage(messageObj) {
  var user = firebase.auth().currentUser;
  // add message object to own chat messages
  firebase.database().ref('chat/' + user.displayName + '/' + messageObj.recipient).push(messageObj);
  // add message object to receivers chat messages
  firebase.database().ref('chat/' + messageObj.recipient + '/' + user.displayName).push(messageObj);
  // console.log('current messageObj in addMessags in firebase.js:', messageObj);
}

export function addVotesToDatabase(commentIndex, questionIndex, next, upOrDown) {
  var user = firebase.auth().currentUser;
  var userToAdd = {};

  userToAdd[next] = user.displayName;

  switch(upOrDown) {
    case 'UP':
      var votePath = '/hasUpvoted';
      break;
    case 'DOWN':
      var votePath = '/hasDownvoted';
      break;
    default:
      console.log('error in firebase.js addsVotesToDatabase');
      return;
  }
  firebase.database().ref('comments/' + commentIndex + '/' + questionIndex  + votePath).update(userToAdd);
}

export function removeVotesFromDatabase(commentIndex, questionIndex, next, upOrDown) {
  var user = firebase.auth().currentUser;
  var userToRemove = {};

  userToRemove[next] = user.displayName;

  switch(upOrDown) {
    case 'UP':
      var votePath = '/hasUpvoted';
      break;
    case 'DOWN':
      var votePath = '/hasDownvoted';
      break;
    default:
      console.log('error in firebase.js removeVotesFromDatabase');
      return;
  }

  firebase.database().ref('comments/' + commentIndex + '/' + questionIndex + votePath + '/' + next).remove();
}


export function updateAlgorithmAnswers(answer, index) {
  var user = firebase.auth().currentUser;
  console.log('this is in firebase',answer);
  var userAnswer = {};
  userAnswer[user.displayName] = answer;
  firebase.database().ref('algorithms/' + index + '/userAnswers').update(userAnswer);
}
export function userAlgorithmVote(index,vote){
  var user = firebase.auth().currentUser;
  var response = {[user.displayName]:vote.value};
  var total;
  console.log('vote is:', vote);
  firebase.database().ref(`responses/${index}/${vote.author}/count`).once('value',function(data){
    console.log('data.val() is:', data.val());
    total = data.val() || 0;
    total += vote.dif;
    console.log('vote.diff:', vote.dif);
    console.log('total after change:', total);
    firebase.database().ref(`responses/${index}/${vote.author}`).update({count: total})
  });
  firebase.database().ref(`responses/${index}/${vote.author}/votes`).update(response);
}
export function userAlgorithmComment(index,commentObj){
  var user = firebase.auth().currentUser;
  var response = {[new Date()]:commentObj.comment};
  firebase.database().ref(`responses/${index}/${commentObj.author}/comments/${user.displayName}`).update(response);
}

export function addCommentToDatabase(currentUser, commentsList, commentID, commentBody) {
  var next = commentsList[commentID].length;
  var newComment = {};

  newComment = {
    "comment": commentBody,
    "username": currentUser,
    "hasUpvoted": ['', currentUser],
    "hasDownvoted": ['']
  }

  firebase.database().ref('comments/' + commentID + '/' + next).update(newComment);
}

export function addQuestionToStudyList(currentUser, questionID) {

  var studyList = {};
  studyList[questionID] = true;

  firebase.database().ref('users/' + currentUser + '/studyList').update(studyList);
}

export function removeQuestionFromStudyList(currentUser, questionID) {
  firebase.database().ref('users/' + currentUser + '/studyList/' + questionID).remove();
}