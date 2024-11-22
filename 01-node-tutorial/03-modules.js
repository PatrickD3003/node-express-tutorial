// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// always set up with a dot(.) when writing the file path for require(), if its not a build in module
// if its a built-in modules like OS, dont use ./ !! ex: require('os') ✅
const names = require('./04-names')  // this one returns an object
const sayHi = require('./05-utils')  // this one returns a function
const data = require('./06-alternative-flavor')  // this one returns an object containing items and singlePerson

// if we have a function inside the module that we invoke,
// the code will run even tho we didn't assign it into a variable
require('./07-mind-grenade')  // this one run the whole file
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

console.log(module)  // print a global called module
// exports is an object

// console.log(data)
 