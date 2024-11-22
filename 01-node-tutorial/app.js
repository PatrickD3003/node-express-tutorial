const _  = require('lodash')

const items = [1, [2],[33], [55]]
const newItems = _.flattenDeep(items)

console.log(newItems)
console.log("hello developers")