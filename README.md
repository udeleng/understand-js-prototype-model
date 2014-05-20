understand-js-prototype-model
=============================

This simple project is to help me (and perhaps others) understand the relationship between Function, function, Object, object, .prototype, and [[prototype]]. I have been reading [Kyle Simpson](https://github.com/getify/You-Dont-Know-JS) incrediblly insightful books about scope, closure, this, and prototype. However, even after reading those books, there were still a few nagging questions. 

Firstly, when hearing the statement that, in JavaScript, everything is an object, I wondered if a simple function declaration is also an object. I knew about creating object using either object literal notation, using the new_ keyword, or Object.create(). But how can a declared function be an object. Using the insights I gained from Kyle's prototype book, I wrote some tests in Chrome's DevTools and came up with the following diagram to illustrate the relationships: 
