Understanding the JS Prototype Model
=============================

This simple project aims to help advance the understanding of the relationships between Function, function, Object, object, .prototype, and [[prototype]]. I have been reading [Kyle Simpson](https://github.com/getify/You-Dont-Know-JS) incrediblly insightful books about scope, closure, this, and prototype. However, even after reading those books, there were still a few nagging questions. 

You may have heard the statement that in JavaScript, everything is an object. But is a function declaration also an object. We know about creating object using either object literal notation, using the *new* keyword, or Object.create(). What is the difference between a function created using the *function* keyword and one created as an instance of Function? And what came first, the Object or the Function? Using the insights I gained from Kyle's prototype book, I wrote some tests in Chrome's DevTools and came up with the following diagram to illustrate the relationships: 

![JavaScript Prototype Model](https://github.com/udeleng/understand-js-prototype-model/raw/master/images/javascript_prototype_model.png)

*In the diagram, arrows emerge either directly from **[[prototype]]** or the **.prototype** property and arrive at object boundaries, thus pointing directly at object and not at something inside that object.*

## Observations

The first question, whether a function is an object, can be answered with the definition of an object in JavaScript that it is a standalone thing that can hold properties. And as such, we can attach proprties directly to functions that can be accessed or modified at a later time.

All object have a **[[prototype]]** reference. The **[[prototype]]** reference is the basis for the prototypical lookup. Prototypical lookup occurs when trying to access a property (value or function) on an object. Otherwise lexical scoping applies. 

At runtime, function objects are given a .prototype property. The **.prototype** property is only used to initialize the **[[prototype]]** reference when creating a new object or when using the instanceof operator to test object hierarchies.  

The last object in the prototype chain is referenced by Object.prototype and its **[[prototype]]** reference is set to null.

All functions are instances of Function, including the Object function. And the Function function is an instance of itself. 

