// local
const secret = 'SUPER SECRET'
// share
const john = 'john'
const peter = 'peter'

module.exports = { john, peter }

// if you look at the log, exports is an object
// whatever you dump in the exports, you can share to the whole application!
console.log(module)  

