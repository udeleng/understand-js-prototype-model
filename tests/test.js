var myFoo = new Foo(),
    prototypeOf = Object.getPrototypeOf; // retrieves [[prototype]]
    
function log(msg, test) {
    console.log('' + test, (test ? ' ' : '') + '--> ' + msg);
}
    
function Foo() { }

log('myFoo.[[prototype]] === Foo.prototype', (prototypeOf(myFoo) === Foo.prototype)); // true

log('myFoo.[[prototype]] === Foo[[prototype]]', (prototypeOf(myFoo) === prototypeOf(Foo))); // false

log('myFoo.[[prototype]].[[prototype]] == Object.prototype', (prototypeOf(prototypeOf(myFoo)) === Object.prototype)); // true

log('myFoo instanceof Foo', (myFoo instanceof Foo)); // true

log('myFoo instanceof Function', (myFoo instanceof Function)); // false

log('myFoo instanceof Object', (myFoo instanceof Object)); // true


log('Foo.[[prototype]] === Foo.prototype',(prototypeOf(Foo) === Foo.prototype)); // false

log('Foo.[[prototype]] === Function.prototype', (prototypeOf(Foo) === Function.prototype)); // true

log('Foo.[[prototype]] == Function.[[prototype]]', (prototypeOf(Foo) === prototypeOf(Function))); // true

log('Foo.prototype.[[prototype]] === Object.prototype', (prototypeOf(Foo.prototype) === Object.prototype)); // true

log('Foo instanceof Foo', (Foo instanceof Foo)); // false

log('Foo instanceof Function', (Foo instanceof Function)); // true

log('Foo instanceof Object', (Foo instanceof Object)); // true

log('Foo.prototype instanceof Function', (Foo.prototype instanceof Function)); // false

log('Foo.prototype instanceof Object', (Foo.prototype instanceof Object)); // true


log('Function.[[prototype]] === Function.prototype', (prototypeOf(Function) === Function.prototype)); // true

log('Function.[[prototype]] === Object.[[prototype]]', (prototypeOf(Function) === prototypeOf(Object))); // true

log('Function.prototype.[[prototype]] === Object.prototype', (prototypeOf(Function.prototype) === Object.prototype)); // true

log('Function instanceof Function', (Function instanceof Function)); // true

log('Function instanceof Object', (Function instanceof Object)); // true

log('Function.prototype instanceof Object', (Function.prototype instanceof Object)); // true


log('Object.[[prototype]] === Object.prototype', (prototypeOf(Object) === Object.prototype)); // false

log('Object.prototype.[[prototype]] === null', (prototypeOf(Object.prototype) == null)) // true