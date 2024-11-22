// module to interact with filesystem

// the difference between sync and async
// sync reads the program using top-bottom method
// which means the task are executed one after another
// if there are more than one user accessing one very long sync function,
// it can make the server down

// meanwhile async function are able to "offload" an async task
// and skip to the next task, which allows
// for multiple user to use the application

const { readFile, writeFile } = require('fs')

// we need to provide a callback for async method
// we run callback when the function complete
// it handles errors (if(err)) and processes the result(file contents)
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {  // handles errors
    console.log(err) 
    return
  }
  const first = result  // processes the result

  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')
