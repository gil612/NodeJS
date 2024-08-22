// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils')

console.log(names.peter)

const data = require('./6-alternmative-flavor')
require('./7-mind-grenade')
console.log(data)
sayHi('susan')
sayHi(names.john)