const fs = require("fs")

const apiKey = fs.readFileSync('api-key.txt').toString()

console.log(apiKey);