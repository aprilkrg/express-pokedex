// NOTE the index.js acts as a central hub for express to check on, without this file express won't read the other controller files

// require the controller file
const dinoController = require("./dinoCntlr")

// export the module
module.exports = dinoController