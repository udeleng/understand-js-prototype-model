Understanding the JS Prototype Model
=============================

Feel free to help make this project better. If you see any errors or incorrect statements, let me know or issue a pull request.

This simple project aims to help advance the understanding of the relationships between Function, function, Object, object, *.prototype*, and [[prototype]]. I have been reading [Kyle Simpson](https://github.com/getify/You-Dont-Know-JS) incrediblly insightful books about scope, closure, this, and prototype. However, even after reading those books, there were still a few nagging questions. 

You may have heard the statement that in JavaScript, everything is an object. But is a function declaration also an object. We know about creating object using either object literal notation, using the *new* keyword, or Object.create(). Then what is the difference between a function created using the *function* keyword and one created as an instance of Function? And what came first, Object or Function? Using the insights gained from Kyle's prototype book, I wrote some tests in Chrome's DevTools and came up with the following diagram to illustrate the relationships: 

![JavaScript Prototype Model](https://github.com/udeleng/understand-js-prototype-model/raw/master/images/javascript_prototype_model.png)

*In the diagram, arrows emerge either directly from [[prototype]] or the .prototype property and arrive at object boundaries, thus pointing directly at the object and not at something inside that object.*

In JavaScript, you can add a property/value pair to an object. You can also add a property/value to a function: myFunction.myProperty = myValue. So, Function, on its own, without being instantiated, is an object. But there are differences.

#####Concept 1: prototype object

A prototype is typically a plain JS object, such as when you create one using literal notation: var a = {}. This is unlike a Function object, which is created using the function keyword. Creating a plain object from a function requires the use of the "new" keyword: var f = new Foo(). Prototypes can be linked together which creates a prototype chain. This chain is the basis for the prototypal lookup. 

##### Concept 2: [[prototype]] property

All objects have an internal property that references its prototype, which I'll refer to as [[prototype]]. When the JS engine tries to resolve a property/method that requires a protoypal lookup (i.e. this.myMethod()), it uses the [[prototype]] property to move up the chain of objects, until it reached the very top of the chain (if not found, you'll get either undefined or TypeError). Typically, the top of the prototype chain is the object referenced by Object.prototype (see Concept 3 for explanation of prototype property). When I refer to an object's prototype, I am referring to the value of object.[[prototype]]

##### Concept 3: prototype property

A function object has prototype property (different than the [[prototype]] property). The property references a plain object that will become the prototype of yet another object if the function is invoked using the "new" keyword. A plain object does not typically have prototype property, as the property's purpose it to create a prototype chain during construction, and a plain object is already constructed. 

##### Creating a prototype chain

1. Using the "new" keyword - When you invoke a function using "new", the engine creates a plain object in memory, links it to the plain object referenced by its prototype property, and returns it from the constructor, which is then assigned to some variable.

2. Using Object.create(arg) - The method creates a plain object and links its [[prototype]] to the specified argument. 

  a. Object.create(myFunction.prototype): creates an object and links its prototype ([[prototype]]) to myFunction.prototype. Here you get two plain objects linked together, the parent of which is myFunction.prototype.

  b. Object.create(null): creates an object but does not link to Object.prototype and thus no properties are inherited. This is a good way to create a map that you can iterate through without running into any inherited method, since iterating on properties would include any inherited iterable properties.
  
  c. Object.create(myFunction): the plain object inherits directly from a function. If you've defined methods on your function's prototype property, those methods would not be available because your new object prototype chain follows the function's [[prototype]] property.

##### Discovering relationships

  You can use Object.getPrototypeOf(arg) to find the value referenced obj arg.[[prototype]].
  
  You can use X instanceof Y where X can be any object and Y must be a function because the engine looks for the prototype property of Y to determine if you can get from the object X to the object referenced by Y.prototype using the prototype chain.

