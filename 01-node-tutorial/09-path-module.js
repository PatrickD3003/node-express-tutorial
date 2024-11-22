const path = require('path')

console.log(path.sep)  // return your platform's specific separator

// create a file path based on the folder/file name
// if you add unnecessary slash'/', they will automatically remove it
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

// create absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
