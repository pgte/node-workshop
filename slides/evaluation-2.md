# 2nd Evaluation Moment

May 14th 2015



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

### Hello World

> Create an HTTP server listening on port 3000 that replies the string "Hello World" to every request

File: `hello-world.js`



## Exercise 2

### Pipe a file

> * Create an HTTP server listening on port 3000 that serves files.
> * The file is specified by the request URL and is relative to the current work directory.
> * If the file is found, pipe the file's contents into the response.
> * If no file is to be found, return a 404 status.

File: `file-server.js`



## Exercise 3

### Express static server

> Install express and use it to create a static file server listening on port 3000, that behaves similarly to the previous one.
> 

File: `express-static.js`


Tip:

To install express you can do:

```
$ npm install express
```



## Exercise 4

### Routes

> * Create an express server listening on port 3000 that has the following routes:
>   * POST /form
>   * GET /form
> * When using the first route, store the body of the request as text in a global variable and reply a 200 status.
> * When using the second route, the saved body text is sent in the response body.

(continues down)


To test it you can use the following command line:

```
$ curl -X POST -d "some text here" -H "content-type: text/plain" localhost:3000/form
```

File name:  `express-routes.js`


#### Tip 1

To be able to parse the body, you can use the [`body-parser` NPM package](https://github.com/expressjs/body-parser) as middleware.

To install it you can:

```
$ npm install body-parser
```

#### Tip 2

Use the __text__ body parser middleware.



## Please don't forget to

* zip your working directory
* send it using email to [i@pgte.me](mailto:i@pgte.me), using the subject "node workshop"
* Confirm with the tutor he has received it