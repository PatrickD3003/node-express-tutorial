// GLOBALS  - NO WINDOW !!!!
// these variables can be accessed anywhere around the application

// these are just some of the examples!
// __dirname  - path to current directory, this can be accessed through console.log
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

// console is one of the most frequently used global object in javascript
console.log(__dirname)
setInterval(() => {
  console.log('hello world')
}, 1000)
