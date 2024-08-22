const os = require('os')

// Info about current users
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()/3600} hours`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)
console.log(currentOS.freeMem/currentOS.totalMem)

// const names = require('./4-names');
// const sayHi = require('./5-utils')

// console.log(names.peter)

// const data = require('./6-alternmative-flavor')
// require('./7-mind-grenade')
// console.log(data)
// sayHi('susan')
// sayHi(names.john)