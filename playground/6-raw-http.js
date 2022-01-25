const http = require('http')
const fs = require('fs')

const weatherstackApiKey = fs.readFileSync('../weather-app/weatherstack-api-key.txt').toString()
const url = `http://api.weatherstack.com/current?access_key=${weatherstackApiKey}&query=40,-75&units=m`

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log(error);
})

request.end()