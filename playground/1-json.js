const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)

data.name = 'Jeroen'
data.age = 24

const newDataJson = JSON.stringify(data)

fs.writeFileSync('1-json.json', newDataJson)