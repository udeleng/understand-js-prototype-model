Understanding the JS Prototype Model
=============================

Feel free to help make this project better. If you see any errors or incorrect statements, let me know or issue a pull request.

This simple project aims to help advance the understanding of the relationships between Function, function, Object, object, *.prototype*, and [[prototype]]. I have been reading [Kyle Simpson](https://github.com/getify/You-Dont-Know-JS) incrediblly insightful books about scope, closure, this, and prototype. However, even after reading those books, there were still a few nagging questions. 

You may have heard the statement that in JavaScript, everything is an object. But is a function declaration also an object. We know about creating object using either object literal notation, using the *new* keyword, or Object.create(). Then what is the difference between a function created using the *function* keyword and one created as an instance of Function? And what came first, Object or Function? Using the insights gained from Kyle's prototype book, I wrote some tests in Chrome's DevTools and came up with the following diagram to illustrate the relationships: 

![JavaScript Prototype Model](https://github.com/udeleng/understand-js-prototype-model/raw/master/images/javascript_prototype_model.png)

*In the diagram, arrows emerge either directly from [[prototype]] or the .prototype property and arrive at object boundaries, thus pointing directly at the object and not at something inside that object.*

## Observations

The first question, whether a function is an object, can be answered with the definition of an object in JavaScript that it is a standalone thing that can hold properties. As such, functions are objects since we can attach proprties directly to them that can be accessed or modified at a later time.

All object have a [[prototype]] property which can be accessed with Object.getPrototypeOf(). The [[prototype]] property is the basis for the prototypal lookup. Prototypal lookup occurs when trying to access a property (value or function) on an object. In the diagram, follow the arrow from your current object's [[prototype]] property to each object's [[prototype]] property in sequence. Otherwise lexical scoping rules applies. 

At runtime, function objects are given a *.prototype* property. The *.prototype* property is only used to initialize the [[prototype]] property when creating a new object. It is also used when comparing object using the instanceof operator. The instanceof operator checks if the object referenced by the right operand's (which must be a function object) .prototype property exists anywhere in the prototype chain of the object referenced by the left operand. In the diagram, you can see that myFoo is an instanceof Foo, but it's not an instanceof Function. On the other hand, Foo is an instanceof Function. Function and Object are also instances of each other.

All functions are instances of Function, including the Object function. And the Function function is an instance of itself. 

All objects (function or otherwise) are instances of Object because their prototype chain leads to the object referenced by Object.prototype.

The last object in the prototype chain is referenced by Object.prototype and its [[prototype]] property is set to null.

A property defined directly on a function object, for example Object.encrypt = function encrypt() {}, would not be discovered by a subtype using the reference this.encrypt(), because the prototype chain ends in Object.prototype, which is different than the Object function itself. 