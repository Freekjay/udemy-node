const request = require('request')
const fs = require('fs')

const weatherstackApiKey = fs.readFileSync('weatherstack-api-key.txt').toString()

const forecast = (lat, long, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=${weatherstackApiKey}&query=${lat},${long}&units=m`

    request(url, {json: true}, (error, response, body) => {
        if (error) {
            callback(`Couldn't reach the Mapbox API`, undefined)
        } else if (body.error) {
            callback(`Couldn't find the specified lat long`,undefined)
        } else {
            const currDegrees = body.current.temperature
            const currRainChance = body.current.precip
            const currDesc = body.current.weather_descriptions[0]
            
            callback(undefined, 
                `${currDesc}. It is currently ${currDegrees} degrees out. There is a ${currRainChance}% chance of rain.`
            )
        }        
    })
}

module.exports = forecast