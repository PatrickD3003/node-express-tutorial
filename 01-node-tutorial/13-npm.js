// npm --verison

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)


// run npm init to create new package.json file
// this file provides data about the project
// and its dependencies, scripts, and configuration
// this file is VERY IMPORTANT
// especiallly when we're sharing our project with other developer
// when we're sharing our project to github,
// we use .gitignore to ignore the node_modules folder,
// since they're usually very big and we don't want to push them to github
// but then, how the other developer can run our application if they dont have the node_modules folder
// this is when the package.json is very useful
// because just by running "npm install" on their machine,
// they are able to install all the dependencies!

// this is how you access the npm module(you need to download it first)
const _ = require('lodash')

const items = [1, [2, [3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)


// run npm uninstall <packageName>

