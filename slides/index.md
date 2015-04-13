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



##Syllabus


## Level 1

An overview of Node.js, blocking vs. non-blocking code, reading files, issuing requests


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


# Command-line node


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
