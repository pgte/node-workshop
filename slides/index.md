#Hello

```javascript
console.log('abc');
function abc() {
    
}
```



#About this workshop


##Main Goal

To learn about how to solve common programming problems and create back-end services using Node.js.


##Short description

Learn about JavaScript and asynchronous programming, flow control, event emitters and streams — master the basic patterns so that you can use Node.js and some surrounding libraries to solve real real problems, create useful APIs and offer real-time services.


##Who should attend

People with some experience with programming. Experience in JavaScript programming is nice, but not a requirement. Experience with Node.js is definitely not a requirement.


##Requirements

Bring your own laptop
Have latest Node.js or IO.js installed



#Syllabus


## Level 1

An overview of Node.js, JavaScript, blocking vs. non-blocking code, reading files, issuing requests


##Level 2
Exporting, npm installing, dependencies, and semantic versioning


##Level 3
Using the Async module to control asynchronous flow


##Level 4
Event emitters, event requests, event listening


##Level 5
Streams: Reading, writing, piping, solving backpressure


##1st Evaluation Moment

Assignment TBD


##Level 6

Command-line


##Level 7
TCP server


##Level 8
HTTP Servers


##Level 9
Creating an API Server using Express


##Level 10
Real-time using Socket.io


##2nd and last evaluation moment

Assignment TBD




# Level 1

An overview of Node.js, blocking vs. non-blocking code, reading files, issuing requests.



# 1.1 Command-line node


## Node Version

```
$ node -v
v1.6.3
```


## REPL

```
$ node
> console.log('Hello World!');
Hello World!
undefined
```


## REPL

```js
$ node
> var a = 1;
> undefined
> var b = 2;
> undefined
> function add(one, two) {
>   return one + two;
> }
> 
> add(a, b);
> 3
```


## Command-line execution

```js
$ node -e "console.log('Hello World\!')"
Hello World!
```


## Stdin execution

```js
$ echo "console.log('Hello World\!')" | node
Hello World!
```


## File execution

```bash
$ node code/01/hello-world.js
Hello World!
```



# 1.2 First, some JavaScript


## Variables

```js
a = 1;
var b = 1;
```


## Types

* Booleans
* Numbers
* Strings
* Objects
  * Object objects
  * Arrays
* Functions


```js
> typeof false === 'boolean';
> typeof 'a' === 'string';
> typeof 1 === 'number';
> 1 === 1;
> 'a' === 'a';
> typeof {a:1} === 'object';
> {a:1} !== {a:1}
```


## Equality == LOL.js

```js
> [] == '' == 0;
> [] == false;
> [1] == true;
```


## Functions


You can store a function in a variable:

```
> var a = function(first, second) { return first + second; };
> a(2, 3);
5
```


You can name a function:

```
function sum(first, second) { return first + second; };
sum(2, 3);
// 5
```


You can pass a function as an argument of a call:

```javascript
function sum(first, second) { return first + second; };
var numbers = [3,6,2,4,6,7];
numbers.reduce(sum, 0);
// 28
```

```javascript
function multiply(first, second) { return first * second; };
numbers.reduce(multiply, 1);
// 6048
```


You can pass a function inline:

```javascript
numbers.filter(function(n) {
  return n%2 == 0;
});
// [ 6, 2, 4, 6 ]
```


You can return a function:

```javascript
function multiplyBy(n1) {
  return function(n2) {
    return n1 * n2;
  }
}

numbers.map(multiplyBy(10));
// [ 30, 60, 20, 40, 60, 70 ]
```


You can enrich a function:

```javascript
function multiply (n1, n2) {
  return n1 * n2;
};

multiply.by = function(n1) {
  return function(n2) {
    return multiply(n1, n2);
  };
};

[2,3,4].map(multiply.by(2));
// [ 4, 6, 8 ]
```


A function can accept a variable number of arguments:

```javascript
function multiply() {
  var args = Array.prototype.slice.call(arguments);
  var result = args.shift() * args.shift();

  if (args.length) {
    args.unshift(result);
    result = multiply.apply(null, args);
  }

  return result;
}

multiply(1,2,3,4,5); // 120
```

(Also, you can apply a function).


### You can call a function several ways

Unscoped call:

```javascript
multiply(1,2,3,4);
```


Scoped call:

```javascript
[1,2,3].map(multiply);
```


Another example:

```javascript
var specialNumber = {
  value: 10,
  multiply: function(n) {
    return this.value * n;
  }
};

> specialNumber.value
10
> specialNumber.multiply(2)
20
```

(also, object literals)


## Closures

In JS, a function creates a new scope, a scope has a parent scope, and can also access all the arguments, local variables and functions in the parent scopes.


```javascript
var countBy = 1;

function remember() {
  var counter = 0;
  return {
    count: function() {
      counter += countBy;
      return counter;
    }
  };
}
```

```javascript
> var r = remember();
undefined
> r.count()
1
> r.count()
2
> r.count()
3
> countBy = 2
2
> a.count()
5
> a.count()
7
```
