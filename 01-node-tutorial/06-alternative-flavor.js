
// this is called "exports as you go"
// this will export an object containing both items and singlePerson
// specifically like this:
// { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }
module.exports.items = ['item1', 'item2']  // first exports
const person = {
  name: 'bob',
}
module.exports.singlePerson = person  // second exports


// its like saying this:
const a = {};
a.name = "peter";
a.age = 55;
// console.log(a);  // { name: 'peter', age: 55 }