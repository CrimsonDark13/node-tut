const os = require('os');

// info about current user
const user = os.userInfo();


// method returns the systems up-time in seconds
console.log(`system Uptime is ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs);