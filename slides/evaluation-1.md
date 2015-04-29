# 1st Evaluation Moment

April 30th 2015



## Schedule

Starts at 16:15

Ends at 18:50



## Rules

Open book, consult at will.

No copying, please (originality counts).



## Steps

1. Create a new folder where you will place all the files.
2. Solve the test by creating the requested source files in that folder.
3. Make sure you named the files as asked.
4. When you're done (or time is out), zip that folder and send it to [i@pgte.me](mailto:i@pgte.me) with the subject "node workshop"
5. Come to me to confirm that I have received it.



## The test

4 Exercises

Ladies and gentlemen, start your nodes



##Exercise 1

### Input Output

> Take data in `process.stdin` and pipe it to `process.stdout`.

File: `input-output.js`



## Exercise 2

### Transform

> Convert data from `process.stdin` to upper-case data on `process.stdout` using the `through2` module.

File: `transform.js`


Tips:

To get the `through2` module you'll need to do:

```
$ npm install through2
```



## Exercise 3

### Modularize

> Isolate this uppercasing transform stream as a reusable module.
> 
> This module should export a function that returns one of these streams.

File: `uppercase.js`


Here is an example of how your new module should be used:

```js
var Uppercase = require('./uppercase');

// create stream
var uppercase = Uppercase();
```



## Exercise 4

### Lines

> Instead of transforming every line as in the previous example, convert even-numbered lines to upper-case and odd-numbered lines to lower-case. Consider the first line to be odd-numbered.
> 
> Do this by using the `uppercase.js` module you build on the last exercise.

File name: `lines.js`


For example given this input:

```
One
Two
Three
Four
```

Your program should output:

```
one
TWO
three
FOUR
```


##Tips

1. To split lines you can install the `split2` NPM module
2. To test this you can:
    - create a file named `lines.txt` with separate lines and then
    - pipe it to your program using the command-line:

```
$ node lines.js < lines.txt
```



## Please don't forget to

* zip your working directory
* send it using email to [i@pgte.me](mailto:i@pgte.me), using the subject "node workshop"
* Confirm with the tutor he has received it