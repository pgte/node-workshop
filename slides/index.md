#Hello

```js
$ whoami
{
  "name": "Pedro Teixeira",
  "job": "Partner and Director at YLD! (http://yld.io)",
  "github": "pgte",
  "twitter": "pgte",
  "published books about node": Infinity,
  "published modules": Number.MAX_VALUE,
  "using node since": "v0.1 (early 2010)",
  "profesh using node since": "v0.2 (2011)"
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


## Function closures

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



# 1.3 Sync and Async


Read the content of a file synchronously

```javascript
// read-file-sync.js

var fs = require('fs');

var file = fs.readFileSync(__filename, {encoding: 'utf8'});

console.log(file);
```

(also, encodings and `console.log`);


Read the content of a file asynchronously

```javascript
// read-file-async.js

function finishedReading(err, file) {
  if (err) {
    throw err;
  }

  console.log('got file contents\n---------');
  console.log(file);
}
```

```javascript
var fs = require('fs');

console.log('going to read a file')

fs.readFile(
  __filename,
  {encoding: 'utf8'},
  finishedReading);

console.log('have started reading a file');
```


Callback pattern

* callback function as last argument
* callback signaure `(err[, result])`


## Exercise 1.1

### file-size.js

* a command-line script named `file-size.js`
* that accepts a file path as first argument
* checks if file exists
* if file exists, prints file size in bytes
* use only async functions

(consult the [Node API online docs](http://iojs.org/api))


[one solution for 1.1](code/01/file-size.js)

```js
var fs = require('fs');

var path = process.argv[2];

fs.exists(path, function(exists) {
  if (exists) {
    fs.stat(path, function(err, stat) {
      if (err) {
        throw err;
      }
      console.log(stat.size);
    });
  }
});
```



# 1.4 Making HTTP client requests


## Exercise 1.2

### get-headers.js

* Given a URL as a command-line argument,
* make a client HTTP GET request to that URL
* print the response headers
* this time, make this script an executable


[one solution for 1.2](code/01/get-headers.js)

```js
#!/usr/bin/env node
var http = require('http');

var url = process.argv[2];
if (! url) {
  throw new Error('Need an URL');
}

http.get(url, function(res) {
  console.log(res.headers);
});
```


##Exercise 1.3

### get.js

* same thing as before, but print the response body instead


[one solution for 1.3](code/01/get.js)

```js
#!/usr/bin/env node
var http = require('http');

var url = process.argv[2];
if (! url) {
  throw new Error('Need an URL');
}

http.get(url, function(res) {
  res.pipe(process.stdout);
});
```
