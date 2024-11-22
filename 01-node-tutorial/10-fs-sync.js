
// module to interact with filesystem
// two flavor to do, asynchronously(nonblocking), or synchronously(blocking)
// we'll cover the differences later in the course
const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// write something on a file, if the file doesn't exist, 
// it will create new file based on the path provided.
writeFileSync(
  './content/result-sync.txt',  // file path to be written
  `Here is the result : ${first}, ${second}`,  // value to be written
  { flag: 'w' }  // 'a' is for append the file, 'w' is for rewrite
)
console.log('done with this task')
console.log('starting the next one')
