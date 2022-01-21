const fs = require('fs')
const request = require('postman-request')

const weatherstackApiKey = fs.readFileSync('weatherstack-api-key.txt').toString()
const mapboxApiKey = fs.readFileSync('mapbox-api-key.txt').toString()

const getLatLong = () => {
    
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/los%20angeles.json?limit=1&access_token=${mapboxApiKey}`

    request(url, {json: true}, (error, response, body) => {
        
        if (error) {
            console.log(`Couldn't reach the Mapbox API`);
        } else if (body.features.length === 0) {
            console.log('Could not find the specified location');
        } else {
            const coordinates = body.features[0].geometry.coordinates
            const lat = coordinates[0]
            const long = coordinates[1]
            
            console.log(`Lat: ${lat}, Long: ${long}`);
        }
        
    })
}

const getWeather = () => {

    const url = `http://api.weatherstack.com/current?access_key=${weatherstackApiKey}&query=37.8267,-122.4233&units=m`

    request(url, {json: true}, (error, response, body) => {
        
        const currDegrees = body.current.temperature
        const currRainChance = body.current.precip
        const currDesc = body.current.weather_descriptions[0]
        
        console.log(`${currDesc}. It is currently ${currDegrees} degrees out. There is a ${currRainChance}% chance of rain.`);
    })
}

getLatLong()